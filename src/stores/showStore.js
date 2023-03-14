import { create } from 'zustand';
import axios from 'axios';
import debounce from '../helper/debounce';

const showStore = create((set) => ({
    fetchData: (id) => {
        console.log('hey', id);
    },
}));

export default showStore;