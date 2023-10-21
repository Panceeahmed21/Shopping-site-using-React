import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {} from "./ProductDetails.css";
import Rating from "react-rating-stars-component";
import Loading from "../Loading";
import {} from "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [prodDetails, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const getDetails = () => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      {loading ? (
        <div className=" d-flex justify-content-center align-items-center loading text-white ">
          <Loading />
        </div>
      ) : prodDetails ? (
        <div className="container py-5">
          <div className="row">
            <>
              <div className="col-md-6">
                <img
                  src={prodDetails.image}
                  alt=""
                  className=" img-fluid"
                  height={"100px"}
                />
              </div>
              <div className="col-md-6 ">
                <h2>{prodDetails.title}</h2>
                <h4 className="text-muted">{prodDetails.category}</h4>
                <p>
                  {" "}
                  <span className="text-warning fw-bold">
                    {" "}
                    {prodDetails.price}
                  </span>{" "}
                  EGP
                </p>
                {prodDetails.rating && (
                  <Rating
                    value={prodDetails.rating.rate}
                    edit={false}
                    size={24}
                    activeColor="#ffe529"
                  />
                )}
                <p className="text-muted">{prodDetails.description} </p>
                <button className="btn btn-success">Add to cart</button>
              </div>
            </>
          </div>
        </div>
      ) : (
        <p>Item is not found</p>
      )}
    </>
  );
}

export default ProductDetails;

{
}
