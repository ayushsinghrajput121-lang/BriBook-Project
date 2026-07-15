import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import "../index.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetchProducts();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

const productsPerPage = 8;
useEffect(() => {
  setLoading(true);

  const timer = setTimeout(() => {
    const result = products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredProducts(result);

    setCurrentPage(1);

    setLoading(false);
  }, 300);

  return () => clearTimeout(timer);
}, [search, products]);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const data = await getProducts();

      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const result = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredProducts(result);

      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, products]);

  const lastIndex = currentPage * productsPerPage;

const firstIndex = lastIndex - productsPerPage;

const currentProducts = filteredProducts.slice(
  firstIndex,
  lastIndex
);

const totalPages = Math.ceil(
  filteredProducts.length / productsPerPage
);

  return (
    <>
      <Navbar />

      <div className="container">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

      {loading ? (
  <Loader />
) : filteredProducts.length === 0 ? (
  <div className="text-center mt-5">
    <h4>No Products Found</h4>
  </div>
) : (
  <>
    <div className="row">
      {currentProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>

    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      setCurrentPage={setCurrentPage}
    />
  </>
)}
      </div>
    </>
  );
}

export default Home;