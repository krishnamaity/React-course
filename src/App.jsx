

import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from "./components/AddUser";

// function ProductCategoryRow({ category }) {
//   return (
//     <tr>
//       <th colSpan={2}>{category}</th>
//     </tr>
//   );
// }
// function ProductRow({ product }) {
//   const name = product.stocked ? (
//     product.name
//   ) : (
//     <span style={{ color: "red" }}>{product.name}</span>
//   );
//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{product.price}</td>
//     </tr>
//   );
// }
// ProductRow.propTypes = {
//   category: PropTypes.any.isRequired,
// };

// function ProductTable({ products ,filterText,instockOnly}) {
//   const rows = [];
//   let lastCatagory = null;
//   // eslint-disable-next-line react/prop-types
//   products.forEach((product) => {
//     if(product.name.toLowerCase().indexOf(
//       filterText.toLowerCase()
//     )
//   === -1
// ){
//   return;
// }
// if(instockOnly && !product.stocked){
//   return;
// }
//     if (product.category !== lastCatagory) {
//       rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
//     }
//     rows.push(<ProductRow product={product} key={product.category} />);
//     lastCatagory = product.category;
//   });
//   // ProductTable.propTypes = myPropTypes;
//  ProductTable.propTypes = {
//     category: PropTypes.any.isRequired,
//   };
//   return (
//     <table>
//       <thead>
//         <tr>
//           <td>Name</td>
//           <td>Price</td>
//         </tr>
        
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   );
// }

// function Searchbar({filterText,instockOnly,onfilterchange,onstockchange}) {
//   return (
//     <form>
//       <input type="text" placeholder="search"  value={filterText} onChange={(e)=>onfilterchange(e.target.value)}/>
//       <label>
//         <input type="checkbox" checked={instockOnly} onChange={(e)=>onstockchange(e.target.checked)}/> 
//         {' '}
//         only show products in stocked
//       </label>
//     </form>
//   );
// }
// function FilterableProductTable({products}) {
//   const[filterText,setFilterText]=useState('');
//   const[instockOnly,setInstockOnly]=useState(false);
//   return (
//     <>
//       <Searchbar  filterText={filterText} instockOnly={instockOnly} onfilterchange={setFilterText} onstockchange={setInstockOnly}/>
//       <ProductTable products={products} filterText={filterText} instockOnly={instockOnly} />
//     </>
//   );
// }
// FilterableProductTable.propTypes = {
//   category: PropTypes.any.isRequired,
// };

function App() {
 
  return (
    <>
    <AddUser/>
    </>
  );
}

export default App;
