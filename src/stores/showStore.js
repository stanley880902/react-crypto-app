import { create } from 'zustand';
import axios from 'axios';
import debounce from '../helper/debounce';

const homeStore = create((set) => ({}))

export default homeStore;