export function salvarCadastro(dados) {
    localStorage.setItem("cadastro", JSON.stringify(dados));
}

export function recuperarCadastro() {
    const cadastroSalvo = localStorage.getItem("cadastro");

    if (cadastroSalvo) {
        return JSON.parse(cadastroSalvo);
    }

    return null;
}

