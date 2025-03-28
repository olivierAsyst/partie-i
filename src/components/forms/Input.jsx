/**
 *
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string)} onChange
 * @returns {JSX.Element}
 * @constructor
 */
export function Input({placeholder, value, onChange}) {

    return <div className="w-full max-w-sm min-w-[200px]">
        <input
            className="w-full bg-transparent placeholder:text-violet-400 text-violet-700 text-sm border border-violet-200
            rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-violet-400 hover:border-violet-300 shadow-sm focus:shadow"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}