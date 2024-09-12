import './App.css';
import Header from './componentes/header';
import Main from './componentes/main';
import Footer from './componentes/footer';

function App() {
  return (
    <div className="App">

      <header>
        <div className='container-navbar'>
          <a id="nome-pessoal" href='#hero' ><p>EE</p></a>
          <nav className='ancoras'>
          <Header nome = '#sobre-mim' ancora ='Sobre mim'/>
          <Header nome = '#curiosidades' ancora='Curiosidades' />
          <Header nome = '#portifolio' ancora ='Projetos' />
          <Header nome = '#contato' ancora ='Contato' />
          </nav>
        </div>
      </header>

      <main>
        <section id='hero'>
          <div className='container-hero'>
            <div className='me-conheca'>
              <h1>Emilly Estefanny</h1>
              <a href='#sobre-mim' id='button-me-conheca'>Conheça mais sobre mim</a>
            </div>
            <div className='foto-perfil'>
              <img id='foto-hero' src='.src/img/hero_perfil.jpg' ></img>
            </div>
        </div>
        </section>

        <section id='sobre-mim'>
          <div className='container_sobre' >
            <img src='.src/img/foto_praia.png'></img>
          </div>
          <div className='texto-sobre'>
            <h1>Sobre mim</h1>
            <p>Olá, meu nome é Emilly Estefanny tenho 19 anos e moro em Ceará-Mirim, Rio Grande do Norte. Gosto de cozinhar, desenhar e criar design. Meu sonho é conseguir ter uma vida maneira e viajar por vários lugares legais.</p>
          </div>
        </section>


      </main>

      
      
      <Footer></Footer>
    </div>
  );
}

export default App;
