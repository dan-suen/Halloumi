import './App.scss';
import Messaging from "../components/messaging/messaging"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Halloumi</h1>
        <Messaging/>
      </header>
    </div>
  );
}

export default App;
