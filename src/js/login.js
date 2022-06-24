        var emeio = document.getElementById("email");
        var seguranca = document.getElementById("senha");
var envia = document.getElementById("enviar");
var usuario = JSON.parse(bd).usuarios;
var conteudoHtml = "";
var erro;
envia.onclick = registrado;
function registrado()   {
    let section = document.getElementById("logado");
conteudoHtml = "";
section.innerHTML = "";
    for(var contador = 0; contador < usuario.length; contador++) {
let dUsuario = usuario[contador];
if(emeio.value == dUsuario.email && seguranca.value == dUsuario.senha) {
    conteudoHtml += "<h3>Usuário: "+dUsuario.nome+"</h3>";
conteudoHtml += "<br>";
conteudoHtml += "<span>e-mail: "+dUsuario.email+"</span>";
conteudoHtml += "<br>";
conteudoHtml += "<span>idade: "+dUsuario.idade+"</span>";
conteudoHtml += "<br>";
conteudoHtml += "<span>deficiência: "+dUsuario.deficiencia+"</span>";
section.innerHTML = conteudoHtml;
break;
}
}

if(contador == usuario.length) {     
alert("usuário ou senha invalidos!");
} else {
    alert("usuário logado com sucesso!");
    }
}
    
