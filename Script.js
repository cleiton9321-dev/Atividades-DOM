// ATIVIDADE 1

const nome = document.querySelector("#nome01");

const botao = document.querySelector("#btn01");

const resultado = document.querySelector("#resultado01");

botao.addEventListener("click", function() {


    const nomeDigitado = nome.value;

    resultado.textContent =
        `Olá, ${nomeDigitado}! Seja bem-vindo ao SENAI!`;

});

// ATIVIDADE 2

const titulo02 = document.querySelector("#titulo02");

const botao02 = document.querySelector("#btn02");

botao02.addEventListener("click", function(){
    titulo02.textContent = "Desenvolvimento de Sistemas — SENAI";
    titulo02.style.color = "yellow";
})

// ATIVIDADE 3

const botao03 = document.querySelector("#btn03");

const contador03 = document.querySelector("#contador03");

botao03.addEventListener("click", function(){

    let valorAtual = parseInt(contador03.textContent.replace("Cliques: ", ""));

    valorAtual++;

    contador03.textContent = "Cliques: " + valorAtual;

});

// ATIVIDADE 4

const status04 = document.querySelector("#status04");

const botao04 = document.querySelector("#btn04");

botao04.addEventListener("click", function(){
    status04.textContent = "Status: Atendimento aberto";
    status04.style.color = "green";
    status04.style.fontWeight = "bold";
});

// ATIVIDADE 5

const produto05 = document.querySelector("#produto05");

const quantidade05 = document.querySelector("#quantidade05");

const preco05 = document.querySelector("#preco05");

const botao05 = document.querySelector("#btn05");

const resultado05 = document.querySelector("#resultado05");

botao05.addEventListener("click", function(){

    let produto = produto05.value;
    let quantidade = Number(quantidade05.value);
    let preco = Number(preco05.value);

    let total = quantidade * preco;

    resultado05.textContent = `Total  - ${produto}: R$ ${total.toFixed(2)}`;

});

// ATIVIDADE 6

const nota01_06 = document.querySelector("#nota01_06");

const nota02_06 = document.querySelector("#nota02_06"); 

const nota03_06 = document.querySelector("#nota03_06");

const botao06 = document.querySelector("#btn06");

const resultado06 = document.querySelector("#resultado06");

botao06.addEventListener("click", function(){
    let nota1 = Number(nota01_06.value);
    let nota2 = Number(nota02_06.value);
    let nota3 = Number(nota03_06.value);
    let media = (nota1 + nota2 + nota3) / 3;
    resultado06.textContent = `Média: ${media.toFixed(2)}`;

    if(media >= 6){
        resultado06.textContent += " - Aprovado";
        resultado06.style.color = "green";
    }else{
        resultado06.textContent += " - Reprovado";
        resultado06.style.color = "red";
    }
});

// ATIVIDADE 7

const nome07 = document.querySelector("#nome07");

const email07 = document.querySelector("#email07");

const senha07 = document.querySelector("#senha07");

const botao07 = document.querySelector("#btn07");

const resultado07 = document.querySelector("#resultado07");

botao07.addEventListener("click", function(){
    let nome = nome07.value;
    let email = email07.value;
    let senha = senha07.value;

    if(nome === "" || email === "" || senha === ""){
        resultado07.textContent = "Preencha todos os campos!";
        resultado07.style.color = "red";
    }else{
        resultado07.textContent = "Cadastro realizado com sucesso!";
        resultado07.style.color = "green";
    }
});

// ATIVIDADE 8

const produto08 = document.querySelector("#produto08");

const disponivel08 = document.querySelector("#disponivel08");

const solicitada08 = document.querySelector("#solicitada08");

const botao08 = document.querySelector("#btn08");

const resultado08 = document.querySelector("#resultado08");

botao08.addEventListener("click", function(){
    let produto = produto08.value;
    let disponivel = Number(disponivel08.value);
    let solicitada = Number(solicitada08.value);
    if(solicitada <= disponivel){
        resultado08.textContent = `Pedido de ${solicitada} unidades do produto ${produto} realizado com sucesso!`;
        resultado08.style.color = "green";
    }else{
        resultado08.textContent = `Pedido de ${solicitada} unidades do produto ${produto} não pode ser realizado. Estoque insuficiente!`;
        resultado08.style.color = "red";
    }
});

// ATIVIDADE 9

const tarefa09 = document.querySelector("#tarefa09");

const botao09 = document.querySelector("#btn09");

const lista09 = document.querySelector("#lista09");

botao09.addEventListener("click", function(){
    let tarefa = tarefa09.value;
    if(tarefa !== ""){
        let item = document.createElement("li");
        item.textContent = tarefa;
        lista09.appendChild(item);
        tarefa09.value = "";
    }
});

// ATIVIDADE 10

const produto10 = document.querySelector("#produto10");

const preco10 = document.querySelector("#preco10");

const desconto10 = document.querySelector("#desconto10");

const botao10 = document.querySelector("#btn10");

const resultado10 = document.querySelector("#resultado10");

