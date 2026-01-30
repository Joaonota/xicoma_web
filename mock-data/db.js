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
        },
        {
            id: 3,
            name: "Ocean Grill",
            email: "ocean@xicoma.com",
            password: "123",
            category: "Mariscos",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1551632326-f7f6ec41c098?w=500",
            deliveryTime: "45-60 min",
            deliveryFee: 80,
            wallet: 0
        },
        {
            id: 4,
            name: "A Casa do Frango",
            email: "casafrango@xicoma.com",
            password: "123",
            category: "Grelhados",
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500",
            deliveryTime: "25-35 min",
            deliveryFee: 40,
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
    menuItems: [
        // Burger King Menu
        { id: 101, restaurantId: 1, name: "Whopper", price: 350, rating: 4.8, description: "O clássico grelhado no fogo com carne, alface, tomate, cebola e picles.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200" },
        { id: 102, restaurantId: 1, name: "Batata Frita Grande", price: 150, rating: 4.5, description: "Batatas crocantes e douradas, perfeitas para acompanhar.", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=200" },
        { id: 103, restaurantId: 1, name: "Chicken Royale", price: 320, rating: 4.6, description: "Frango empanado crocante com maionese e alface fresca.", image: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=200" },
        { id: 104, restaurantId: 1, name: "Onion Rings", price: 120, rating: 4.4, description: "Anéis de cebola empanados e fritos até ficarem dourados.", image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=200" },
        { id: 105, restaurantId: 1, name: "Milkshake Chocolate", price: 180, rating: 4.7, description: "Cremoso milkshake de chocolate com chantilly.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200" },
        { id: 106, restaurantId: 1, name: "Big King XXL", price: 420, rating: 4.9, description: "Dois hambúrgueres de carne grelhada com queijo e molho especial.", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200" },
        { id: 107, restaurantId: 1, name: "Nuggets 10 unidades", price: 200, rating: 4.3, description: "Pedaços de frango empanados e crocantes.", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=200" },
        { id: 108, restaurantId: 1, name: "Coca-Cola 500ml", price: 80, rating: 5.0, description: "Refrigerante gelado.", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200" },
        { id: 109, restaurantId: 1, name: "BK Chicken Sandwich", price: 280, rating: 4.5, description: "Hambúrguer de frango com maionese cremosa.", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=200" },
        { id: 110, restaurantId: 1, name: "Batata Suprema", price: 250, rating: 4.8, description: "Batatas com cheddar e bacon.", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200" },
        { id: 111, restaurantId: 1, name: "Casquinha Mista", price: 50, rating: 4.2, description: "Sorvete de baunilha e chocolate.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=200" },
        { id: 112, restaurantId: 1, name: "Wrap de Frango", price: 180, rating: 4.6, description: "Tortilha recheada com frango e salada.", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200" },
        { id: 113, restaurantId: 1, name: "Suco de Laranja", price: 120, rating: 4.7, description: "Suco 100% natural.", image: "https://images.unsplash.com/photo-1624517531481-33026d361bbf?w=200" },

        // Pizza Hut Menu
        { id: 201, restaurantId: 2, name: "Pizza Pepperoni Familiar", price: 600, rating: 4.8, description: "Pizza grande com pepperoni e queijo mozzarella, borda recheada.", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200" },
        { id: 202, restaurantId: 2, name: "Pizza Margherita", price: 500, rating: 4.6, description: "Clássica pizza com molho de tomate, mozzarella e manjericão fresco.", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200" },
        { id: 203, restaurantId: 2, name: "Pizza Quatro Queijos", price: 650, rating: 4.7, description: "Combinação de mozzarella, gorgonzola, parmesão e provolone.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200" },
        { id: 204, restaurantId: 2, name: "Pizza Frango com Catupiry", price: 580, rating: 4.5, description: "Frango desfiado com catupiry cremoso e milho.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200" },
        { id: 205, restaurantId: 2, name: "Calzone Especial", price: 450, rating: 4.4, description: "Pizza fechada recheada com presunto, queijo e tomate.", image: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=200" },
        { id: 206, restaurantId: 2, name: "Breadsticks com Alho", price: 180, rating: 4.3, description: "Palitos de pão crocantes com manteiga de alho e queijo.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200" },
        { id: 207, restaurantId: 2, name: "Asa de Frango BBQ", price: 280, rating: 4.7, description: "8 asas de frango com molho barbecue.", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=200" },
        { id: 208, restaurantId: 2, name: "Sobremesa Brownie", price: 150, rating: 4.9, description: "Brownie de chocolate quente com sorvete de baunilha.", image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=200" },
        { id: 209, restaurantId: 2, name: "Refrigerante 1.5L", price: 120, rating: 5.0, description: "Refrigerante de sua escolha - Coca-Cola, Fanta ou Sprite.", image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=200" },
        { id: 210, restaurantId: 2, name: "Salada Caesar", price: 300, rating: 4.4, description: "Alface, croutons e molho caesar original.", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=200" },
        { id: 211, restaurantId: 2, name: "Pizza de Carne", price: 620, rating: 4.6, description: "Carne moída, cebola e pimento.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200" },
        { id: 212, restaurantId: 2, name: "Palitos de Queijo", price: 220, rating: 4.7, description: "Massa pan recheada com muito queijo.", image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=200" },
        { id: 213, restaurantId: 2, name: "Mini Pizzas (6 unid)", price: 400, rating: 4.5, description: "Mix de sabores em tamanho mini.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200" },
        { id: 214, restaurantId: 2, name: "Água Mineral", price: 50, rating: 5.0, description: "Água sem gás 500ml.", image: "https://images.unsplash.com/photo-1523362628744-0c14a37ef8f2?w=200" },

        // Ocean Grill Menu
        { id: 301, restaurantId: 3, name: "Camarão Grelhado", price: 850, rating: 4.9, description: "Camarões tigre grelhados com molho de alho e limão.", image: "https://images.unsplash.com/photo-1559742811-822873691df0?w=200" },
        { id: 302, restaurantId: 3, name: "Lulas à Recreio", price: 550, rating: 4.4, description: "Lulas tenras grelhadas servidas com batata cozida.", image: "https://images.unsplash.com/photo-1533682805518-48d1f5b8cd37?w=200" },
        { id: 303, restaurantId: 3, name: "Arroz de Marisco", price: 950, rating: 4.8, description: "Arroz caldoso com variados mariscos frescos da época.", image: "https://images.unsplash.com/photo-1512058560566-d8b437a1d7f8?w=200" },
        { id: 304, restaurantId: 3, name: "Peixe da Costa Grelhado", price: 700, rating: 4.6, description: "Peixe fresco do dia grelhado no carvão.", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200" },
        { id: 305, restaurantId: 3, name: "Vinho Branco da Casa", price: 450, rating: 5.0, description: "Garrafa de vinho branco seco para acompanhar.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200" },
        { id: 306, restaurantId: 3, name: "Lagosta Grelhada", price: 1500, rating: 5.0, description: "Lagosta fresca grelhada com manteiga de ervas.", image: "https://images.unsplash.com/photo-1553247407-23251ce81f59?w=200" },
        { id: 307, restaurantId: 3, name: "Espetada de Peixe", price: 600, rating: 4.7, description: "Lombos de peixe com pimentos e cebola.", image: "https://images.unsplash.com/photo-1551632432-0758e624d77a?w=200" },
        { id: 308, restaurantId: 3, name: "Mexilhões ao Vinho", price: 480, rating: 4.5, description: "Mexilhões frescos cozidos em vinho branco.", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=200" },
        { id: 309, restaurantId: 3, name: "Pudim de Caramelo", price: 180, rating: 4.8, description: "Sobremesa caseira deliciosa.", image: "https://images.unsplash.com/photo-1528903125552-de38014355ec?w=200" },
        { id: 310, restaurantId: 3, name: "Cerveja Nacional", price: 100, rating: 4.9, description: "Cerveja gelada 330ml.", image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=200" },

        // A Casa do Frango Menu
        { id: 401, restaurantId: 4, name: "Frango Inteiro à Zambeziana", price: 650, rating: 4.9, description: "Frango grelhado marinado em leite de coco e especiarias.", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=200" },
        { id: 402, restaurantId: 4, name: "Meio Frango no Carvão", price: 350, rating: 4.7, description: "Meio frango suculento grelhado na hora.", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=200" },
        { id: 403, restaurantId: 4, name: "Espetada de Frango", price: 400, rating: 4.5, description: "Cubos de frango com pimentos e cebola.", image: "https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?w=200" },
        { id: 404, restaurantId: 4, name: "Xima com Molho", price: 100, rating: 4.8, description: "Acompanhamento tradicional moçambicano.", image: "https://images.unsplash.com/photo-1589113180470-386663f78964?w=200" },
        { id: 405, restaurantId: 4, name: "Sumo de Fruta Natural", price: 150, rating: 5.0, description: "Sumo fresco feito na hora.", image: "https://images.unsplash.com/photo-1536816579748-4fcb3b45a724?w=200" },
        { id: 406, restaurantId: 4, name: "Moela de Frango", price: 250, rating: 4.4, description: "Moelas estufadas com molho picante.", image: "https://images.unsplash.com/photo-1563379091339-03b21ef4a4f8?w=200" },
        { id: 407, restaurantId: 4, name: "Salada Verde", price: 180, rating: 4.3, description: "Mix de alfaces e tomate.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200" },
        { id: 408, restaurantId: 4, name: "Batata Frita", price: 120, rating: 4.6, description: "Porção individual de batatas fritas.", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=200" },
        { id: 409, restaurantId: 4, name: "Mousse de Chocolate", price: 140, rating: 4.9, description: "Cremosa e irresistível.", image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=200" },
        { id: 410, restaurantId: 4, name: "Refrigerante Lata", price: 70, rating: 5.0, description: "Lata 330ml gelada.", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200" }
    ],
    orders: []
};
