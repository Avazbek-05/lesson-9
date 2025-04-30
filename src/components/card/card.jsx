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
      <div className="container1 grid gap-5  grid-cols-5 m-auto max-[1100px]:grid-cols-4 max-[950px]:grid-cols-3 max-[700px]:grid-cols-2 max-[380px]:grid-cols-1">
        {data.map((value) => (
          <div key={value.id} className="flex flex-col max-[380px]:items-center max-[380px]:justify-center max-[380px]:text-center">
            <div className="flex flex-col border rounded-lg border-[#f4f6f7]   items-center justify-center">
              <img
                className="w-[200px] p-1 h-[200px]"
                src={value.img}
                alt="{value.title}"
              />
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <h1 className="text-sm  text-gray-900">
                {value.title.slice(0, 50) + "..."}
              </h1>
              <div className="cursor-pointer border border-[#ffca48] bg-[#ffedc2] py-1 px-2  w-fit rounded-2xl text-sm max-[380px]:w-full">
                {"от " + value.moth.toLocaleString("ru-RU") + " сум/мес"}
              </div>
              <p className="text-gray-300 text-lg  font-normal line-through">
                {value.price.toLocaleString("ru-RU") + " сум"}
              </p>
              <p className="text-[red]">
                {value.oldPrice.toLocaleString("ru-RU") + " сум"}
              </p>
              <button className="relative overflow-hidden cursor-pointer flex items-center rounded-lg gap-5 justify-between w-fit p-2 bg-[#ffbe1e] group max-[380px]:w-full  max-[380px]:justify-center" >
                <span className="absolute inset-0 bg-yellow-400 w-0 group-hover:w-full transition-all duration-100 ease-in-out z-0"></span>
                <div className="flex items-center gap-2 z-10 text-black">
                  <ShoppingCart />
                  <p>В корзину</p>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
