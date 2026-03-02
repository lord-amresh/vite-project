import "./Product.css";

function Product({title, Price=1}) {
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price : {Price} </h5>
        </div>
    );
}

export default Product;