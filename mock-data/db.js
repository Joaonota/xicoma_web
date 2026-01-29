const db = {
    restaurants: [
        {
            id: 1,
            name: "Burger King",
            category: "Lanches",
            rating: 4.8,
            time: "30-40 min",
            deliveryFee: "50 MT",
            image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80",
            products: [
                { id: 101, name: "Whopper Combo", price: 350, description: "Hambúrguer, batata e bebida", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80" },
                { id: 102, name: "Cheeseburger", price: 150, description: "Clássico com queijo", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&q=80" }
            ]
        },
        {
            id: 2,
            name: "Sabor da Terra",
            category: "Moçambicana",
            rating: 4.5,
            time: "45-60 min",
            deliveryFee: "Gratis",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80",
            products: [
                { id: 201, name: "Matapa com Caranguejo", price: 400, description: "Prato tradicional", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&q=80" }
            ]
        },
        {
            id: 3,
            name: "Pizza Hut",
            category: "Pizza",
            rating: 4.2,
            time: "30-50 min",
            deliveryFee: "100 MT",
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80",
            products: [
                { id: 301, name: "Pizza Pepperoni", price: 600, description: "Grande familiar", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&q=80" }
            ]
        }
    ],
    currentUser: {
        name: "João Silva",
        email: "joao@xicoma.co.mz",
        phone: "+258 84 123 4567"
    },
    orders: []
};

// Simple Store for state management
const store = {
    cart: [],
    addToCart(product, restaurantId) {
        this.cart.push({ ...product, restaurantId, qty: 1 });
        this.save();
        updateCartUI();
    },
    save() {
        localStorage.setItem('xicoma_cart', JSON.stringify(this.cart));
    },
    load() {
        const saved = localStorage.getItem('xicoma_cart');
        if (saved) this.cart = JSON.parse(saved);
        updateCartUI();
    }
};

function formatCurrency(value) {
    return value + ' MT';
}
