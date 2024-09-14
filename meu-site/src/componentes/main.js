import React from "react";

function Main (){
    function Images({caminho}){
        return(
            <img src={caminho}></img>

        );

    }
        
    function CardPortifolio({caminho, link, legenda }){
        return(
            <div className="cards-portifolio">
                <figure >
                    <img src={caminho}></img>
                    <a href={link}><figcaption>{legenda}</figcaption></a>
                </figure>
            </div>

        );
    }


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
                       <img src="./img/hero_perfil.jpg" ></img>
                    </div>
                </div>
            </section>

            <section id='sobre-mim'>
                <div className='container-sobre' >
                    <div id="foto-praia">
                        <img src="./img/foto_praia.png" ></img>
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
                        <Cards caminho='./img/stranger.png' numero='1' legenda='Minha série preferida é Stranger Things'/>
                        <Cards caminho='./img/supercilio.png' numero='2' legenda='Abri o supercilio quando tinha 9 anos'/>
                        <Cards caminho='./img/Rectangle 18.png' numero='3' legenda='Meu anime favorito é One Piece'/>
                        <Cards caminho='./img/borboleta.png' numero='4' legenda='Tenho medo de borboletas'/>
                        <Cards caminho='./img/saobernardo.png' numero='5' legenda='Nasci em São Bernardo do Campo/SP'/>
                    </div>
                </div>
            </section>

            <section id="portifolio">
                <div className="container-portifolio">
                    <div id="titulo-portifolio">
                        <h1>Meus Projetos</h1>
                    </div>
                </div>

            <div className="container-cards-portifolio">
                <div className="cards-portifolio" >
                    
                    <CardPortifolio caminho='' link='' legenda='' />
                    <CardPortifolio caminho='' link='' legenda='' />
                    <CardPortifolio caminho='' link='' legenda='' />

                    
                </div>

            </div>

            </section>

      </main>
        
    );
}

export default Main;