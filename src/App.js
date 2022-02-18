//import logo from './logo.svg';
import './App.css';
//import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <header className="App-header">
        <NavBar>
        </NavBar>
        <ItemListContainer mensaje="CODERS!">
        </ItemListContainer>  
    </header>
  );
}

export default App;
