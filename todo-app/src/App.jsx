import { useState } from "react"
import { CreateTodoButton } from "./components/CreateTodoButton"
import { Filter } from "./components/Filter"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { SearchBar } from "./components/SearchBar"
function App() {
  return (
    
    <div className="w-screen h-screen overflow-x-hidden scrollbar scrollbar-thumb-neutral-300 scrollbar-track-neutral-100 scrollbar-w-2 md:scrollbar-w-4 scrollbar-thumb-rounded scrollbar-track-rounded">
      <Header />
      <SearchBar />
      <Filter/>
      <List />
    <CreateTodoButton />
    </div>
  )
}

export default App
