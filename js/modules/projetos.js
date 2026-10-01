const projetos = [
    {
        titulo: "Arrecadação de Alimentos",
        status: "Ativo",
        descricao: "Arrecadação e distribuição de alimentos para famílias da comunidade."
    },
    {
        titulo: "Apoio à Comunidade",
        status: "Ativo",
        descricao: "Ações de apoio para pessoas em situação de vulnerabilidade."
    }
];

export function gerarCardsProjetos() {
    return projetos.map(function (projeto) {
        return `
            <article class="card">
                <h3>${projeto.titulo}</h3>
                <span class="badge">${projeto.status}</span>
                <p>${projeto.descricao}</p>
            </article>
        `;
    }).join("");
}