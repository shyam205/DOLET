
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Header from './components/Header';
import About from './Pages/About'

function App() {
    return (
        <BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				{/* <Route path="/faq" element={<Faq />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/search/:book_name" element={<SearchResult />} />
				<Route path="/book/:book_name" element={<Book />} /> */}
			</Routes>
        </BrowserRouter>
    );
}

export default App;
