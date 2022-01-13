let formOk = false;


function validaNome() {

    let conteudo = document.querySelector('#nome').value;
    if (conteudo.length <= 3) {
        console.log("Tamanho de texto insuficiente!")
        formOk = false;

        if (document.querySelector('#validacao-nome'))
            document.querySelector('#validacao-nome').style.display = 'none';

    } else {


        document.querySelector('#validaNome').innerHTML = '<p class="validacao-ok" id="validacao-nome">Nome Válido</p>'
        document.querySelector('#validacao-nome').style.display = 'inline-block';
        formOk = true;
    }
}

function limpaMsgNome() {
    if (document.querySelector('#validacao-nome'))
        document.querySelector('#validacao-nome').style.display = 'none';
}

function validaEmail() {

    let conteudo = document.querySelector('#email').value;
    let regex = /\S+@\S+\.\S+/;
    if (regex.test(conteudo)) {
        if (document.querySelector('#validacao-email'))
            document.querySelector('#validacao-email').style.display = 'none'

        console.log("Ok")
        formOk = true;
    } else {
        document.querySelector('#validaEmail').innerHTML = '<p class="validacao-negada" id="validacao-email">Email Inválido</p>'
        document.querySelector('#validacao-email').style.display = 'inline-block'
        formOk = false;
    }


}

function validaMensagem() {

    let conteudo = document.querySelector('#mensagem').value;
    if (conteudo.length >= 100) {

        document.querySelector('#validaMensagem').innerHTML = '<p class="validacao-negada" id="validacao-mensagem">Texto muito longo... Por favor mantenha seu texto dentro do limite de 100 caracteres</p>'

        document.querySelector('#validacao-mensagem').style.display = 'inline-block';

        formOk = false;
    } else {
        console.log("Tamanho de texto Ok!")

        if (document.querySelector('#validacao-mensagem'))
            document.querySelector('#validacao-mensagem').style.display = 'none';

        formOk = true;
    }
}

function validaForm() {
    console.log('enviou')
    if (formOk == true) {
        alert('Sua mensagem foi enviada com sucesso')
    } else {
        alert('Um ou mais campos estão preenchidos de forma incorreta. Favor fazer as alterações e reenviar o formulário')
    }

}