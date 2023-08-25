import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { CreateTodoForm } from './createTodoForm'
import { useStore } from '../store/store'

export function Modal() {
  const visible = useStore(state => state.visible)
  const setVisible = useStore(state => state.setVisible)
  
  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <div>
       <button
          className="CreateTodoButton bg-teal-400 drop-shadow-md fixed bottom-10 right-10 rounded-full h-16 w-16 z-10 rotate-0 transition ease-in-out hover:rotate-45 focus:rotate-45 flex place-content-center text-[2.4em] font-bold text-white dark:bg-teal-700" onClick={show}
        ><span className="">+</span></button>
      <Rodal height={270} visible={visible} onClose={hide} className='backdrop-blur-sm'>
            <CreateTodoForm/>
      </Rodal>
    </div>
  );
}
