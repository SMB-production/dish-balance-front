import axios from 'axios';
import type { cpfcFormType } from '../globalTypes/cpfcFormTypes/cpfcFormTypes.ts';

const api = axios.create({
   baseURL: 'http://localhost:5000/api',
});

export function CpfcPostRequest(data: cpfcFormType) {
   return api.post<cpfcFormType>('/cpfc', data);
}
