import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main.tsx';
import { Keyword } from './pages/Keyword.tsx';
import { Food } from './pages/Food.tsx';
import { Cuisine } from './pages/Cuisine.tsx';
import { Login } from './pages/Login.tsx';
import { SignUp } from './pages/SignUp.tsx';
import { Save } from './pages/Save.tsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/keyword" element={<Keyword />} />
                    <Route path="/food/:id" element={<Food />} />
                    <Route path="/cuisine/:id" element={<Cuisine />} />
                    <Route path="/save" element={<Save />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
