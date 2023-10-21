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
    getProducts();
  }, []);

  return [loading, Products, error];
};
export default useProductsData;
