/* eslint-disable react/prop-types */
import { useState } from "react"
import { createATodo } from "../services/createATodo"
import { useMutation, useQueryClient } from "react-query"

export const CreateTodoForm = () => {
  const queryClient = useQueryClient()

  const createTodokMutation = useMutation(
    () => createATodo(titleValue, descriptionValue),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Todos")
      },
    }
  )
  const createTodo = () => {
    createTodokMutation.mutate()
    setTitleValue("")
    setDescription("")
  }

  const [titleValue, setTitleValue] = useState("")
  const [descriptionValue, setDescription] = useState("")

  return (
    <div className="flex flex-col mx-auto h-full px-3">
      <h3 className="text-center font-bold text-xl mt-2 mb-1 uppercase">Create a Todo</h3>
      <input
        type="text"
        placeholder="Add a title"
        className="p-1 m-2 rounded ring-2 ring-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition ease-in-out duration-300"
        value={titleValue}
        onChange={(event) => setTitleValue(event.target.value)}
      />
      <input
        type="text"
        placeholder="Add a description"
        className="p-2 pb-7 m-2 rounded ring-2 ring-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition ease-in-out duration-300"
        value={descriptionValue}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        className="mt-2 bg-teal-400 w-1/3 mx-auto rounded-lg font-bold p-1 text-teal-50 uppercase hover:bg-teal-600 ease-in-out duration-300"
        onClick={createTodo}
      >
        Create
      </button>
    </div>
  )
}
