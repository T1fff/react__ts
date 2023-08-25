import { Filter } from "./components/Filter"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { Modal } from "./components/Modal"
import { SearchBar } from "./components/SearchBar"
import { Toggle } from "./components/toggle"
import { useStore } from "./store/store"

function App() { 
  const darkToggle = useStore(state => state.darkToggle)
  return (
    <div className={darkToggle && 'dark'}>
        <div className={`w-screen h-screen overflow-x-hidden scrollbar scrollbar-thumb-neutral-300 scrollbar-track-neutral-100 scrollbar-w-2 md:scrollbar-w-4 scrollbar-thumb-rounded scrollbar-track-rounded dark:bg-gray-900 transition ease-in-out duration-300 dark:scrollbar-thumb-gray-600
          dark:scrollbar-track-gray-800`}>
      <Header />

      
      <Toggle/>

      <SearchBar />
      <Filter/>
      <List />
      <Modal/>
    </div>
    </div>   
    
  )
}

export default App
