//import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
    
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button className="btns" onClick={handleClick}    value="" title="All Products" >All Products</button>
          <button className="btns" onClick={handleClick}   value="Nike" title="Nike" >Nike</button>
          <button className="btns" onClick={handleClick}    value="Adidas" title="Adidas" >Adidas</button>
          <button className="btns" onClick={handleClick}   value="Puma" title="Puma" >Puma</button>
          <button className="btns" onClick={handleClick}   value="Vans" title="Vans" >Vans</button>
        </div>
      </div>
    </>
  );
};

export default Recommended;
