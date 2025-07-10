import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function home() {
  const [count, setCount] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setCount(data);
      })
      .catch((err) => {
        console.log("Xatolik", err);
      });
  }, []);

  return (
    <>
      <div className="product-wrapper">
        {count.map((product) => {
          return (
            <div
              key={product.id}
              className="product"
              onClick={() => {
                navigate("/product/" + product.id);
                console.log(`Product ID: ${product.id}`);
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "250px", height: "350px" }}
              />
              <h2>{product.title.slice(0, 15)}</h2>
              <p>{product.description.slice(0, 30)}</p>
              <p>Price: ${product.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default home;
