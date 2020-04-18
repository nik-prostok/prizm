import api from './config.api';

export default {
    fetchProducts() {
        return api().get('/product')
    }
}
