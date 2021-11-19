import React from 'react'
import Login from '../components/Login'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../context/AuthContext'

function LoginPage() {



    return (
        <AuthProvider>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <Login />
                </div>
            </Container>
        </AuthProvider>
    )
}

export default LoginPage

