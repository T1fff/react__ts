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
        color={"bg-neutral-50"}
        colorhover={"hover:bg-neutral-100"}
        coloractive={"active:bg-neutral-100"}
        name={"All tasks"}
        onClick={() => handleFilterClick('none')}
        
      />
      <FilterItem
        color={"bg-red-50"}
        colorhover={"hover:bg-red-100"}
        coloractive={"active:bg-neutral-100"}
        name={"Not completed"}
        onClick={() => handleFilterClick('false')}

      />
      <FilterItem
        color={"bg-lime-50"}
        colorhover={"hover:bg-lime-100"}
        coloractive={"active:bg-neutral-100"}
        name={"Completed"}
        onClick={() => handleFilterClick('true')}
      />
    </div>
  )
}

export const FilterItem = ({ color, colorhover, name, onClick }) => {
  return (
    <button
      className={`w-4/6 py-2 mx-auto rounded text-xl font-bold drop-shadow-md mx-auto ${color} ${colorhover}`}
      onClick={onClick}
    >
      {name}
    </button>
  )
}
