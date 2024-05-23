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
            }, 1000)
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
            }, 1000)
        })
    },
    redefinePassword: async (password: string, token: string): Promise<{ error: string }> => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ error: '' })
            }, 1000)
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
            }, 1000)
        })
    },
    changeOrderStatus: async (id: number, newStatus: OrderStatus) => {
        return true
    }
}