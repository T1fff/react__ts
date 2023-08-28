/* eslint-disable react/prop-types */
import { createATodo } from "../services/createATodo"
import { useMutation, useQueryClient } from "react-query"
import { useStore } from "../store/store"
import { useForm } from "react-hook-form"
import { useEffect } from "react"


export const CreateTodoForm = () => {
  /* React Form */
  const {
    register,
    handleSubmit,
     reset,
    formState,
    formState: { isSubmitted, errors },
  } = useForm()

  useEffect(() => {
    if (formState.isSubmitted) {
      setTimeout(() => {
        reset()
      }, 2000);
    }
  }, [formState, reset])

  const onSubmit = (data) => {
    createTodo(data)
    setCreatedSuccesfully('visible')
    setTimeout(() => { 
      setVisible(false)
      setCreatedSuccesfully('invisible')
     }, 2000)
  }


  /* Store Calls */
  const queryClient = useQueryClient()
  const setVisible = useStore(state => state.setVisible)
  const setCreatedSuccesfully = useStore((state) => state.setCreatedSuccesfully)

  /* React Query */
  const createTodokMutation = useMutation(
    (data) => createATodo(data.title, data.description),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Todos")
      },
    }
  )

  const createTodo = (data) => {
    createTodokMutation.mutate(data)
   }


  const ErrorSpan = () => {
      
    return (
      <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-6 h-6`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
      
    )
  }

  return (
    <form
      action="getNewTasks"
      className="flex flex-col w-11/12 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="Add a title"
        className={`p-1 pb-2 m-2 mt-3 rounded ring-2 ring-teal-500/[.4] focus:outline-none focus:ring-2 transition ease-in-out duration-300 dark:bg-gray-700 dark:focus:ring-gray-400 dark:text-slate-50 ${errors.description ? 'ring-red-500 bg-red-400/[0.1] dark:ring-red-500' : 'ring-teal-500/[.4] dark:ring-gray-200/[.3]'}`}
        {...register("title", { required: true })}
      />
      {errors.title && (
        <span className={`absolute text-sm text-red-100 dark:text-red-400 ps-2 font-bold left-1/3 top-[4rem] flex bg-red-500 dark:bg-red-950 p-2 rounded-xl`}>
          <ErrorSpan/>
          <p className="ms-1">Missing Field!</p>
        </span>
      )}
      <input
        type="text"
        placeholder="Add a description"
        className={`p-2 pb-10 m-2 mt-3 rounded ring-2  focus:outline-none focus:ring-2 focus:ring-teal-500 transition ease-in-out duration-300 dark:bg-gray-700  dark:focus:ring-gray-400 dark:text-slate-50 ${errors.description ? 'ring-red-500 dark:ring-red-200/[.3] bg-red-400/[0.1]'  : 'ring-teal-500/[.4]  dark:ring-gray-200/[.3]'}`}
        {...register("description", { required: true })}
      />
      {errors.description && (
        <span className={`absolute text-sm text-red-100 dark:text-red-400 ps-2 font-bold left-1/3 top-[7.7rem] flex bg-red-500 dark:bg-red-950 p-2 rounded-xl`}>
        <ErrorSpan/>
        <p className="ms-1">Missing Field!</p>
      </span>
      )}

      <input
        className="mt-2 bg-teal-600/[.8] w-1/3 mx-auto rounded-lg font-bold p-1 text-teal-50 uppercase hover:bg-teal-600 ease-in-out duration-300 dark:bg-teal-600/[.5] dark:hover:bg-teal-600/[.8]"
        type="submit"
        value={"SUBMIT"}
      />
    </form>
  )
}
