import './App.css';      //importing css file in javascript
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Content from './components/content/Content';
import axios from 'axios';


axios.defaults.baseURL='https://api.themoviedb.org/3';
axios.defaults.params ={
  api_key: 'c5a106392e39f6bbd2abd14dd133cbc4',
};




const App =   ()=>  {

  return (
  <div>
    <Nav/>
    <Header/>
    <Content/>
  </div>
  );
};

export default App;
