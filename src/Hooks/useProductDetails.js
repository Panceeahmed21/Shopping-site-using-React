import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const useProductDetails = (api) => {
  const [prodDetails, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productDetails = async () => {
      try {        const res=
        await axios.get(api);
        setProduct(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    productDetails();
  }, []);
  return [prodDetails, loading, error];
};

export default useProductDetails;

// const useProductDetails = () => {
//     const { id } = useParams();
//     const [prodDetails, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const getDetails = () => {
//       return fetch(`https://fakestoreapi.com/products/${id}`)
//         .then((res) => res.json())
//         .then((json) => {
//           setProduct(json);
//           setLoading(false);
//         })
//         .catch((error) => {
//           setLoading(false);
//         });
//     };
//     useEffect(() => {
//       getDetails();
//     }, []);

// };
