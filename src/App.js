import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './pages/Details'
import HomePage from './pages/Home'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/post/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
