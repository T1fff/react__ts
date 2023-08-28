import { useStore } from "../store/store"

export const Toggle = () => {
    const setDarkToggle = useStore((state) => state.setDarkToggle)
    const darkToggle = useStore(state => state.darkToggle)
    return (
        <label className="absolute right-5 top-10 md:right-8 inline-flex items-center cursor-pointer">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} className="sr-only peer " defaultChecked={`${darkToggle}`}/>
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-200 dark:peer-focus:ring-gray-500 rounded-full peer-dark:bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-400 peer-checked:bg-gray-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
      </label>
    )
}