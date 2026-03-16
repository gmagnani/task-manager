import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../lib/axios'
import { taskMutationKeys } from '../../keys/mutation'
import { taskQueryKeys } from '../../keys/queries'

export const useDeleteAllTasks = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: taskMutationKeys.deleteAll(),
    mutationFn: async () => {
      const { data: tasks } = await api.get('/tasks')

      const deletePromises = tasks.map((task) =>
        api.delete(`/tasks/${task.id}`)
      )

      await Promise.all(deletePromises)
    },
    onSuccess: () => {
      queryClient.setQueryData(taskQueryKeys.getAll(), [])
    },
    onError: () => {
      throw new Error()
    },
  })
}
