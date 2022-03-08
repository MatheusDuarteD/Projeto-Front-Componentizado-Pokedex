import Layout from './components/layout/index';
import PokedexProvider from './providers/pokedex-provider';

function App() {
  return (
    <PokedexProvider>
      <Layout>
      </Layout>
    </PokedexProvider>
  );
}

export default App;



