import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../lib/axios'
import { taskMutationKeys } from '../../keys/mutation'
import { taskQueryKeys } from '../../keys/queries'

export const useAddTask = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: taskMutationKeys.add(),
    mutationFn: async (newTask) => {
      const { data: createdTask } = await api.post('/tasks', newTask)

      return createdTask
    },
    onSuccess: (createdTask) => {
      queryClient.setQueryData(taskQueryKeys.getAll(), (oldTasks) => [
        ...oldTasks,
        createdTask,
      ])
    },
  })
}
