import Rodal from "rodal"
import "rodal/lib/rodal.css"
import { CreateTodoForm } from "./createTodoForm"
import { useStore } from "../store/store"

export function Modal() {
  const createdSuccesfully = useStore((state) => state.createdSuccesfully)

  const visible = useStore(state => state.visible)
  const setVisible = useStore(state => state.setVisible)

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  return (
    <div>
      <button
        className="CreateTodoButton bg-teal-400 drop-shadow-md fixed bottom-10 right-10 rounded-full h-16 w-16 z-10 rotate-0 transition ease-in-out hover:rotate-45 focus:rotate-45 flex place-content-center text-[2.4em] font-bold text-white dark:bg-teal-700"
        onClick={show}
      >
        <span className="">+</span>
      </button>
      <Rodal
        height={290}
        visible={visible}
        onClose={hide}
        className="backdrop-blur-sm"
      >
        <div className="flex flex-col mx-auto h-full px-5 bg-gray-100 dark:bg-gray-800">
          <h3 className="text-center font-bold text-xl mt-7 mb-2 uppercase dark:text-slate-50">
            Create a Todo
          </h3>
         
          <CreateTodoForm />
        </div>
        <p
            className={`mb-2 text-center font-bold uppercase bg-green-700 p-2 text-white w-2/4 mx-auto rounded-xl absolute -bottom-16 left-[6.4em] ${createdSuccesfully}`}
          >
            Created!
          </p>
      </Rodal>
    </div>
  )
}
