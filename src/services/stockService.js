import { fetchStockData } from './api';

export const getStockDetails = async (symbol) => {
    try {
        const data = await fetchStockData(symbol);
        return {
            currentPrice: data.c,
            openPrice: data.o,
            highPrice: data.h,
            lowPrice: data.l,
            volume: data.v,
            percentageChange: ((data.c - data.o) / data.o) * 100,
        };
    } catch (error) {
        console.error('Error getting stock details:', error);
        throw error;
    }
};
