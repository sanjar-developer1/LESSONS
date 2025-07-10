import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const product = products.find((item) => item.id == id);

  useEffect(() => {
    if (products.length > 0 && !product) {
      navigate("/notFound");
    }
  }, [products, product, navigate]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="one-product">
      <div key={product.id} className="product">
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "250px", height: "350px" }}
        />
        <h2>{product.title.slice(0, 15)}</h2>
        <p>{product.description.slice(0, 30)}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
}

export default Product;
