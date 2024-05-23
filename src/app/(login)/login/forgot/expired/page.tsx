'use client'

import { Alert, Link as MuiLink } from "@mui/material";
import Link from "next/link";

export default function Page() {

    return (
        <>
            <Alert variant="filled" severity="error" sx={{ mt: 3, mb: 3 }}>
                Este link espirou, refaça o procedimento!
            </Alert>
            <MuiLink href='/login/forgot' variant="button" component={Link}>Esqueci minha senha.</MuiLink>
        </>
    )
}