botao10.addEventListener("click", function(){
    let produto = produto10.value;
    let preco = Number(preco10.value);
    let desconto = Number(desconto10.value);
    let valorDesconto = preco * (desconto / 100);
    let precoFinal = preco - valorDesconto;
    resultado10.textContent =  `Produto: ${produto} | Desconto: R$ ${valorDesconto.toFixed(2)} | Total: R$ ${precoFinal.toFixed(2)}`;
});

// ATIVIDADE 11

const formulario11 = document.querySelector("#formulario11");

const usuario11 = document.querySelector("#usuario11");

const senha11 = document.querySelector("#senha11");

const botao11 = document.querySelector("#btn11");

const resultado11 = document.querySelector("#resultado11");

const areaLogada11 = document.querySelector("#areaLogada11");

botao11.addEventListener("click", function(){
    let usuario = "aluno";
    let senha = "1234";
    if(usuario11.value === usuario && senha11.value === senha){
        resultado11.textContent = "Login realizado com sucesso!";
        resultado11.style.color = "green";
        areaLogada11.style.display = "block";
        formulario11.style.display = "none";
    }else{
        resultado11.textContent = "Usuário ou senha incorretos!";
        resultado11.style.color = "red";
        areaLogada11.style.display = "none";
        formulario11.style.display = "block";
    }
});

// ATIVIDADE 12

const botoes12 = document.querySelectorAll(".btnAdicionar12");
const carrinho12 = document.querySelector("#carrinho12");
const quantidade12 = document.querySelector("#quantidade12");
const total12 = document.querySelector("#total12");

let itens12 = [];

botoes12.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const nome = botao.dataset.produto;
        const preco = Number(botao.dataset.preco);

        itens12.push({ nome: nome, preco: preco });
        renderizarCarrinho12();
    });
});

function renderizarCarrinho12() {
    carrinho12.innerHTML = "";

    let total = 0;

    itens12.forEach(function (item, index) {
        const li = document.createElement("li");
        li.textContent = `${item.nome} — R$ ${item.preco.toFixed(2)}`;

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.style.marginLeft = "10px";
        btnRemover.addEventListener("click", function () {
            itens12.splice(index, 1);
            renderizarCarrinho12();
        });

        li.appendChild(btnRemover);
        carrinho12.appendChild(li);

        total += item.preco;
    });

    quantidade12.textContent = itens12.length;
    total12.textContent = `R$ ${total.toFixed(2)}`;
}

// ATIVIDADE 13

const nome13 = document.querySelector("#nome13");
const idade13 = document.querySelector("#idade13");
const curso13 = document.querySelector("#curso13");
const btn13 = document.querySelector("#btn13");
const tabela13 = document.querySelector("#tabela13");

let alunos13 = [];

btn13.addEventListener("click", function () {
    const nome = nome13.value.trim();
    const idade = Number(idade13.value);
    const curso = curso13.value.trim();

    if (nome === "" || curso === "" || isNaN(idade) || idade <= 0) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    alunos13.push({ nome: nome, idade: idade, curso: curso });

    nome13.value = "";
    idade13.value = "";
    curso13.value = "";

    renderizarAlunos13();
});

function renderizarAlunos13() {
    tabela13.innerHTML = "";

    alunos13.forEach(function (aluno, index) {
        const tr = document.createElement("tr");

        const tdNome = document.createElement("td");
        tdNome.textContent = aluno.nome;

        const tdIdade = document.createElement("td");
        tdIdade.textContent = aluno.idade;

        const tdCurso = document.createElement("td");
        tdCurso.textContent = aluno.curso;

        const tdAcao = document.createElement("td");
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.addEventListener("click", function () {
            alunos13.splice(index, 1);
            renderizarAlunos13();
        });
        tdAcao.appendChild(btnExcluir);

        tr.appendChild(tdNome);
        tr.appendChild(tdIdade);
        tr.appendChild(tdCurso);
        tr.appendChild(tdAcao);

        tabela13.appendChild(tr);
    });
}
// ATIVIDADE 14

const produto14 = document.querySelector("#produto14");
const quantidade14 = document.querySelector("#quantidade14");
const valor14 = document.querySelector("#valor14");
const btn14 = document.querySelector("#btn14");
const pesquisa14 = document.querySelector("#pesquisa14");
const tabela14 = document.querySelector("#tabela14");
const faturamento14 = document.querySelector("#faturamento14");
const itens14 = document.querySelector("#itens14");
const vendas14 = document.querySelector("#vendas14");

let listaVendas14 = [];

btn14.addEventListener("click", function () {
    const produto = produto14.value.trim();
    const quantidade = Number(quantidade14.value);
    const valor = Number(valor14.value);

    if (produto === "" || quantidade <= 0 || valor <= 0) {
        alert("Preencha os campos corretamente!");
        return;
    }

    listaVendas14.push({ produto: produto, quantidade: quantidade, valor: valor });

    produto14.value = "";
    quantidade14.value = "";
    valor14.value = "";

    renderizarVendas14();
});

pesquisa14.addEventListener("input", function () {
    renderizarVendas14();
});

