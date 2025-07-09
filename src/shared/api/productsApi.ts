import axios from 'axios';
import type { ProductsForm } from '../../widgets/ProductsForm';

const api = axios.create({
   baseURL: 'http://localhost:5000/api',
});

export function CpfcPostRequest(data: typeof ProductsForm) {
   return api.post<ProductsForm>('/cpfc', data);
}
