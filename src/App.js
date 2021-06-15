import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/icons-1.5.0/font/bootstrap-icons.css';
import './assets/css/custom-css.css';
import './assets/css/list-groups.css';
import './App.css';
import TopNavbar from './components/TopNavbar/TopNavbar';
import MainPage from './components/MainPage/MainPage';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';

function App() {
  return (
    <>
      <TopNavbar />
      <div id="wrapper" className="full-outer">
        <div id="sidebar" className="sidebar-margin float-left shads padx-10-0">
          <LeftSidebar />
        </div>
        <div id="main-page-wrapper" className="main-page pad-x-10">
          <MainPage />
        </div>
      </div>
    </>
  );
}

export default App;
