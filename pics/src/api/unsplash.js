import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID VBARdo-IlC83GvSR1KlyHbEqqa2DbxDaBuFbKQf3FSU",
  },
});
