import { useStore } from "../store/store"

/* eslint-disable react/prop-types */
export const Filter = () => {
  const { filterTasks } = useStore();

  const handleFilterClick = (filterType) => {
    filterTasks(filterType);
  };
  
  return (
    <div className="w-4/6 md:5/6 h-fit mx-auto flex flex-col md:flex-row gap-4 mt-4 mb-6">
      <FilterItem
        color={"bg-neutral-100"}
        colorhover={"hover:bg-neutral-200"}
        darkColor={'dark:bg-neutral-700/[.3]'}
        darkColorhover={"dark:hover:bg-neutral-700/[.7]"}
        name={"All tasks"}
        onClick={() => handleFilterClick('none')}
        
      />
      <FilterItem
        color={"bg-red-100"}
        colorhover={"hover:bg-red-200"}
        darkColor={'dark:bg-red-700/[.3]'}
        darkColorhover={"dark:hover:bg-red-700/[.7]"}
        name={"Not completed"}
        onClick={() => handleFilterClick('false')}

      />
      <FilterItem
        color={"bg-lime-100"}
        colorhover={"hover:bg-lime-200"}
        darkColor={'dark:bg-lime-700/[.3]'}
        darkColorhover={"dark:hover:bg-lime-700/[.7]"}
        name={"Completed"}
        onClick={() => handleFilterClick('true')}
      />
    </div>
  )
}

export const FilterItem = ({ color, colorhover, darkColor, darkColorhover, name, onClick }) => {
  return (
    <button
      className={`w-4/6 py-2 mx-auto rounded text-xl font-bold drop-shadow-md mx-auto ${color} ${darkColor} ${colorhover} ${darkColorhover} dark:text-slate-200 transition ease-in-out duration-300`}
      onClick={onClick}
    >
      {name}
    </button>
  )
}
