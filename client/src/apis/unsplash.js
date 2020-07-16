import axios from 'axios';
import ACCESS_KEY from '../keys/key'

export  default axios.create({
	baseURL:'https://api.unsplash.com',
	headers: {
		Authorization: `Client-ID ${ACCESS_KEY}`,
	}
})