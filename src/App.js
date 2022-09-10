import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar />
           <Main />
        <Footer />
    </div>
  );
}

export default App;
