import { ACCESS_KEY } from "../../constants/constants";
import { axios } from "../../utils/axios";

export const getFullBleedImage = async () => {
  try {
    const response = await axios.get(`/photos/?client_id=${ACCESS_KEY}`);

    const image = response.data[0].urls.full;
    localStorage.setItem("fullBleedImage", image);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
