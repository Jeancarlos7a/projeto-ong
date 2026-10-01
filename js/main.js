import { gerarCardsProjetos } from "./modules/projetos.js";
import { configurarCadastro } from "./modules/cadastro.js";
import imagemVoluntarios from "../imagens/voluntarios.webp";

const conteudo = document.getElementById("conteudo");

const botaoContraste = document.getElementById("botaoContraste");

botaoContraste.addEventListener("click", function () {
    document.body.classList.toggle("alto-contraste");
});

const paginaInicio = `
    <section>
        <h2>Sobre a ONG</h2>
        <p>A ONG Solidariedade desenvolve ações sociais para ajudar pessoas da comunidade.</p>
<img src="${imagemVoluntarios}" alt="Voluntários participando de uma ação social" width="400">
    <section>
        <h2>Contato</h2>
        <p>E-mail: contato@ongsolidariedade.org</p>
        <p>Telefone: (41) 99999-9999</p>
    </section>
`;

const cardsProjetos = gerarCardsProjetos();

const paginaProjetos = `
    <section>
        <h2>Projetos Sociais</h2>

        <div class="alerta">
            As inscrições para voluntários estão abertas.
        </div>

<div class="cards">
    ${cardsProjetos}
</div>
        
    </section>

    <div class="toast" role="status">
        Projeto disponível para novos voluntários.
    </div>
`;

const paginaCadastro = `
    <section>
        <h2>Cadastro de Colaborador</h2>

        <form id="formCadastro">
            <fieldset>
                <legend>Dados do colaborador</legend>

                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required>

                <br><br>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required>

                <br><br>

                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00"
                    pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}" required>

                <br><br>

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000"
                    pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}" required>

                <br><br>

                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep" placeholder="00000-000" required>

                <br><br>

                <label for="participacao">Como deseja participar?</label>
                <select id="participacao" name="participacao" required>
                    <option value="">Selecione</option>
                    <option value="voluntario">Voluntário</option>
                    <option value="doador">Doador</option>
                </select>

                <br><br>

                <button type="submit">Enviar cadastro</button>
            </fieldset>
            <p id="mensagemCadastro"></p>
        </form>
    </section>
`;

function carregarPagina() {
    let pagina = window.location.hash;

    if (pagina === "#cadastro") {
        conteudo.innerHTML = paginaCadastro;
        configurarCadastro();
    }
    else if (pagina === "#projetos") {
        conteudo.innerHTML = paginaProjetos;

    }
    else if (pagina === "#inicio") {
        conteudo.innerHTML = paginaInicio;
    }

}
carregarPagina();
window.addEventListener("hashchange", carregarPagina);