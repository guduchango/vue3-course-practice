const app = Vue.createApp({
    data() {
        return {
            products: [],
            cart: [],
            selectedCategory: '',
        };
    },
    computed: {
        categories() {
            // Extraer categorías únicas de los productos
            return [...new Set(this.products.map(product => product.category))];
        },
        filteredProducts() {
            if (!this.selectedCategory) {
                return this.products;
            }
            return this.products.filter(product => product.category === this.selectedCategory);
        },
        cartTotal() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
    },
    methods: {
        fetchProducts() {
            // Simular una API con un conjunto de datos mock
            const mockProducts = [
                { id: 1, name: 'Laptop', description: 'A powerful laptop.', price: 1200, category: 'Electronics' },
                { id: 2, name: 'Headphones', description: 'Noise-cancelling headphones.', price: 200, category: 'Electronics' },
                { id: 3, name: 'Coffee Mug', description: 'A ceramic coffee mug.', price: 15, category: 'Home' },
                { id: 4, name: 'Notebook', description: 'A 200-page notebook.', price: 5, category: 'Office' },
                { id: 5, name: 'Desk Lamp', description: 'An adjustable desk lamp.', price: 45, category: 'Home' },
            ];

            // Asignar datos simulados
            setTimeout(() => {
                this.products = mockProducts;
            }, 500);
        },
        addToCart(product) {
            const item = this.cart.find(cartItem => cartItem.id === product.id);
            if (item) {
                item.quantity++;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart(product) {
            const index = this.cart.findIndex(cartItem => cartItem.id === product.id);
            if (index > -1) {
                this.cart.splice(index, 1);
            }
        },
    },
    mounted() {
        this.fetchProducts();
    },
});

app.mount('#app');