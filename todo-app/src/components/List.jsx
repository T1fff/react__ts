import { ListItem } from "./ListItem"
import { useStore } from "../store/store"
import { callTodos } from "../API/api.jsx"
import { useQuery } from "react-query"
import { useEffect } from "react"

export const List = () => {
  const { data, isLoading, isError, error } = useQuery("Todos", callTodos)

  const setTodosInStore = useStore((state) => state.setTodos)
  const setTodosCopy = useStore((state) => state.setCopy)

  useEffect(() => {
    if (!isLoading && data) {
      setTodosInStore(data.data.records)
      setTodosCopy(data.data.records)
    }
  }, [data, isLoading, setTodosInStore, setTodosCopy])

  if (isError) {
    console.log(error);
  }

  const todosFromStore = useStore((state) => state.todos)

  return (
    <ul className="w-full flex flex-col mb-10 "> {}
      {todosFromStore.map((todo) => {
        return (
          <ListItem
            key={todo.fields.description}
            description={todo.fields.description}
          />
        )
      })}
    </ul>
  )
}
