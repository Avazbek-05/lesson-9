import React, { useEffect, useState } from "react";
import { request } from "../../../request";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Sahifaga yo'naltirish uchun

  useEffect(() => {
    request.get("/asaxiy").then((res) => setData(res.data));
  }, []);

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/basket"); // Savat sahifasiga yo'naltirish
  };

  return (
    <section className="my-10">
      <div className="container1 grid gap-5 grid-cols-5 max-[1100px]:grid-cols-4 max-[950px]:grid-cols-3 max-[700px]:grid-cols-2 max-[380px]:grid-cols-1">
        {data.map((value) => (
          <div key={value.id} className="flex flex-col">
            <div className="flex flex-col border rounded-lg items-center">
              <img
                className="w-[200px] p-1 h-[200px]"
                src={value.img}
                alt={value.title}
              />
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <h1 className="text-sm text-gray-900">
                {value.title.slice(0, 50) + "..."}
              </h1>
              <div className="bg-[#ffedc2] py-1 px-2 w-fit rounded-2xl text-sm">
                {"от " + value.moth.toLocaleString("ru-RU") + " сум/мес"}
              </div>
              <p className="text-gray-300 text-lg line-through">
                {value.price.toLocaleString("ru-RU") + " сум"}
              </p>
              <p className="text-[red]">
                {value.oldPrice.toLocaleString("ru-RU") + " сум"}
              </p>

              {/* V KORZINU BUTTON */}
              <button
                onClick={() => handleAddToCart(value)}
                className="flex items-center gap-2 w-fit p-2 bg-[#ffbe1e] rounded-lg hover:bg-yellow-400 transition"
              >
                <ShoppingCart />
                <p>В корзину</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
