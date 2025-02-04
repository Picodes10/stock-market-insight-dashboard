import { useEffect, useState } from 'react';
import { getStockDetails } from '../services/stockService';

const Dashboard = () => {
    const [stockData, setStockData] = useState(null);
    const [error, setError] = useState(null);
    const symbol = 'AAPL'; // Default stock symbol

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getStockDetails(symbol);
                setStockData(data);
            } catch (error) {
                console.error('Error fetching stock data:', error);
                setError('Failed to fetch stock data. Please try again later.');
            }
        };

        fetchData();
    }, [symbol]);

    return (
        <div>
            <h2>Stock Dashboard</h2>
            {error ? (
                <p>{error}</p>
            ) : stockData ? (
                <div>
                    <h3>{symbol} Stock Details</h3>
                    <p>Current Price: ${stockData.currentPrice}</p>
                    <p>Open Price: ${stockData.openPrice}</p>
                    <p>High Price: ${stockData.highPrice}</p>
                    <p>Low Price: ${stockData.lowPrice}</p>
                    <p>Volume: {stockData.volume}</p>
                    <p>Percentage Change: {stockData.percentageChange.toFixed(2)}%</p>
                </div>
            ) : (
                <p>Loading stock data...</p>
            )}
        </div>
    );
};

export default Dashboard;
