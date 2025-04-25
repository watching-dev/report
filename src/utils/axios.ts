import Axios from "axios";
import { BASE_URL } from "../constants/constants";

export const axios = Axios.create({
  baseURL: BASE_URL,
});
