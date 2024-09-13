import React from "react";

function Main (){
    function Cards({caminho, numero, legenda}){
        return(
            <div className="cards-curiosidades">
                <figure>
                    <img src={caminho} ></img>
                    <div className="num-curiosidades">
                        <h1>{numero}</h1>
                    </div>
                    <figcaption>{legenda}</figcaption>
                </figure>

            </div>

        );
    }
       
    return(
        <main>
            <section id='hero'>
                <div className='container-hero'>
                    <div className='me-conheca'>
                    <h1>Emilly Estefanny</h1>
                    <a href='#sobre-mim' id='button-me-conheca'>Conheça mais sobre mim</a>
                    </div>
                    <div className='foto-perfil'>
                    <img id='foto-hero' src='./img/hero_perfil.jpg' ></img>
                    </div>
                </div>
            </section>

            <section id='sobre-mim'>
                <div className='container-sobre' >
                    <div id="foto-praia">
                        <img src='src/img/perfil.jpg'></img>
                    </div>
                    <div className='texto-sobre'>
                        <h1>Sobre mim</h1>
                        <p>Olá, meu nome é Emilly Estefanny tenho 19 anos e moro em Ceará-Mirim, Rio Grande do Norte. Gosto de cozinhar, desenhar e criar design. Meu sonho é conseguir ter uma vida maneira e viajar por vários lugares legais.</p>
                    </div>
                </div>


            </section>

            <section id="curiosidades">
                <div className="container-curiosidades" >
                    <div  className="num-cinco" >
                        <div id="cinco">
                            <h1>5</h1>
                        </div>

                        <div id="titulo-curiosidades">
                            <h1>Curiosidades sobre mim</h1>
                        </div>
                    </div>

                    <div className="container-cards">
                        <Cards caminho='./img/stranger.png' numero='1' legenda='Minha série preferida é Stranger Things'      />

                    </div>
                    

                </div>

            </section>


      </main>
        
    );
}

export default Main;