import axios from 'axios'

export const defaultApiParams = {
	_limit: 10,
	_page: 1
}

const fetchInstance = axios.create({
	baseURL: process.env.VITE_API_URL
})

export default fetchInstance
