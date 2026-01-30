const mockDB = {
    users: [
        { id: 1, name: "Usuário Teste", email: "cliente@xicoma.com", role: "client", password: "123", phone: "841234567" },
        { id: 2, name: "Admin Geral", email: "admin@xicoma.com", role: "admin", password: "123", phone: "820000000" }
    ],
    restaurants: [
        {
            id: 1,
            name: "Burger King",
            email: "bk@xicoma.com",
            password: "123",
            category: "Lanches",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500",
            deliveryTime: "30-40 min",
            deliveryFee: 50,
            wallet: 0
        },
        {
            id: 2,
            name: "Pizza Hut",
            email: "pizza@xicoma.com",
            password: "123",
            category: "Pizza",
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
            deliveryTime: "40-50 min",
            deliveryFee: 70,
            wallet: 0
        }
    ],
    couriers: [
        {
            id: 1,
            name: "António Silva",
            email: "moto@xicoma.com",
            password: "123",
            vehicle: "Moto",
            plate: "AMM-123-MC",
            status: "available",
            wallet: 0
        }
    ],
    products: [
        { id: 101, restaurantId: 1, name: "Whopper", price: 350, description: "O clássico grelhado no fogo.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200" },
        { id: 102, restaurantId: 1, name: "Batata Frita", price: 150, description: "Crocantes e salgadas.", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=200" },
        { id: 201, restaurantId: 2, name: "Pizza Pepperoni", price: 600, description: "Familiar com borda recheada.", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200" }
    ],
    orders: []
};
