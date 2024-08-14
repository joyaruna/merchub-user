import axios from 'axios';
import { baseURL } from './constants';

export const fetchCategories = async() => {
	const response = await axios.get(`${baseURL}/categories`);
    //console.log(JSON.stringify(response.data.data) + 'api response');
    //console.info(response + 'in api');
	return (response.data.data);

}