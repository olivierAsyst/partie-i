/**
 *
 * @param product
 * @returns {JSX.Element}
 * @constructor
 */
export function ProductRow({product}) {

    return <tr>
        <td className={product.stocked ? "": "text-violet-700"} >{product.name}</td>
        <td>{product.price}</td>
    </tr>
}