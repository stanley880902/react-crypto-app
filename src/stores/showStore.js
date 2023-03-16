import { create } from 'zustand';
import axios from 'axios';
import debounce from '../helper/debounce';

const showStore = create((set) => ({
    graphData: [],

    fetchData: async (id) => {
        const [graphRes, dataRes] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=121`),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`),
        ]);
        
        const graphData = graphRes.data.prices.map((price) => {
            const [timeStamp, p] = price;
            const date = new Date(timeStamp).toLocaleDateString('en-us');

            return {
                Date: date,
                Price: p
              };
        });
        console.log(dataRes);
        set({ graphData });
    },
}));



export default showStore;