/* eslint-disable react/prop-types */
import { useStore } from "../store/store"
import { Check } from "../resources/check"
import { Delete } from "../resources/delete"
import { editATask } from "../services/editATask"
import { useMutation, useQueryClient } from "react-query"
import { deleteATodo } from "../services/deleteATodo"
import { useState } from "react"
import Rodal from "rodal"

export const ListItem = ({ description }) => {
  const todo = useStore((state) =>
    state.todos.find((todo) => todo.fields.description == description)
  )

  const queryClient = useQueryClient()
  const editTodoMutation = useMutation(
    (todo) => editATask(todo.todoID, todo.type, todo.value),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Todos")
      },
    }
  )

  const editTodo = (type, value) => {
    editTodoMutation.mutate({ todoID: todo.id, type: [type], value: [value] })
  }

  const deleteTodoMutation = useMutation((taskId) => deleteATodo(taskId), {
    onSuccess: () => {
      queryClient.invalidateQueries("Todos")
    },
  })

  const deleteTodo = () => {
    deleteTodoMutation.mutate(todo.id)
  }

  /* Modal */
  const [visible, setVisible] = useState(false)

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  return (
    <>
      <li className="w-4/6 md:5/6 h-fit mx-auto bg-teal-100 p-4 m-3 rounded-3xl flex lg:hover:scale-105 transition ease-in-out duration-300 drop-shadow-md dark:bg-teal-200/[.09] dark:text-slate-100">
        <button
          onClick={() => {
            editTodo("completed", true)
          }}
        >
          <Check completed={todo.fields.completed} />
        </button>
        <div className="item-text grow mx-3">
          <input
            type="text"
            defaultValue={todo.fields.title}
            className=" bg-transparent font-bold text-xl md:text-2xl w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition ease-in-out duration-300 rounded px-1 dark:focus:ring-gray-500"
            onBlur={(e) => {
              editTodo("title", e.target.value)
            }}
          />
          <textarea
            type="text"
            defaultValue={description}
            className=" bg-transparent text-lg md:text-xl w-full h-fit resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 transition ease-in-out duration-300 rounded px-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-teal-50 scrollbar-w-2 scrollbar-thumb-rounded scrollbar-track-rounded dark:focus:ring-gray-500
          dark:scrollbar-thumb-gray-500
          dark:scrollbar-track-gray-700"
            onBlur={(e) => {
              editTodo("description", e.target.value)
            }}
          />
        </div>
        <button
          onClick={() => {
            show()
          }}
        >
          <Delete />
        </button>
      </li>
      <Rodal visible={visible} onClose={hide} height={250} width={270}>
        <div className="flex flex-col mx-auto h-full px-5 bg-gray-100 dark:bg-gray-800">
          <h3 className="text-center text-red-900 font-bold text-xl mt-7 mb-2 uppercase dark:text-slate-50">
            Do you want to delete this todo?
          </h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 mx-auto text-red-500 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          <div className="buttons mx-auto mt-5">
            <button className="mr-5 bg-red-300 dark:bg-red-700/[.4] hover:dark:bg-red-700/[.8] p-1 px-4 rounded-xl font-bold text-red-800 dark:text-red-200 transition duration-300 ease-in-out hover:bg-red-400" onClick={() => {
              deleteTodo()
              setTimeout(() => { 
                setVisible(false)
               }, 2000)
            }}>YES</button>
            <button className="p-1 px-4 rounded-xl font-bold bg-gray-300 dark:bg-gray-600 hover:dark:bg-gray-500 dark:text-slate-50 transition duration-300 ease-in-out hover:bg-gray-400" onClick={() => {
              setVisible(false)
            }}>NO</button>
          </div>

        </div>
        <div className="bg-gray-800"></div>
      </Rodal>
    </>
  )
}
