/**
 *
 * @param name
 * @returns {JSX.Element}
 * @constructor
 */
export function ProductCategoryRow({name}) {
    return <tr>
        <td colSpan={2}><strong>{name}</strong></td>
    </tr>
}