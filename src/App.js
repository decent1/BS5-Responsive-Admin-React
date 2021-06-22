import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './assets/icons-1.5.0/font/bootstrap-icons.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/custom-css.css';
import './assets/css/list-groups.css';
import './App.css';
import TopNavbar from './components/TopNavbar/TopNavbar';
import MainPage from './components/MainPage/MainPage';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import { Route, Switch } from 'react-router-dom';
import Locations from './components/Inventory/Reference/Locations';
import Items from './components/Inventory/Reference/Items';
import Error from './components/Error';

function App() {
  return (
    <>
      <TopNavbar />
      <div id="wrapper" className="full-outer">
        <div id="sidebar" className="sidebar-margin float-left shads padx-10-0">
          <LeftSidebar />
        </div>
        <div id="main-page-wrapper" className="main-page pad-x-10">
          {/* <MainPage /> */}
          {/* <Locations />
          <Items /> */}

          <div className="container-fluid" style={{ paddingTop: '3px' }}>
            <Switch>
              <Route path="/" component={MainPage} exact />
              <Route path="/inventory/reference/locations" component={Locations} />
              <Route path="/inventory/reference/items" component={Items} />
              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
