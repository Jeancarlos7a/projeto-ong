var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(){return r.map(function(e){return`
            <article class="card">
                <h3>${e.titulo}</h3>
                <span class="badge">${e.status}</span>
                <p>${e.descricao}</p>
            </article>
        `}).join(``)}var r,i=e((()=>{r=[{titulo:`Arrecadação de Alimentos`,status:`Ativo`,descricao:`Arrecadação e distribuição de alimentos para famílias da comunidade.`},{titulo:`Apoio à Comunidade`,status:`Ativo`,descricao:`Ações de apoio para pessoas em situação de vulnerabilidade.`}]}));function a(e){localStorage.setItem(`cadastro`,JSON.stringify(e))}function o(){let e=localStorage.getItem(`cadastro`);return e?JSON.parse(e):null}var s=e((()=>{}));function c(){let e=document.getElementById(`formCadastro`),t=o();t&&(document.getElementById(`nome`).value=t.nome,document.getElementById(`email`).value=t.email,document.getElementById(`cpf`).value=t.cpf,document.getElementById(`telefone`).value=t.telefone,document.getElementById(`cep`).value=t.cep,document.getElementById(`participacao`).value=t.participacao),e.addEventListener(`submit`,function(t){t.preventDefault();let n=document.getElementById(`mensagemCadastro`);e.checkValidity()?(a({nome:document.getElementById(`nome`).value,email:document.getElementById(`email`).value,cpf:document.getElementById(`cpf`).value,telefone:document.getElementById(`telefone`).value,cep:document.getElementById(`cep`).value,participacao:document.getElementById(`participacao`).value}),Swal.fire({title:`Sucesso!`,text:`Cadastro enviado com sucesso!`,icon:`success`})):n.textContent=`Verifique os dados preenchidos.`})}var l=e((()=>{s()})),u,d=e((()=>{u=`/assets/voluntarios-Epwy97l2.webp`}));t((()=>{i(),l(),d();var e=document.getElementById(`conteudo`);document.getElementById(`botaoContraste`).addEventListener(`click`,function(){document.body.classList.toggle(`alto-contraste`)});var t=`
    <section>
        <h2>Sobre a ONG</h2>
        <p>A ONG Solidariedade desenvolve ações sociais para ajudar pessoas da comunidade.</p>
<img src="${u}" alt="Voluntários participando de uma ação social" width="400">
    <section>
        <h2>Contato</h2>
        <p>E-mail: contato@ongsolidariedade.org</p>
        <p>Telefone: (41) 99999-9999</p>
    </section>
`,r=`
    <section>
        <h2>Projetos Sociais</h2>

        <div class="alerta">
            As inscrições para voluntários estão abertas.
        </div>

<div class="cards">
    ${n()}
</div>
        
    </section>

    <div class="toast" role="status">
        Projeto disponível para novos voluntários.
    </div>
`,a=`
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
                    pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" required>

                <br><br>

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000"
                    pattern="([0-9]{2}) [0-9]{5}-[0-9]{4}" required>

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
`;function o(){let n=window.location.hash;n===`#cadastro`?(e.innerHTML=a,c()):n===`#projetos`?e.innerHTML=r:n===`#inicio`&&(e.innerHTML=t)}o(),window.addEventListener(`hashchange`,o)}))();