import './App.css'

function App() {

  return (
      <FilterableProductTable products={PRODUCTS} />
  )
}

function SearchBar({ inStockOnly, onStockChange }){

    return (
        <form action="">
            <input type="text" placeholder="Recherche..." />
            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onStockChange(e.target.checked)}
                />
                {' '}
                N'affiche que les produits en stock
            </label>
        </form>
    );
}

function FilterableProductTable({ products, inStockOnly }) {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} inStockOnly={inStockOnly} />
        </div>
    );
}

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    )
};

function ProductTable({ products, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    products.forEach(product => {
        if (inStockOnly && !product.stocked){
            return;
        }
        if(product.category !== lastCategory){
            rows.push(
                <ProductCategoryRow category={product.category}
                key={product.id}/>
            )
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name}/>
        );
        lastCategory = product.category;
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red'}}>{product.name}</span>;
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}


const PRODUCTS = [
    { category: "Fruits", price: "1€", stocked: true, name: "Pomme" },
    { category: "Fruits", price: "1€", stocked: true, name: "Fruit du dragon" },
    { category: "Fruits", price: "2€", stocked: false, name: "Fruit de la passion" },
    { category: "Légumes", price: "2€", stocked: true, name: "Épinard" },
    { category: "Légumes", price: "4€", stocked: false, name: "Citrouille" },
    { category: "Légumes", price: "1€", stocked: true, name: "Petits pois" }
];

export default App
