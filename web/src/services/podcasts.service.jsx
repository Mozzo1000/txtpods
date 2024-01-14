import axios from "axios";

const API_URL = "https://api.txtpods.org/v1/";

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