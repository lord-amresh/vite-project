import "./Product.css";
import Price from "./Price.jsx";

function Product({title, idx}) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"]
    let newPrices = ["8,999", "9,199", "899", "278"]
    let Description = [
         ["8000 DPI", "5 Programmable buttons"],["Intutive Surface", "Designed for Ipad Pro"],["Designed for Ipad Pro", "Intutive Surface"],["Wireless", "Optiical Orientation"]
    ]

    return(
        <div className="Product" >
            <h4>{title}</h4>
            <p>{Description [idx] [0] }</p>
            <p>{Description [idx] [1] }</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
    
    
}

export default Product;