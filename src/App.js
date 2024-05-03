import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { Header } from './pages';
import { Footer } from './pages';
function App() {
  return (
    <div className="App">
    <Header/>
      <AllRoutes/>
     <Footer/> 
    </div>
  );
}

export default App;
