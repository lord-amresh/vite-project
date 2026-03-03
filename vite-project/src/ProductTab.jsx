import Product from "./Product.jsx";


function ProductTab() {
  let options = ["Hi-tech", "Durable", "Fast" ]
    return (
    <>
      <Product title ="Phone" Price= {30000}  features= {options} />
      {/* <Product title = "Laptop" Price= {40000} />
      <Product title= "Pen"  /> */}
    </>
    );
}

export default ProductTab;