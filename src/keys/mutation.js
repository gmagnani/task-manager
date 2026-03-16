export const taskMutationKeys = {
  add: () => ['addTask'],
  update: (id) => ['updateTask', id],
  delete: (id) => ['deleteTask', id],
}
