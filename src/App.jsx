import './App.css'
import {Input} from "./components/forms/Input.jsx";
import {Checkbox} from "./components/forms/Checkbox.jsx";
import {ProductCategoryRow} from "./components/products/ProductCategoryRow.jsx";
import {ProductRow} from "./components/products/ProductRow.jsx";
import {useState} from "react";

function App() {

    const [showStockedOnly, setShowStockedOnly] = useState(false);

    return<div className="flex justify-center items-center mt-2 flex-col">
        <SearchBar showStockedOnly={showStockedOnly} onShowStockOnlyChange={setShowStockedOnly}/>
        <ProductTable products={PRODUCTS} />
    </div>
    /*
    const [isTermAccepted, setIsTermAccepted] = useState(false)

    return<forms>
        <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
        <button disabled={!isTermAccepted}>Envoyer le forms</button>
    </forms>

    const [person, setPerson] = useState({
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
    })

    console.log("etat 1")
    const increment = () => {
        setPerson({...person, age: person.age + 1});
    }

    const decrement = () => {
        setCount(count -1)
    }

    console.log("etat 2")
    const [count, setCount] = useState(10);

    const [firstName, setFirstName] = useState("John shabani");

    const handleChange = (e) => {
        setFirstName(e.target.value)
    }

    const resetName = () => {
        setFirstName("")
    }


    const handleChange = (e) =>{
        e.preventDefault();
        console.log(new FormData(e.target))
    }



    const [checked, setChecked] = useState(false)

    const toggleChecked = () => {
        setChecked(!checked)
    }

    return <forms>
        <input type="text" name="firstName" defaultValue="Name"/>
        <input type="checkbox" checked={checked} onChange={toggleChecked} />
        {checked && <button disabled={!checked}>Envoyer</button>}
    </forms>

 */

}

function SearchBar({showStockedOnly, setShowStockedOnly}){
    return <div>
        <div className="mb-3">
            <Input placeholder="Rechercher..." value="" onChange={() => null} />
            <Checkbox
                id="stocked"
                checked={showStockedOnly}
                onChange={setShowStockedOnly}
                label="Les produits en stock" />
        </div>
    </div>
}
function ProductTable({products}){
    const rows = []
    let lastCategory = null
    for (let product of products){
        if (product.category !== lastCategory){
            rows.push(<ProductCategoryRow key={product.category} name={product.category}/>)
        }
        lastCategory = product.category
        rows.push(<ProductRow product={product} key={product.name}/>)
    }

    return <div className="w-auto">
        <table className="table-auto">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>
}
/*
function CGUCheckbox({checked, onCheck}) {
    return <div>
        <label>
            <input
                type="checkbox"
                onChange={(e) => onCheck(e.target.checked)}
                checked={checked}
            />
            Accepter les conditions
        </label>
    </div>
}
*/

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple",},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit",},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit",},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach",},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin",},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas",}
]

export default App
