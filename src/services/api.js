import axios from 'axios';

const API_KEY = 'cugsph9r01qr6jndkcggcugsph9r01qr6jndkch0';
const BASE_URL = 'https://finnhub.io/api/v1';

export const fetchStockData = async (symbol) => {
    try {
        const response = await axios.get(`${BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw error;
    }
};
