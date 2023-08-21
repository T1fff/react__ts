export const CreateTodoButton = () => {
    return (
        <button
          className="CreateTodoButton bg-teal-400 drop-shadow-md fixed bottom-10 right-10 rounded-full h-16 w-16 z-10 rotate-0 transition ease-in-out hover:rotate-45 flex place-content-center text-[2.5em] font-bold text-white"
          onClick={
            console.log('Clicked')
          }
          
        ><span className="">+</span></button>
      );
}