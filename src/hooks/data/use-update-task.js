import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../lib/axios'
import { taskMutationKeys } from '../../keys/mutation'
import { taskQueryKeys } from '../../keys/queries'

export const useUpdateTask = (taskId) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: taskMutationKeys.update(taskId),
    mutationFn: async (newTask) => {
      const { data: updatedTask } = await api.patch(`/tasks/${taskId}`, {
        title: newTask.title.trim(),
        time: newTask.time,
        description: newTask.description.trim(),
      })
      return updatedTask
    },
    onSuccess: (updatedTask) => {
      queryClient.setQueryData(taskQueryKeys.getAll(), (oldTasks) =>
        oldTasks.map((oldTask) => {
          if (oldTask.id === taskId) {
            return { ...oldTask, ...updatedTask }
          }
          return oldTask
        })
      )
    },
  })
}
