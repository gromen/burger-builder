import './App.css';
import Layout from './components/Layout';   
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <Layout>
      <p>hello world</p>
      <BurgerBuilder />
    </Layout>
  );
}

export default App;