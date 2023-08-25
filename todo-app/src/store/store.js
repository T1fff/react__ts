import create from "zustand"

const store = (set) => ({
  todos: [],
  copy: [],
  titleValue: '',
  descriptionValue: '',
  darkToggle: false,
  searchValue: '',
  visible:false,
  createdSuccesfully: 'invisible',
  setTodos: (newTodos) => set({ todos: newTodos }),
  setCopy: (todos) => set({ copy: todos }),
  setTitleValue: (title) => set({ titleValue: title }),
  setDescriptionValue: (description) => set({ descriptionValue: description }),
  setSearchValue: (value) => set({ searchValue: value }),
  setDarkToggle: (value) => set({ darkToggle: value }),
  setVisible: (value) => set({ visible: value }),
  setCreatedSuccesfully: (value) => set({ createdSuccesfully: value }),



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

  searchTasks: () =>
  set((state) => {
    let filteredTodos = [];
    const copyTodos = [...state.copy]
    filteredTodos = copyTodos.filter(
      (todo) => {
        const todoText = todo.fields.description.toLowerCase();
        const searchText = state.searchValue.toLowerCase();
        return todoText.includes(searchText);
      }
    );

      
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
