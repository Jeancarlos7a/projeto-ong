import { salvarCadastro, recuperarCadastro } from "./storage.js";

export function configurarCadastro() {
    const formulario = document.getElementById("formCadastro");

    const dados = recuperarCadastro();

    if (dados) {
        document.getElementById("nome").value = dados.nome;
        document.getElementById("email").value = dados.email;
        document.getElementById("cpf").value = dados.cpf;
        document.getElementById("telefone").value = dados.telefone;
        document.getElementById("cep").value = dados.cep;
        document.getElementById("participacao").value = dados.participacao;
    }
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const mensagem = document.getElementById("mensagemCadastro");

        if (formulario.checkValidity()) {
            const dadosCadastro = {
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                cpf: document.getElementById("cpf").value,
                telefone: document.getElementById("telefone").value,
                cep: document.getElementById("cep").value,
                participacao: document.getElementById("participacao").value
            };

            salvarCadastro(dadosCadastro);

            Swal.fire({
                title: "Sucesso!",
                text: "Cadastro enviado com sucesso!",
                icon: "success"
            });
        } else {
            mensagem.textContent = "Verifique os dados preenchidos.";
        }
    });
}