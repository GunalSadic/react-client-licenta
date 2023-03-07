import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import LoginPage from './Components/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './Components/RegistrationPage';
import CardList from './Components/CardList';
import LeaderboardPage from './Components/LeaderboardPage';

function App() {
  return (
  <Router>
    <NavigationBar></NavigationBar> 
    <Routes>
      <Route path ="/">
        <Route path="/Login" element = {<LoginPage/>}></Route>
        <Route path ="/Register" element = {<RegistrationPage/>}></Route>
        <Route path="/Leaderboards" element = {<LeaderboardPage/>}></Route>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
