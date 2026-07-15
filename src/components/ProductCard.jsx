import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow">

        <img
          src={product.image}
          className="card-img-top p-3"
          style={{ height: "220px", objectFit: "contain" }}
          alt={product.title}
        />

        <div className="card-body d-flex flex-column">

        <h6
  className="card-title"
  style={{
    minHeight: "55px",
  }}
>
  {product.title.length > 45
    ? product.title.substring(0, 45) + "..."
    : product.title}
</h6>

          <p className="text-success fw-bold">
            ${product.price}
          </p>

          <p className="text-muted">
            {product.category}
          </p>

          <p>
            ⭐ {product.rating.rate}
          </p>

          <Link
            to={`/product/${product.id}`}
            className="btn btn-primary mt-auto"
          >
            View Details
          </Link>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;