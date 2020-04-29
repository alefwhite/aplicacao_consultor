function retornaUsuarioLogado() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    
    return usuario.nome;
}

export default retornaUsuarioLogado;
