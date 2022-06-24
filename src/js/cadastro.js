var btn1 = document.getElementById("usuario");
        var formulario = document.getElementById("demo");
        btn1.onclick = status
        var btn2 = document.getElementById("prestador");
        var formulario2 = document.getElementById("demo2");
        btn2.onclick = status2
        var btn3 = document.getElementById("empresa");
        var formulario3 = document.getElementById("demo3");
        btn3.onclick = status3
        var usuario = JSON.parse(bd).usuarios;
var prestador = JSON.parse(bd).prestadores;
        var conteudoHtml = "";
        var vUsuario = document.getElementById("verUsuario");
        vUsuario.onclick = listaDeUsuarios;
        var vPrestador = document.getElementById("verPrestador");
        vPrestador.onclick = listaDePrestadores;
        function status() {
            let section = document.getElementById("lista");
            conteudoHtml = "";
            section.innerHTML = "";
            
            if (btn1.getAttribute("aria-pressed") == "false") {
                btn2.setAttribute("aria-pressed", "false");
                btn3.setAttribute("aria-pressed", "false");
                btn1.setAttribute("aria-pressed", "true")
            }
            if (btn1.getAttribute("aria-pressed") == "true") {
                formulario2.setAttribute("style", "display: none");
                formulario3.setAttribute("style", "display: none");
                formulario.setAttribute("style", "display: block")
            }
        }
        function status2() {
            let section = document.getElementById("lista");
            conteudoHtml = "";
            section.innerHTML = "";
            
            if (btn2.getAttribute("aria-pressed") == "false") {
                btn1.setAttribute("aria-pressed", "false");
                btn3.setAttribute("aria-pressed", "false");
                btn2.setAttribute("aria-pressed", "true")
            }
            if (btn2.getAttribute("aria-pressed") == "true") {
                formulario.setAttribute("style", "display: none");
                formulario3.setAttribute("style", "display: none");
                formulario2.setAttribute("style", "display: block")
            }
        }
        function status3() {
            let section = document.getElementById("lista");
            conteudoHtml = "";
            section.innerHTML = "";
            
            if (btn3.getAttribute("aria-pressed") == "false") {
                btn2.setAttribute("aria-pressed", "false");
                btn1.setAttribute("aria-pressed", "false");
                btn3.setAttribute("aria-pressed", "true")
            }
            if (btn3.getAttribute("aria-pressed") == "true") {
                formulario2.setAttribute("style", "display: none");
                formulario.setAttribute("style", "display: none");
                formulario3.setAttribute("style", "display: block")
            }
        }

        function listaDeUsuarios() {
            let section = document.getElementById("lista");
            conteudoHtml = "";
            section.innerHTML = "";
            conteudoHtml += "<h2 aria-live='polite'> Lista de usuários cadastrados</h2>";
            conteudoHtml += "<p> total de usuário cadastrados: "+usuario.length+"</p>";
            conteudoHtml += "<ul>";

            for (var contador = 0; contador < usuario.length; contador++) {
                let dUsuario = usuario[contador];
                conteudoHtml += "<li>Nome: " + dUsuario.nome + ", e-mail: " + dUsuario.email + ", idade: " + dUsuario.idade + ", deficiência: " + dUsuario.deficiencia + "</li>";
            }
            conteudoHtml += "</ul>";
            section.innerHTML = conteudoHtml;
        }
    
        function listaDePrestadores() {
            let section = document.getElementById("lista");
            conteudoHtml = "";
            section.innerHTML = "";
            conteudoHtml += "<h2 aria-live='polite'> Lista de prestadores cadastrados</h2>";
            conteudoHtml += "<p> total de prestadores de serviços cadastrados: "+prestador.length+"</p>";
            conteudoHtml += "<ul>";

            for (var contador = 0; contador < prestador.length; contador++) {
                let dPrestador = prestador[contador];
                conteudoHtml += "<li> Nome: "+dPrestador.nome +", idade: "+dPrestador.idade+", serviço prestado: "+dPrestador.servico+", acessibilidade: "+dPrestador.acessibilidade+", email para contato: "+dPrestador.email+"</li>";
            }
            conteudoHtml += "</ul>";
            section.innerHTML = conteudoHtml;
        }
