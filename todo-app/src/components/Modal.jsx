import { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { CreateTodoForm } from './createTodoForm'

export function Modal() {
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <div>
       <button
          className="CreateTodoButton bg-teal-400 drop-shadow-md fixed bottom-10 right-10 rounded-full h-16 w-16 z-10 rotate-0 transition ease-in-out hover:rotate-45 flex place-content-center text-[2.5em] font-bold text-white" onClick={show}
        ><span className="">+</span></button>
      <Rodal visible={visible} onClose={hide} className='rounded-lg'>
        <div className='w-full h-full'>
            <CreateTodoForm/>
        </div>
      </Rodal>
    </div>
  );
}
