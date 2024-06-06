// import AddToCart from "../AddToCart/AddToCart";
import Rating from "../Rating";
import ReduxAddToCart from "../ReduxAddToCart";
import "./ProductCard.scss"

export default function ProductCard({product})
{
    
    return (
        <div className="card">
            <div> {product.title} </div>
            <div>{product.price.value}</div>
            {/* <AddToCart  product={product}/> */}
            <ReduxAddToCart product={product}></ReduxAddToCart>
            <Rating rating={product.rating.value} maxRating={5} size={1.2}></Rating>
        </div>
        
    );
}


// {}
// whatever you write in this curly braces in jsx is considered as js
//