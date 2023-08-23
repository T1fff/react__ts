import create from "zustand"

const store = (set) => ({
  todos: [],
  copy: [],
  setTodos: (newTodos) => set({ todos: newTodos }),
  setCopy: (todos) => set({ copy: todos }),

  filterTasks: (filterType) =>
  set((state) => {
    let filteredTodos = [];
    const copyTodos = [...state.copy]

    if (filterType == 'true') {
      filteredTodos = copyTodos.filter((todo) => todo.fields.completed === 'true');
    }else if (filterType == 'false') {
      filteredTodos = copyTodos.filter((todo) => todo.fields.completed === 'false');
    } else {
      filteredTodos = state.copy;
    }
    return { todos: filteredTodos };
  }),
 
  
  deleteTask: (taskId) =>
  set((state) => {
    const updatedTodos = state.todos.map((todo) =>
      todo.id === taskId ? { ...todo, completed: true } : todo
    )
    return { todos: updatedTodos }
  }),
  completeTask: (taskId) =>
    set((state) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === taskId ? { ...todo, completed: true } : todo
      )
      return { todos: updatedTodos }
    }),
})

export const useStore = create(store)
