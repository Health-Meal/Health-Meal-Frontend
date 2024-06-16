import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main.tsx';
import { Keyword } from './pages/Keyword.tsx';
import { Food } from './pages/Food.tsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/keyword" element={<Keyword />} />
                    <Route path="/food" element={<Food/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
