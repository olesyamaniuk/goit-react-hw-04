import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";

const MyAccess = "AIK1kkcDQtr5tx71hXjaprpcLRmG884OQKAMFhDVvag";

export const fetchImages = async (searchQuery, currenPage) => {
  const response = await axios.get(`search/photos/?client_id=${MyAccess}`, {
    params: {
      query: searchQuery,
      page: currenPage,
      per_page: 12,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};