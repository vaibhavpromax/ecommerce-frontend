import TeaBag from "./TeaBag/TeaBag"
import TeaBagR from "./TeaBagR/TeaBagR"
import Search from "./SearchBar/SearchBar"
import Review from "./Review/Review"
import "./Product.css"
const Product = () => {
  return (
    <div className="productcontainer">
      <div className="productupper">
        <div className="productupperleft">
       <TeaBag/>
        </div>
        <div className="productupperright">
       <TeaBagR/>
         </div>
      </div>
      
      <div className="productloewer">
      <div className="productmiddle">
     <Search/>
      </div>  
      <div className="productreview">
      <Review/>
      </div>
      </div>
    </div>
  );
};
export default Product;
