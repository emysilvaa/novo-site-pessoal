import React from "react";

function Header({nome, ancora}){
    return(
        <a href={nome}><p>{ancora}</p></a>
    );
}





export default Header;