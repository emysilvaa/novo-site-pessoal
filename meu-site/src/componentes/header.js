import React from "react";



function Header(){
    function Ancoras ({nome, ancora}){
        return(
            <a href={nome}><p>{ancora}</p></a>
    
    
        );
    }
    return(
        <header>
        <div className='container-navbar'>
          <a id="nome-pessoal" href='#hero' ><p>EE</p></a>
          <nav className='ancoras'>
          <Ancoras nome = '#sobre-mim' ancora ='Sobre mim'/>
          <Ancoras nome = '#curiosidades' ancora='Curiosidades' />
          <Ancoras nome = '#portifolio' ancora ='Projetos' />
          <Ancoras nome = '#contato' ancora ='Contato' />
          </nav>
        </div>
      </header>
    );
}


export default Header;