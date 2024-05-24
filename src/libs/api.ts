import { Category } from "@/types/Category"
import { Order } from "@/types/Order"
import { OrderStatus } from "@/types/OrderStatus"
import { Product } from "@/types/Product"

const tmpProduct: Product = {
    id: 999,
    image: 'https://cdn6.campograndenews.com.br/uploads/guia-gastronomico/2020/03/05/7wcdfly2pbqs.jpg',
    category: {
        id: 99,
        name: 'Burgers'
    },
    name: 'Burger Boladão',
    price: 35.4,
    description: 'Um hamburgão da melhor qualidade'
}

export const api = {
    login: async (email: string, password: string): Promise<{ error: string, token?: string }> => {
        return new Promise(resolve => {
            setTimeout(() => {
                if (email !== 'oi@oi.com.br') {
                    resolve({
                        error: 'Email e/ou senha inválidos'
                    })
                } else {
                    resolve({
                        error: '',
                        token: '123'
                    })
                }
            }, 200)
        })
    },
    forgotPassword: async (email: string): Promise<{ error: string }> => {
        return new Promise(resolve => {
            setTimeout(() => {
                if (email !== 'oi@oi.com.br') {
                    resolve({
                        error: ''
                    })
                }
            }, 200)
        })
    },
    redefinePassword: async (password: string, token: string): Promise<{ error: string }> => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ error: '' })
            }, 200)
        })
    },
    getOrders: async (): Promise<Order[]> => {
        return new Promise(resolve => {
            setTimeout(() => {
                const orders: Order[] = []
                const statuses: OrderStatus[] = ['preparing', 'sent', 'delivered']

                for (let i = 0; i < 6; i++) {
                    orders.push({
                        id: parseInt('12' + i),
                        status: statuses[Math.floor(Math.random() * 3)],
                        orderDate: '2023-01-03 18:30',
                        userId: '1',
                        userName: 'João',
                        shippingAddress: {
                            id: 99,
                            cep: '99999999',
                            address: 'Av. Brasil',
                            number: '1245',
                            neighborhood: 'Centro',
                            city: 'São Paulo',
                            state: 'SP',
                            complement: 'Casa 04'
                        },
                        shippingPrice: 12,
                        paymentType: 'card',
                        changeValue: 0,
                        cupom: 'TESTE',
                        cupomDiscount: 2,
                        products: [
                            { qt: 2, product: tmpProduct },
                            { qt: 3, product: { ...tmpProduct, id: 888, name: 'Burger Vegano' } }
                        ],
                        subtotal: 99,
                        total: 120
                    })
                }

                resolve(orders)
            }, 200)
        })
    },
    changeOrderStatus: async (id: number, newStatus: OrderStatus) => {
        return true
    },
    getCategories: async (): Promise<Category[]> => {
        const list: Category[] = [
            { id: 99, name: 'Burgers' },
            { id: 98, name: 'Refrigerantes' },
            { id: 97, name: 'doces' }
        ]
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(list)
            }, 200)
        })
    },
    getProducts: async (): Promise<Product[]> => {
        const list: Product[] = [
            { ...tmpProduct, id: 123 },
            { ...tmpProduct, id: 124 },
            { ...tmpProduct, id: 125 },
            { ...tmpProduct, id: 126 },
            { ...tmpProduct, id: 127 },
            { ...tmpProduct, id: 128 },
            { ...tmpProduct, id: 129 },
            { ...tmpProduct, id: 130 }
        ]
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(list)
            }, 200)
        })
    },
    deleteProduct: async (id: number): Promise<boolean> => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true)
            }, 200)
        })
    },
    createProduct: async (form: FormData) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true)
            }, 200)
        })
    },
    updateProduct: async (form: FormData) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true)
            }, 200)
        })
    }
}