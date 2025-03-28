/**
 *
 * @param checked
 * @param onChange
 * @param label
 * @param id
 * @returns {JSX.Element}
 * @constructor
 */
export function Checkbox({checked, onChange, label, id}) {
    return <div className="inline-flex items-center pt-2">
        <input
            id={id}
            type="checkbox"
            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow shadow-md border border-violet-800 checked:border-violet-800"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            />
        <label htmlFor={id} className="pl-2 flex items-center cursor-pointer relative">{label}</label>
    </div>
}