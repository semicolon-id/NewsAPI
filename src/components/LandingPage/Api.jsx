import axios from "axios";

const apiKey = "8bf1444c16be40129658bb7ac2ba7c65";
const baseURL = "https://newsapi.org/v2/everything";

export const fetchNews = async (query) => {
  try {
    const response = await axios.get(baseURL, {
      params: {
        q: query,
        from: "2023-09-20", // Tanggal mulai
        sortBy: "popularity", // Urutkan berdasarkan popularitas
        apiKey: apiKey,
      },
    });
    return response.data.articles; // Mengambil daftar artikel dari respons
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const fetchDetailNews = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching detail news:", error);
    return null;
  }
};
