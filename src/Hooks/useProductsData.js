import axios from "axios";
import { useEffect, useState } from "react";
const useProductsData = (api) => {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(api);
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getProducts()
  }, []);
  return [Products,loading,error]
};
export default useProductsData;

//   const getProducts = () => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((json) => {
//         setProducts(json);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);
