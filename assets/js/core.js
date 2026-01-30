const xicoma = {
    // --- DATABASE ---
    db: {
        data: {},
        init() {
            const stored = localStorage.getItem('xicoma_db');
            if (stored) {
                const parsed = JSON.parse(stored);
                // Sync data if version in code is newer than stored version
                if (!parsed.version || (mockDB.version && mockDB.version > parsed.version)) {
                    this.data = mockDB;
                    this.save();
                } else {
                    this.data = parsed;
                }
            } else {
                this.data = mockDB;
                this.save();
            }
        },
        save() {
            localStorage.setItem('xicoma_db', JSON.stringify(this.data));
        },
        get(collection) {
            return this.data[collection] || [];
        },
        add(collection, item) {
            if (!this.data[collection]) this.data[collection] = [];
            item.id = Date.now(); // Simple ID
            this.data[collection].push(item);
            this.save();
            return item;
        },
        update(collection, id, updates) {
            const index = this.data[collection].findIndex(i => i.id == id);
            if (index !== -1) {
                this.data[collection][index] = { ...this.data[collection][index], ...updates };
                this.save();
                return true;
            }
            return false;
        },
        delete(collection, id) {
            this.data[collection] = this.data[collection].filter(i => i.id != id);
            this.save();
        }
    },

    // --- AUTHENTICATION ---
    auth: {
        currentUser: null,
        init() {
            const session = sessionStorage.getItem('xicoma_user');
            if (session) {
                this.currentUser = JSON.parse(session);
            }
        },
        login(email, password, type) {
            // Check specific collections based on type
            let user = null;
            if (type === 'client' || type === 'admin') {
                user = xicoma.db.get('users').find(u => u.email === email && u.password === password && u.role === type);
            } else if (type === 'restaurant') {
                user = xicoma.db.get('restaurants').find(u => u.email === email && u.password === password);
                if (user) user.role = 'restaurant';
            } else if (type === 'courier') {
                user = xicoma.db.get('couriers').find(u => u.email === email && u.password === password);
                if (user) user.role = 'courier';
            }

            if (user) {
                this.currentUser = user;
                sessionStorage.setItem('xicoma_user', JSON.stringify(user));
                return true;
            }
            return false;
        },
        logout() {
            this.currentUser = null;
            sessionStorage.removeItem('xicoma_user');
            window.location.href = '../index.html'; // Back to landing
        },
        checkAccess(role) {
            // Bypass authentication - allow all access
            return true;
        }
    },

    // --- CART (Client Only) ---
    cart: {
        items: [],
        restaurantId: null,
        init() {
            const saved = localStorage.getItem('xicoma_cart');
            if (saved) {
                const data = JSON.parse(saved);
                this.items = data.items;
                this.restaurantId = data.restaurantId;
            }
        },
        add(product, restId) {
            // Check if adding from different restaurant
            if (this.restaurantId && this.restaurantId !== restId && this.items.length > 0) {
                if (!confirm("Deseja esvaziar o carrinho para adicionar itens de outro restaurante?")) return;
                this.items = [];
            }
            this.restaurantId = restId;

            const existing = this.items.find(i => i.id === product.id);
            if (existing) {
                existing.qty++;
            } else {
                this.items.push({ ...product, qty: 1 });
            }
            this.save();
        },
        remove(prodId) {
            this.items = this.items.filter(i => i.id !== prodId);
            if (this.items.length === 0) this.restaurantId = null;
            this.save();
        },
        clear() {
            this.items = [];
            this.restaurantId = null;
            this.save();
        },
        total() {
            return this.items.reduce((sum, i) => sum + (i.price * i.qty), 0);
        },
        save() {
            localStorage.setItem('xicoma_cart', JSON.stringify({ items: this.items, restaurantId: this.restaurantId }));
            // Trigger UI update event
            window.dispatchEvent(new Event('cart-updated'));
        }
    },

    // --- UTILS ---
    formatCurrency(val) {
        return new Intl.NumberFormat('pt-MZ', { style: 'currency', currency: 'MZN' }).format(val);
    }
};

// Auto Init
xicoma.db.init();
xicoma.auth.init();
xicoma.cart.init();
