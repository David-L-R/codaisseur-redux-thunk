import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './pages/Details'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/post/:id" element={<Details />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
