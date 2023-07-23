import RatingStar from "../RatingStar/RatingStar";
import List from "../List/List";
import DropDown from "../DropDown/DropDown";
import "./TeaBagR.css"
const TeaBagR = () => {
  return (
    <>
      <div className="tbrconainter">
        <h3 className="tbrheading">African Kahawa blend</h3>
        <span className="tbrl">$20.15 </span>
        <span className="tbrm">$22.00 </span>
        <span className="tbrr">(10% off)</span>
        <p className="tbrp">
          Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod
          tempor incididunt ut ero labore. Lorem ipsum dolor sit amet,
          consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero
          labore.
        </p>
        <span className="tbrhl">Pack of 350gms</span>&nbsp;&nbsp; | &nbsp;&nbsp;
        <span className="tbrhm">Box size 30x24 cm</span>&nbsp;&nbsp; | &nbsp;&nbsp;
        <span className="tbrhr">Premium Arabica From Middle East</span>
        <div className="tbrratingstar">
          <RatingStar rating={4}/>
        </div>
        <span className="tbrlist">
          <List />
          <List />
        </span>
        <span className="tbrdd">
          <DropDown />
        </span>
        <button className="tbrbtnr">Buy now </button>
        <button className="tbrbtnl">Add to Cart</button>
        
      </div>
    </>
  );
};
export default TeaBagR;
