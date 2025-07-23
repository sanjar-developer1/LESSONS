import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, RemoveToCart } from "../../utils/CardSlice.js";
import "../Card/card.css";

function Card() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const addCart = (product) => {
    dispatch(AddToCart(product));
    console.log("maxsulot qo'shildi");
  };

  const removeCart = (product) => {
    dispatch(RemoveToCart(product));
    console.log("maxsulot o'chirildi");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>YUKLANMOQDA...</p>;

  return (
    <div className="cards-container">
      {products.map((product) => (
        <div key={product.id} className="card" title={product.title}>
          <img
            src={product.image}
            width="200px"
            height="200px"
            alt={product.title}
          />
          <h3>{product.title.slice(0, 30)}...</h3>
          <p>{product.description.slice(0, 40)}... more</p>
          <div className="card-btn">
            <button
              onClick={() => {
                addCart(product);
              }}
            >
              Add to cart
            </button>
            <button
              onClick={() => {
                removeCart(product);
              }}
              style={{ backgroundColor: "red" }}
            >
              Remove to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
