import { Search } from "../resources/Search"
import { useStore } from "../store/store"

export const SearchBar = () => {
  const setSearchValue = useStore((state) => state.setSearchValue)
  const searchTodos = useStore((state) => state.searchTasks)

  return (
    <div className="searchBar w-4/6 md:5/6 h-fit mx-auto">
      <input
        type="search"
        name=""
        id=""
        className="w-full bg-zinc-50 p-4 pl-10 rounded-3xl flex drop-shadow-[0_5px_5px_rgba(0,0,0,0.05)] focus:outline-none"
        onChange={(event) => {
          setSearchValue(event.target.value)
          searchTodos()
        }}
      />
      <Search />
    </div>
  )
}
