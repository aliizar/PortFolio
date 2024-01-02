import React, { useState, useEffect } from "react";
import LinearIndeterminate from "./Loader";
const News = (props) => {
  document.body.style.backgroundColor = "#334a4b";
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cate, setcate] = useState("General");
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${cate}&apiKey=f5bb4b7c19b246168c566acdb6a9fbb5`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [props, cate]);
  return (
    <>
      {loading && <LinearIndeterminate />}
      <div className="flex space-x-20">
        <p className="text-4xl text-white font-semibold ml-[20rem] relative top-5 font-serif">
          Top
          <span className="text-red-400 font-bold ">"{cate}"</span>
          Headlines
        </p>
      </div>
      <div className="relative left-4 bottom-9 ">
        <nav className="bg-gray-800 border-2 border-white rounded w-64 h-full p-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-300"
          >
            Select Category
          </label>
          <select
            id="category"
            className="mt-1 block w-full text-white p-2 border border-gray-700 bg-gray-700 rounded-md focus:outline-none focus:border-blue-500"
            value={cate}
            onChange={(e) => setcate(e.target.value)}
          >
            <option value="general">General</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </nav>
      </div>
      <div className="container mx-auto relative bottom-14 py-12 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {!loading &&
            articles.map((article) => (
              <div
                key={article.title}
                className="bg-transparent rounded border-white border-2  overflow-hidden shadow-md"
              >
                <img
                  src={
                    !article.urlToImage
                      ? "https://picsum.photos/200/300"
                      : article.urlToImage
                  }
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {article.title}
                  </h3>
                  <p className="text-white">{article.description}</p>
                  <p className="text-sm text-white mt-2">
                    By {article.author || "Unknown"} on
                    {new Date(article.publishedAt).toDateString()}
                  </p>
                  <a
                    rel="noreferrer"
                    href={article.url}
                    target="_blank"
                    className="mt-4 inline-block bg-red-500 text-white py-2 px-4 rounded-full"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default News;