function renderizarVendas14() {
    tabela14.innerHTML = "";

    const filtro = pesquisa14.value.toLowerCase();
    const vendasFiltradas = listaVendas14.filter(function (venda) {
        return venda.produto.toLowerCase().includes(filtro);
    });

    let faturamentoTotal = 0;
    let itensTotais = 0;

    vendasFiltradas.forEach(function (venda) {
        const total = venda.quantidade * venda.valor;

        faturamentoTotal += total;
        itensTotais += venda.quantidade;

        const tr = document.createElement("tr");

        const tdProduto = document.createElement("td");
        tdProduto.textContent = venda.produto;

        const tdQtd = document.createElement("td");
        tdQtd.textContent = venda.quantidade;

        const tdValor = document.createElement("td");
        tdValor.textContent = `R$ ${venda.valor.toFixed(2)}`;

        const tdTotal = document.createElement("td");
        tdTotal.textContent = `R$ ${total.toFixed(2)}`;

        tr.appendChild(tdProduto);
        tr.appendChild(tdQtd);
        tr.appendChild(tdValor);
        tr.appendChild(tdTotal);

        tabela14.appendChild(tr);
    });

    faturamento14.textContent = `R$ ${faturamentoTotal.toFixed(2)}`;
    itens14.textContent = itensTotais;
    vendas14.textContent = vendasFiltradas.length;
}
// ATIVIDADE 15

const nome15 = document.querySelector("#nome15");
const ra15 = document.querySelector("#ra15");
const curso15 = document.querySelector("#curso15");
const nota01_15 = document.querySelector("#nota01_15");
const nota02_15 = document.querySelector("#nota02_15");
const btn15 = document.querySelector("#btn15");
const pesquisa15 = document.querySelector("#pesquisa15");
const tabela15 = document.querySelector("#tabela15");
const contadorAlunos15 = document.querySelector("#contadorAlunos15");
const contadorAprovados15 = document.querySelector("#contadorAprovados15");
const contadorReprovados15 = document.querySelector("#contadorReprovados15");

let alunos15 = [];

btn15.addEventListener("click", function () {
    const nome = nome15.value.trim();
    const ra = ra15.value.trim();
    const curso = curso15.value.trim();
    const nota1 = Number(nota01_15.value);
    const nota2 = Number(nota02_15.value);

    if (nome === "" || ra === "" || curso === "" ||
        isNaN(nota1) || isNaN(nota2)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    const media = (nota1 + nota2) / 2;

    let situacao;
    if (media >= 6) {
        situacao = "Aprovado";
    } else if (media >= 4) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    alunos15.push({
        nome: nome,
        ra: ra,
        curso: curso,
        media: media,
        situacao: situacao
    });

    nome15.value = "";
    ra15.value = "";
    curso15.value = "";
    nota01_15.value = "";
    nota02_15.value = "";

    renderizarAlunos15();
});

pesquisa15.addEventListener("input", function () {
    renderizarAlunos15();
});

function renderizarAlunos15() {
    tabela15.innerHTML = "";

    const filtro = pesquisa15.value.toLowerCase();
    const alunosFiltrados = alunos15.filter(function (aluno) {
        return aluno.nome.toLowerCase().includes(filtro);
    });

    let totalAlunos = 0;
    let aprovados = 0;
    let reprovados = 0;

    alunosFiltrados.forEach(function (aluno, index) {
        totalAlunos++;

        if (aluno.situacao === "Aprovado") {
            aprovados++;
        } else if (aluno.situacao === "Reprovado") {
            reprovados++;
        }

        const tr = document.createElement("tr");

        const tdNome = document.createElement("td");
        tdNome.textContent = aluno.nome;

        const tdRa = document.createElement("td");
        tdRa.textContent = aluno.ra;

        const tdCurso = document.createElement("td");
        tdCurso.textContent = aluno.curso;

        const tdMedia = document.createElement("td");
        tdMedia.textContent = aluno.media.toFixed(1);

        const tdSituacao = document.createElement("td");
        tdSituacao.textContent = aluno.situacao;

        if (aluno.situacao === "Aprovado") {
            tdSituacao.style.color = "green";
        } else if (aluno.situacao === "Recuperação") {
            tdSituacao.style.color = "orange";
        } else {
            tdSituacao.style.color = "red";
        }

        const tdAcao = document.createElement("td");
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.addEventListener("click", function () {
            const indiceReal = alunos15.indexOf(aluno);
            alunos15.splice(indiceReal, 1);
            renderizarAlunos15();
        });
        tdAcao.appendChild(btnExcluir);

        tr.appendChild(tdNome);
        tr.appendChild(tdRa);
        tr.appendChild(tdCurso);
        tr.appendChild(tdMedia);
        tr.appendChild(tdSituacao);
        tr.appendChild(tdAcao);

        tabela15.appendChild(tr);
    });

    contadorAlunos15.textContent = totalAlunos;
    contadorAprovados15.textContent = aprovados;
    contadorReprovados15.textContent = reprovados;
}