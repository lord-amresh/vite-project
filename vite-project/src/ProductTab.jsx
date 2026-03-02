import Product from "./Product.jsx";


function ProductTab() {
    return (
    <>
      <Product title ="Phone" Price= {30000}  />
      <Product title = "Laptop" Price= {40000} />
      <Product title= "Pen"  />
    </>
    );
}

export default ProductTab;