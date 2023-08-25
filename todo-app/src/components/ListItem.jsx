/* eslint-disable react/prop-types */
import { useStore } from "../store/store"
import { Check } from "../resources/check"
import { Delete } from "../resources/delete"
import { editATask } from "../services/editATask"
import { useMutation, useQueryClient } from 'react-query';
import { deleteATodo } from "../services/deleteATodo"

export const ListItem = ({ description }) => {
  const todo = useStore((state) =>
    state.todos.find((todo) => todo.fields.description == description)
  )

  const queryClient = useQueryClient();
  const editTodoMutation = useMutation(
    (todo) => editATask(todo.todoID, todo.type, todo.value), 
    {
      onSuccess: () => {
        queryClient.invalidateQueries('Todos'); 
      },
    }
  );

  const editTodo = (type, value) => {
    editTodoMutation.mutate({todoID: todo.id, type:[type], value:[value]});
  };

  const deleteTodoMutation = useMutation(
    taskId => deleteATodo(taskId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('Todos'); 
      },
    }
  );

  const deleteTodo = () => {
    deleteTodoMutation.mutate(todo.id);
  };

  return (
    <li className="w-4/6 md:5/6 h-fit mx-auto bg-teal-100 p-4 m-3 rounded-3xl flex lg:hover:scale-105 transition ease-in-out duration-300 drop-shadow-md dark:bg-teal-200/[.09] dark:text-slate-100">
      <button onClick={() => {
        editTodo('completed', true)
      }}>
        <Check completed={todo.fields.completed} />
      </button>
      <div className="item-text grow mx-3">
        <input
          type="text"
          defaultValue={todo.fields.title}
          className=" bg-transparent font-bold text-xl md:text-2xl w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition ease-in-out duration-300 rounded px-1 dark:focus:ring-gray-500"
          onBlur={(e) => {
            editTodo('title', e.target.value)
          }}
        />
        <textarea
          type="text"
          defaultValue={description}
          className=" bg-transparent text-lg md:text-xl w-full h-fit resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 transition ease-in-out duration-300 rounded px-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-teal-50 scrollbar-w-2 scrollbar-thumb-rounded scrollbar-track-rounded dark:focus:ring-gray-500
          dark:scrollbar-thumb-gray-500
          dark:scrollbar-track-gray-700"
          onBlur={(e) => {
            editTodo('description', e.target.value)      
          }}
          
        />
      </div>
      <button onClick={deleteTodo}>
        <Delete />
      </button>
    </li>
  )
}
