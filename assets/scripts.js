const nav = {
    history: [],
    to(screenId) {
        // Hide all screens
        document.querySelectorAll('section').forEach(s => {
            s.classList.add('d-none');
            s.classList.remove('d-flex');
        });

        // Show target
        const screen = document.getElementById(screenId + '-screen');
        if (screen) {
            screen.classList.remove('d-none');
            // If splash or confirmation, needs flex
            if (['splash', 'confirmation'].includes(screenId)) {
                screen.classList.add('d-flex');
            }
        }

        // Handle Nav Visibility
        const navBar = document.getElementById('main-nav');
        if (navBar) {
            if (['home', 'orders', 'profile'].includes(screenId)) {
                navBar.classList.remove('d-none');
            } else {
                navBar.classList.add('d-none');
            }
        }

        this.history.push(screenId);
        window.scrollTo(0, 0);

        if (screenId === 'cart') updateCartUI();
    },
    back() {
        this.history.pop(); // remove current
        const prev = this.history[this.history.length - 1] || 'home';
        this.to(prev);
        // popping again because .to() pushes it back
        this.history.pop();
        this.history.pop();
        this.history.push(prev);
    }
};

function updateCartUI() {
    const list = document.getElementById('cart-items');
    if (!list) return;

    if (store.cart.length === 0) {
        list.innerHTML = '<div class="text-center text-muted py-5"><i class="bi bi-basket display-1"></i><p class="mt-3">Seu carrinho está vazio</p></div>';
        document.getElementById('cart-total').innerText = '0 MT';
        return;
    }

    let total = 0;
    list.innerHTML = store.cart.map(item => {
        total += item.price;
        return `
        <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="badge bg-light text-dark me-2">1x</span>
            <div class="flex-grow-1">
                <h6 class="mb-0 small fw-bold">${item.name}</h6>
                <small class="text-muted">${item.price} MT</small>
            </div>
            <button class="btn btn-sm text-danger"><i class="bi bi-trash"></i></button>
        </div>
    `}).join('');

    document.getElementById('cart-subtotal').innerText = total + " MT";
    document.getElementById('cart-total').innerText = (total + 50) + " MT"; // Mock delivery fee

    // Add floating cart button to restaurant page if not exists
    const restScreen = document.getElementById('restaurant-screen');
    if (restScreen && !document.getElementById('float-cart-btn')) {
        const btn = document.createElement('div');
        btn.id = 'float-cart-btn';
        btn.innerHTML = `<button onclick="nav.to('cart')" class="btn btn-primary-xicoma shadow-lg position-fixed start-50 translate-middle-x" style="bottom: 20px; width: 90%; max-width: 440px; z-index: 2000;">
            <div class="d-flex justify-content-between">
                <span class="badge bg-white text-danger">${store.cart.length}</span>
                <span>Ver Carrinho</span>
                <span>${total} MT</span>
            </div>
        </button>`;
        restScreen.appendChild(btn);
    }
}

// Toast Notification System
function showToast(message, type = 'success') {
    // Create toast container if not exists
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 10000; display: flex; flex-direction: column; gap: 10px;';
        document.body.appendChild(container);
    }

    // Create toast
    const toast = document.createElement('div');
    const bgClass = type === 'success' ? 'bg-success' : (type === 'error' ? 'bg-danger' : 'bg-dark');
    toast.className = `toast show align-items-center text-white ${bgClass} border-0 shadow`;
    toast.style.minWidth = '250px';
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="bi bi-${type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i> ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `;

    container.appendChild(toast);

    // Auto remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Generic Mock Actions
const actions = {
    login: (role) => {
        const btn = event.target;
        const originalText = btn.innerText;
        btn.innerText = 'Autenticando...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerText = originalText;
            btn.disabled = false;
            showToast(`Bem-vindo ao XICOMA ${role}!`);

            if (role === 'Admin') {
                document.getElementById('admin-login').classList.add('d-none');
                document.getElementById('admin-content').classList.remove('d-none');
                if (window.initCharts) window.initCharts();
            } else {
                nav.to('home'); // Default SPA nav
            }
        }, 1500);
    },

    save: (item) => {
        showToast(`${item} salvo com sucesso!`);
    },

    delete: (item) => {
        if (confirm(`Tem certeza que deseja remover este ${item}?`)) {
            showToast(`${item} removido.`);
            // Try to remove closest row/card
            const target = event.target.closest('tr') || event.target.closest('.card');
            if (target) target.style.display = 'none';
        }
    },

    export: (type) => {
        showToast(`Relatório de ${type} baixado.`);
    },

    toggleStatus: (status) => {
        showToast(`Status alterado para: ${status}`);
    },

    acceptOrder: (id) => {
        showToast(`Pedido #${id} aceito!`);
        // Move visual card if in Kanban/List
        const card = event.target.closest('.order-card, .card');
        if (card) {
            card.classList.add('opacity-50');
            card.querySelector('button').innerText = 'Aceito';
            card.querySelector('button').disabled = true;
        }
    }
};

// Global Button Initializer (Optional - for static buttons)
document.addEventListener('DOMContentLoaded', () => {
    // Attach to specific static buttons if needed, but onClick attributes are used for simplicity in mockups
});

// Expose to window for inline calls
window.nav = nav;
window.actions = actions;
window.showToast = showToast;
