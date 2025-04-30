import React, { useEffect, useState } from "react";
import { request } from "../../../request";
import { ShoppingCart } from "lucide-react";

const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    request.get("/asaxiy").then((res) => setData(res.data));
  });
  return (
    <section className="my-10">
      <div className="container1 grid gap-5  grid-cols-5 m-auto">
        {data.map((value) => (
          <div key={value.id} className=" ">
            <div className="flex flex-col border rounded-lg border-[#f4f6f7]   items-center justify-center">
              <img
                className="w-[200px] p-4 h-[200px]"
                src={value.img}
                alt="{value.title}"
              />
            </div>
            <div>
              <h1 className="text-sm  text-gray-900">{value.title}</h1>
              <div className="cursor-pointer border border-[#ffca48] bg-[#ffedc2] py-1 px-2  w-fit rounded-2xl text-sm">
                {"от " + value.moth.toLocaleString("ru-RU") + " сум/мес"}
              </div>
              <p className="text-gray-300 text-lg  font-normal line-through">
                {value.price.toLocaleString("ru-RU") + " сум"}
              </p>
              <p className="text-[red]">{value.oldPrice.toLocaleString("ru-RU") +" сум" }</p>
              <button className="flex items-center justify-between w-fit p-2 bg-[#ffbe1e]">
              <ShoppingCart />
              <p> В корзину</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
