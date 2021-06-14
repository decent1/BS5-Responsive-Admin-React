import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/TopNavbar/TopNavbar';
import MainPage from './components/MainPage/MainPage';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';

function App() {
  return (
    <>
      <TopNavbar />
      
      <LeftSidebar />
      <MainPage />
    </>
  );
}

export default App;
