'use client'

import { api } from "@/libs/api";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { FormEvent, useState } from "react";

export default function Page() {

    const [error, setError] = useState('')
    const [info, setinfo] = useState('')
    const [loading, setLoading] = useState(false)
    const [passwordField, setPasswordField] = useState('')
    const [passwordField2, setPasswordField2] = useState('')

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!passwordField || !passwordField2) {
            setError('Preencha sua senha.')
            return
        }
        if (passwordField !== passwordField2) {
            setError('Senhas não conferem!')
            return
        }

        setError('')
        setinfo('')
        setLoading(true)
        const result = await api.redefinePassword(passwordField, '123')
        setLoading(false)
        if (result.error) {
            setError(result.error)
        } else {
            setinfo('Senha redefinida com sucesso, faça seu login.')
            setPasswordField('')
            setPasswordField2('')
        }
    }

    return (
        <>
            <Typography component='p' sx={{ textAlign: 'center', mt: 2, color: '#555' }}>
                Olá **USUÀRIO**
            </Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <TextField
                    label='Digite sua nova senha'
                    name="password"
                    type="password"
                    required
                    fullWidth
                    sx={{ mb: 2 }}
                    onChange={e => setPasswordField(e.target.value)}
                    value={passwordField}
                    disabled={loading}
                />
                <TextField
                    label='Redigite sua nova senha'
                    name="password2"
                    type="password"
                    required
                    fullWidth
                    sx={{ mb: 2 }}
                    onChange={e => setPasswordField2(e.target.value)}
                    value={passwordField2}
                    disabled={loading}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                >
                    {loading ? 'Carregando...' : 'Redefinir senha'}
                </Button>

                {error &&
                    <Alert variant="filled" severity="error" sx={{ mt: 3 }}>
                        {error}
                    </Alert>
                }
                {info &&
                    <Alert variant="filled" severity="info" sx={{ mt: 3 }}>
                        {info}
                    </Alert>
                }
            </Box>
        </>
    )
}