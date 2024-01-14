import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const get = (id) => {
    return axios.get(API_URL + "podcasts/" + id);
};

const getAll = () => {
    return axios.get(API_URL + "podcasts");
};

const getTranscript = (id, e_id) => {
    return axios.get(API_URL + "podcasts/" + id + "/episodes/" + e_id + "/transcript");
};

const exportedObject = {
    get,
    getAll,
    getTranscript,
};

export default exportedObject;