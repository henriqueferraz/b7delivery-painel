import { dateFormat } from "@/libs/dateFormat"
import { Order } from "@/types/Order"
import { OrderStatus } from "@/types/OrderStatus"
import { Box, Button, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"

type Props = {
    item: Order
    onChangeStatus: (id: number, newStatus: OrderStatus) => void
    onPrint: (order: Order) => void
}

export const OrderItem = ({ item, onChangeStatus, onPrint }: Props) => {

    const getStatusBackground = (status: OrderStatus) => {
        const statuses = {
            preparing: '#2787ba',
            sent: '#27ba3a',
            delivered: '#999999'
        }
        return statuses[status]
    }
    const handlePrint = () => {
        onPrint(item)
    }
    const handleStatusChange = (event: SelectChangeEvent) => {
        onChangeStatus(item.id, event.target.value as OrderStatus)
    }

    return (
        <Box sx={{ border: '1px solid #eee', color: '#fff', borderRadius: 2, overflow: 'hidden' }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 1,
                backgroundColor: getStatusBackground(item.status)
            }}>
                <Box>
                    <Typography component='p'>{dateFormat(item.orderDate)}</Typography>
                    <Typography component='p'>{item.userName}</Typography>
                    <Button onClick={handlePrint} size="small" sx={{ color: '#fff', p: 0 }}>Imprimir</Button>
                </Box>
                <Box>
                    <Typography component='p' sx={{ fontSize: 24 }} >#{item.id}</Typography>
                </Box>
            </Box>
            <Box sx={{ p: 1, backgroundColor: '#eee' }}>
                <Select
                    variant="standard"
                    value={item.status}
                    fullWidth
                    onChange={handleStatusChange}
                >
                    <MenuItem value='preparing'>Preparando</MenuItem>
                    <MenuItem value='sent'>Enviado</MenuItem>
                    <MenuItem value='delivered'>Entregue</MenuItem>
                </Select>
            </Box>
            <Box sx={{ p: 1, backgroundColor: '#fff' }}>
                {item.products.map((productItem, index) => (
                    <Typography
                        key={index}
                        component='p'
                        sx={{
                            p: 1,
                            color: '#000',
                            fontWeight: 'bold',
                            borderBottom: '1px solid #ccc'
                        }}
                    >
                        {`${productItem.qt} X ${productItem.product.name}`}
                    </Typography>
                ))}
            </Box>
        </Box >
    )
}