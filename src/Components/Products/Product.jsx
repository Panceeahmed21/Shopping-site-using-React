import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import {} from "./Product.css";
import Rating from "react-rating-stars-component";
import Loading from "../Loading";

const Product = () => {
  const [Products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className=" d-flex w-100 h-100  text-white ">
          <Loading />
        </div>
      ) : Products ? (
        Products.map((prod) => {
          <div className="col-md-4">
            <Card height="400px">
              <Card.Img
                variant="top"
                height="200"
                src={prod.image}
                className="w-75 m-auto py-2 cardImg"
              />
              <Card.Body>
                <Card.Title className="card_title h4">
                  {" "}
                  {prod.title.split(" ").slice(0, 8).join(" ")}...
                </Card.Title>
                <Card.Text className="text-muted">
                  {prod.description.split(" ").slice(0, 10).join(" ")}...
                </Card.Text>

                <Rating
                  c
                  value={prod.rating.rate}
                  edit={false}
                  size={24}
                  activeColor="#ffe529"
                />
                <Link to={`/products/${prod.id}`}>
                  <span className="text-dark fw-bold btn bg-success text-white">
                    Show Details
                  </span>
                </Link>
              </Card.Body>
            </Card>
          </div>;
        })
      ) : (
        <p>Item is not found</p>
      )}
    </>
  );
};

export default Product;
