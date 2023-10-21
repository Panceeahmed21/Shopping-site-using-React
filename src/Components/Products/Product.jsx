import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import {} from "./Product.css";
import Rating from "react-rating-stars-component";
import Loading from "../../Loading/Loading";
import useProductsData from "../../Hooks/useProductsData";

const Product = () => {
  const [isLoading, Products, error] = useProductsData(
    "https://fakestoreapi.com/products"
  );

  return (
    <Loading loading={isLoading} error={error}>
      {Products.map((prod) => {
        return (
          <>
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
            </div>
          </>
        );
      })}
    </Loading>
  );
};

export default Product;

