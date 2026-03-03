import "./Product.css";

function Product({title, Price, features}) {
        return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price : {Price} </h5>
            {Price > 30000 && <p>Discount of 5%</p> }
        </div>
    );
    
    
}

export default Product;