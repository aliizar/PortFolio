import { useState } from "react";
import { CardsApi } from "./CardsApi";
const Cards = () => {
  const [Cards, setCards] = useState(CardsApi);
  return (
    <>
      <div className="container mx-auto relative bottom-14 py-12 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {Cards.map((article) => (
            <div
              key={article.img}
              className="bg-transparent rounded border-white border-2  overflow-hidden shadow-md"
            >
              <img
                src={article.img}
                alt={article.Heading}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {article.Heading}
                </h3>
                <p className="text-white">{article.description}</p>
                <p className="text-sm text-white mt-2">{article.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
