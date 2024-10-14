import axios from "axios";


// base url'e sahip bir axios örneği oluşturduk
const api = axios.create({ baseURL: "http://localhost:3000" });

// bütün konaklama yerlerini getiren fonk.
export const getPlaces = () =>
    api.get("/api/places",).then((res) => res.data.places);