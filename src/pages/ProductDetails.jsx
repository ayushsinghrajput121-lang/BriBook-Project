import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../services/api";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);

      const data = await getProduct(id);

      console.log("data", data)

      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <div className="container my-5">

        <Link
          to="/"
          className="btn btn-secondary mb-4"
        >
          ← Back
        </Link>

        <div className="row">

          <div className="col-md-5">

            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{
                height: "450px",
                objectFit: "contain",
              }}
            />

          </div>

          <div className="col-md-7">

            <h2>{product.title}</h2>

            <hr />

            <h3 className="text-success">
              ${product.price}
            </h3>

            <p>
              <strong>Category :</strong>{" "}
              {product.category}
            </p>

            <p>
              <strong>Rating :</strong>{" "}
              ⭐ {product.rating.rate}
            </p>

            <p>
              <strong>Total Reviews :</strong>{" "}
              {product.rating.count}
            </p>

            <hr />

            <h5>Description</h5>

            <p>{product.description}</p>

          </div>

        </div>

      </div>
    </>
  );
}

export default ProductDetails;