import Card from "../components/Card";
import "./Products.css";

const Products = ( props ) => {

    console.log(props.result);
  return (
    <>
      <section className="card-container">
       {
        props.result.map(
            ({ img, title,  reviews, prevPrice, newPrice }) => (
                <Card
                  key={Math.random()}
                  img={img}
                  title={title}
                  
                  reviews={reviews}
                  prevPrice={prevPrice}
                  newPrice={newPrice}
                />
              )
        )
       }
      </section>
    </>
  );
};

export default Products;
