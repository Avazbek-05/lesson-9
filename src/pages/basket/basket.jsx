import React, { useEffect, useState } from "react";

const Basket = () => {
  const [basketData, setBasketData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("cart")) || [];
    setBasketData(savedData);
  }, []);

  return (
    <div className="container1 my-10">
      <h1 className="text-2xl font-bold mb-6">Savatdagi mahsulotlar</h1>

      {basketData.length === 0 ? (
        <p className="text-gray-500">Savat hozircha bo‘sh.</p>
      ) : (
        <div className="gap-5 flex flex-col">
          {basketData.map((item, index) => (
            <div key={index} className="border w-fit border-[#bab6b6] rounded-xl  p-2 flex items-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-[150px] h-[150px] object-contain mb-3"
              />
              <div>
                <h2 className="text-md font-semibold">{item.title}</h2>
                <p className="text-gray-500 text-sm line-through">
                  {item.price?.toLocaleString("ru-RU")} сум
                </p>
                <p className="text-red-600 font-bold">
                  {item.oldPrice?.toLocaleString("ru-RU")} сум
                </p>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Basket;
