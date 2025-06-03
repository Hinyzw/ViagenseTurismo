import Header from './components/Header';
import Footer from './components/Footer';
import CityCard from './components/CityCard';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1>Descubra as Cidades Mais Incríveis do Mundo</h1>
            <p>Explore destinos urbanos fascinantes e planeje sua próxima aventura</p>
            
            <div className="search-bar">
              <input type="text" placeholder="Pesquisar cidades..." />
              <button>Buscar</button>
            </div>
          </div>
        </section>
        
        <section className="featured-cities">
          <h2>Cidades em Destaque</h2>
          <div className="cities-grid">
            <CityCard 
              name="Rio de Janeiro" 
              image="https://images.unsplash.com/photo-1483729558449-99ef09a8c325" 
              description="Cidade maravilhosa com praias deslumbrantes e o Cristo Redentor."
              featured={true}
            />
            <CityCard 
              name="Paris" 
              image="https://images.unsplash.com/photo-1431274172761-fca41d930114" 
              description="Cidade luz, famosa pela Torre Eiffel e pela cultura rica."
            />
            <CityCard 
              name="Tóquio" 
              image="https://images.unsplash.com/photo-1542051841857-5f90071e7989" 
              description="Metrópole futurista que mistura tradição e tecnologia."
              featured={true}
            />
            <CityCard 
              name="Nova York" 
              image="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9" 
              description="A cidade que nunca dorme, cheia de energia e diversidade."
            />
            <CityCard 
              name="Dubai" 
              image="https://images.unsplash.com/photo-1518684079-3c830dcef090" 
              description="Oásis moderno no deserto com arranha-céus impressionantes."
              featured={true}
            />
            <CityCard 
              name="Londres" 
              image="https://picsum.photos/id/1011/800/600" 
              description="A capital inglesa, repleta de história, cultura e ícones como o Big Ben."
            />
            <CityCard 
              name="Barcelona" 
              image="https://picsum.photos/id/1016/800/600" 
              description="Cidade vibrante da Espanha, famosa por suas praias, arquitetura de Gaudí e culinária."
            />
            <CityCard 
              name="Sydney" 
              image="https://picsum.photos/id/1043/800/600" 
              description="Cidade australiana conhecida por sua icônica Ópera e belas praias."
            />
            <CityCard 
              name="Los Angeles" 
              image="https://picsum.photos/id/1050/800/600" 
              description="Meca do entretenimento, lar da indústria cinematográfica e das praias deslumbrantes."
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
