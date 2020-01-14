import axios from "axios";

export default async term => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id:
        "0efad7b2e0df2733785868f69f11e77902b7a4fead8d2ac79d0ee7532b58d059",
      query: term
    }
  });
  return response.data.results;
};
