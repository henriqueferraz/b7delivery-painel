'use client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Container, Typography } from '@mui/material';

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <html lang="pt-BR">
            <head>
                <title>Document</title>
            </head>
            <body>
                <Container component='main' maxWidth='xs'>
                    <Box sx={{
                        mt: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography component='h3' variant='h3'>B7Delivery</Typography>
                        <Typography component='h5' variant='h5'>Painel de Controle</Typography>
                        {children}
                    </Box>
                </Container>
            </body>
        </html>

    )
}

