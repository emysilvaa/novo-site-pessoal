import React from "react";
import Perfil from "../images/hero-perfil.jpg";
import Praia from "../images/foto-praia.png";
import Serie from "../images/stranger.png";
import Borboleta from "../images/borboleta.png";
import SP from "../images/saobernardo.png";
import SuperCilio from "../images/supercilio.png";
import Anime from "../images/anime.png";

import PyGreen from "../images/pygreen.png";
import PyTech from "../images/pytech.png";
import Jogo from "../images/jogomemoria.png";






function Main (){
       
    function CardPortifolio({caminho, link, legenda }){
        return(
            <div className="cards-portifolio">
                <figure >
                    <img id='fotos-portifolio' src={caminho} ></img>
                    <figcaption>{legenda}</figcaption>
                    <button><a href={link} >Veja mais</a></button>
                </figure>
            </div>

        );
    }


    function CardsCuriosidades  ({caminho, legenda, descricao}) {
        return(
            <div className="cards-curiosidades">
                <figure>
                    <img id="fotos-curiosidades" src={caminho} alt={descricao} ></img>
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
                       <img id='foto-hero' src={Perfil} alt="foto do perfi"></img>
                    </div>
                </div>
            </section>

            <section id='sobre-mim'>
                <div className='container-sobre' >
                    <div id="foto-praia">
                        <img id='praia' src={Praia}></img>
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

                    <div className="container-cards-curiosidades">
                        <CardsCuriosidades caminho={Serie} descricao={'Capa de seriado: Stranger Things'}  legenda='  Minha série preferida é Stranger Things' /> 
                        <CardsCuriosidades caminho={SuperCilio} descricao={'Emilly após sofrer acidente'}  legenda='Abri o supercilio quando tinha 9 anos'/>
                        <CardsCuriosidades caminho={Anime} descricao={'personagem luffy'}  legenda='Meu anime favorito é One Piece'/>
                        <CardsCuriosidades caminho={Borboleta} descricao={'Borboleta'}  legenda='Tenho medo de borboletas'/>
                        <CardsCuriosidades caminho={SP} descricao={'Cidade de são paulo'}  legenda='Nasci em São Bernardo do Campo/SP'/>
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
                    <CardPortifolio caminho={PyGreen} link='https://github.com/PedroPegado/pygreen-site-react-teste' legenda='Jogo da Memória' />
                    <CardPortifolio caminho={PyTech} link='https://github.com/PedroAug91/PyTech' legenda='Projeto PyTech' />
                    <CardPortifolio caminho={Jogo} link='https://github.com/emysilvaa/Jogo-da-memoria' legenda='Jogo da Memória' />
                </div>
            </section>

      </main>
        
    );
}

export default Main;