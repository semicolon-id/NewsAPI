import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
// import Navbar from "../UI/Navbar/Navbar";
import axios from "axios";

import imgbg1 from "../../assets/imgbg1.jpg";

const apiKey = "0ec56918201d470ab1ca0f7d9801f500";
const baseURL =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" +
  apiKey;

const baseURL2 =
  "https://newsapi.org/v2/everything?q=apple&from=2023-09-19&to=2023-09-19&sortBy=popularity&apiKey=" +
  apiKey;

  

const LandingPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [newsApple, setNewsApple] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(baseURL);

        // Filter berita yang memiliki urlToImage yang tidak null
        const filteredNewsData = response.data.articles.filter(
          (news) => news.urlToImage !== null
        );

        setNewsData(filteredNewsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNewsData();
  }, []);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(baseURL2);

        // Filter berita yang memiliki urlToImage yang tidak null
        const filteredNewsData = response.data.articles.filter(
          (news) => news.urlToImage !== null
        );

        setNewsApple(filteredNewsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNewsData();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div className="bg-black pt-32 md:pb-10">
      {/* <Navbar /> */}

      <div
        className="relative lg:bg-cover bg-center bg-no-repeat bg-black w-full h-52 md:h-96 flex items-center justify-center font-sans "
        style={{
          backgroundImage: `url(${imgbg1})`,
          backgroundSize: "cover",
        }}
      >
        <div className="top-0 left-0 p-4 bg-slate-orange text-slate-100 lg:-ml-[48rem] w-96 text-left">
          <h2 className="text-lg md:text-3xl lg:text-2xl font-semibold mt-2">
            <span className="text-xl md:text-4xl mr-1">
              <span className="text-orange-400 font-serif">B'</span>
              <span className="text-slate-300">News</span>
            </span>
            - Trusted Source For Latest News
          </h2>
          <p
            className="text-xs md:text-sm mt-1 md:mt-4 inline-block  hover:text-slate-100 duration-150 first-letter:text-lg w-60"
          >
            Global news portal that gives you fast access to the latest news and
            diverse topics from around the world. From the news business to
            technology, entertainment and more, we ensure You stay informed
            accurately and relevantly.
          </p>
          <div className="mt-5 md:mt-10">
            <input
              type="search"
              className="bg-gray-700 p-2 pl-4 rounded-full w-80 ml-1 md:ml-0 md:w-full placeholder-slate-400 focus:outline-none focus:ring-2 ring-orange-400 focus:border-slate-300 text-slate-300"
              placeholder="Search News..."
              value={searchKeyword}
              onChange={handleSearchInputChange}
            />
            
          </div>
        </div>
      </div>

      <div className=" md:p-0 bg-transparent h-screen overflow-hidden">
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 px-5 md:px-1 mt-10  ">
          {/* News Cards */}
          {newsData
            .filter((news) => {
              const lowercaseKeyword = searchKeyword.toLowerCase();
              return (
                news.title.toLowerCase().includes(lowercaseKeyword) ||
                news.source.name.toLowerCase().includes(lowercaseKeyword) ||
                news.description.toLowerCase().includes(lowercaseKeyword) ||
                news.publishedAt.toLowerCase().includes(lowercaseKeyword)
              );
            })
            .map((news) => (
              <Card
                key={news.url}
                judul={news.title}
                link={news.url}
                poster={news.urlToImage}
                tipe={news.source.name}
                waktu={news.publishedAt}
                desc={news.description}
              />
            ))}

          {/* News Cards for Apple */}
          {newsApple
            .filter((news) => {
              const lowercaseKeyword = searchKeyword.toLowerCase();
              return (
                news.title.toLowerCase().includes(lowercaseKeyword) ||
                news.source.name.toLowerCase().includes(lowercaseKeyword) ||
                
                news.publishedAt.toLowerCase().includes(lowercaseKeyword)
              );
            })
            .map((news) => (
              <Card
                key={news.url}
                judul={news.title}
                link={news.url}
                poster={news.urlToImage}
                tipe={news.source.name}
                waktu={news.publishedAt}
                desc={news.description}
                // Apply your card styles (e.g., card background color)
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
