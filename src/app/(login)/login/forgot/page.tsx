'use client'

import { api } from "@/libs/api";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { FormEvent, useState } from "react";

export default function Page() {

    const [error, setError] = useState('')
    const [info, setinfo] = useState('')
    const [loading, setLoading] = useState(false)
    const [emailField, setEmailField] = useState('')

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!emailField) {
            setError('Preencha seu e-mail')
            return
        }
        setError('')
        setinfo('')
        setLoading(true)
        const result = await api.forgotPassword(emailField)
        setLoading(false)
        if (result.error) {
            setError(result.error)
        } else {
            setinfo('Resposta enviada para seu e-mail')
        }

    }

    return (
        <>
            <Typography component='p' sx={{ textAlign: 'center', mt: 2, color: '#555' }}>
                Deseja recuperar sua senha?
            </Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <TextField
                    label='Digite se e-mail'
                    name="email"
                    required
                    fullWidth
                    autoFocus
                    sx={{ mb: 2 }}
                    onChange={e => setEmailField(e.target.value)}
                    value={emailField}
                    disabled={loading}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                >
                    {loading ? 'Carregando...' : 'Recuperar senha'}
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