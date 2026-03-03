import "./Product.css";

function Product({title, Price, features}) {
    let isDiscount = Price > 30000;
    let styles = {backgroundColor: isDiscount ? "Turquoise" : ""} ;   
    
    return(
        <div className="Product" style= {styles} >
            <h3>{title}</h3>
            <h5>Price : {Price} </h5>
            {Price > 30000 && <p>Discount of 5%</p> }
        </div>
    );
    
    
}

export default Product;