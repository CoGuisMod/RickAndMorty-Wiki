import axios from "axios";

const URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (name, page) => {
  try {
    const response = await axios.get(
      `${URL}/character/?page=${page}&name=${name}`
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

export const getLocations = async (name, page) => {
  try {
    const response = await axios.get(
      `${URL}/location/?page=${page}&name=${name}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getLocation = async (id) => {
  try {
    const response = await axios.get(`${URL}/location/${id}`);
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

export const getEpisode = async (id) => {
  try {
    const response = await axios.get(`${URL}/episode/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
