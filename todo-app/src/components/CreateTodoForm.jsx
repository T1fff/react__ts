/* eslint-disable react/prop-types */
import { createATodo } from "../services/createATodo"
import { useMutation, useQueryClient } from "react-query"
import { useStore } from "../store/store"

export const CreateTodoForm = () => {
  const queryClient = useQueryClient()

  const titleValue = useStore((state) => state.titleValue)

  const descriptionValue = useStore((state) => state.descriptionValue)

  const setTitleValue = useStore((state) => state.setTitleValue)

  const setDescriptionValue = useStore((state) => state.setDescriptionValue)

  const setVisible = useStore((state) => state.setVisible)

  const createdSuccesfully = useStore((state) => state.createdSuccesfully)

  const setCreatedSuccesfully = useStore((state) => state.setCreatedSuccesfully)

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
    setDescriptionValue("")
  }

  return (
    <div className="flex flex-col mx-auto h-full px-5 bg-gray-100 dark:bg-gray-800">
      <h3 className="text-center font-bold text-xl mt-7 mb-2 uppercase dark:text-slate-50">
        Create a Todo
      </h3>
      <p className={`mb-2 text-center font-bold uppercase bg-green-700 p-2 text-white w-2/4 mx-auto rounded-xl absolute -bottom-16 left-[6.4em] ${createdSuccesfully}`}>Created!</p>
      <input
        type="text"
        placeholder="Add a title"
        className="p-1 pb-2 m-2 rounded ring-2 ring-teal-500/[.4] focus:outline-none focus:ring-2 focus:ring-teal-500 transition ease-in-out duration-300 dark:bg-gray-700 dark:ring-gray-200/[.3] dark:focus:ring-gray-400 dark:text-slate-50"
        value={titleValue}
        onChange={(event) => setTitleValue(event.target.value)}
      />
      <input
        type="text"
        placeholder="Add a description"
        className="p-2 pb-10 m-2 rounded ring-2 ring-teal-500/[.4] focus:outline-none focus:ring-2 focus:ring-teal-500 transition ease-in-out duration-300 dark:bg-gray-700 dark:ring-gray-200/[.3] dark:focus:ring-gray-400 dark:text-slate-50"
        value={descriptionValue}
        onChange={(event) => setDescriptionValue(event.target.value)}
      />

      <button
        className="mt-2 bg-teal-600/[.8] w-1/3 mx-auto rounded-lg font-bold p-1 text-teal-50 uppercase hover:bg-teal-600 ease-in-out duration-300 dark:bg-teal-600/[.5] dark:hover:bg-teal-600/[.8]"
        onClick={() => {
          createTodo()
          setCreatedSuccesfully('visible')
          setTimeout(() => { 
            setVisible(false)
            setCreatedSuccesfully('invisible')
           }, 2000)
        }}
      >
        Create
      </button>
    </div>
  )
}
