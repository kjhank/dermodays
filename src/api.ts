import axios from 'axios';

export const getPromos = async (categoryId: string) => {
  const response = await axios.get(`https://www.doz.pl/lp-data/links/ids/${categoryId}`);

  return response.data;
};

export const getProduct = async (productId: string) => {
  const response = await axios.get(`https://www.doz.pl/lp-data/products/ids/${productId}`);

  return response.data;
};
