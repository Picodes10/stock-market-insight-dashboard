import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import BlankPage from "./pages/BlankPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/blank" element={<BlankPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
