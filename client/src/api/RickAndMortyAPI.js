import axios from "axios";

const URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (name, status, gender, page) => {
  try {
    const response = await axios.get(
      `${URL}/character/?page=${page}&name=${name}&status=${status}&gender=${gender}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCharacter = async (id) => {
  try {
    const response = await axios.get(`${URL}/character/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getLocations = async (name, type, dimension, page) => {
  try {
    const response = await axios.get(
      `${URL}/location/?page=${page}&name=${name}&type=${type}&dimension=${dimension}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getEpisodes = async (name, page) => {
  try {
    const response = await axios.get(
      `${URL}/episode/?page=${page}&name=${name}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
