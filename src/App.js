import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import DashboardContainer from './DashboardContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>

     {/* <Dashboard /> */}
     <DashboardContainer />
    </div>
  );
}

export default App;
