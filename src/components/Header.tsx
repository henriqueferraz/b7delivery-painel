import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { HeaderDrawer } from "./HeaderDrawer"
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {

    const router = useRouter()
    const [drawerOpen, setDrawerOpen] = useState(false)

    const pageTitle = 'Painel B7Delivery'

    const handleLogout = () => {
        router.push('/login')
    }
    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen)
    }

    return (
        <>
            <AppBar component='nav' position="relative" sx={{ displayPrint: 'none' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge='start'
                        sx={{ display: { sm: 'none' } }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component='div'
                        variant="h6"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link
                            href='/'
                            style={{ color: '#fff', textDecoration: 'none' }}
                        >
                            {pageTitle}
                        </Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Link href='/pedidos' style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: '#fff' }}>Pedidos</Button>
                        </Link>
                        <Link href='/produtos' style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: '#fff' }}>Produtos</Button>
                        </Link>
                        <Link href='/categorias' style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: '#fff' }}>Categorias</Button>
                        </Link>
                        <Button onClick={handleLogout} sx={{ color: '#fff' }}>Sair</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component='nav'>
                <HeaderDrawer
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    title={pageTitle}
                    onLogout={handleLogout}
                />
            </Box>
        </>
    )
}