        var restbar = document.getElementById("restaurantebar");
        restbar.onclick = muda;
        var mostra = document.getElementById("resultados");
        var btnMenu = document.getElementById("botao1");
        btnMenu.onclick = exibe;
        var dive = document.getElementById("menu");
        var restaurante = JSON.parse(bd).restaurantes;
        var clinica = JSON.parse(bd).clinicas;
        var clinicaM = document.getElementById("clinicasmedica");
        clinicaM.onclick = muda3;
        var loja = JSON.parse(bd).lojas;
        var lojaRoup = document.getElementById("lojasRoupa");
        lojaRoup.onclick = muda2;
        var hotel = JSON.parse(bd).hoteis;
        var hotelH = document.getElementById("hotelHT");
hotelH.onclick = muda4;
        var conteudoHtml = "";

        function exibe() {
            if (btnMenu.getAttribute("aria-expanded") == "false") {
                btnMenu.setAttribute("aria-expanded", "true");
                dive.setAttribute("style", "display: block");
            }
            else if (btnMenu.getAttribute("aria-expanded") == "true") {
                dive.setAttribute("style", "display: none");
                btnMenu.setAttribute("aria-expanded", "false");
            }
        }

        function muda() {
            mostra.setAttribute("style", "display: none");
            let section = document.getElementById("conteudo");

            section.innerHTML = "";
            conteudoHtml = "";

            for (let contador = 0; contador < restaurante.length; contador++) {
                let estabelecimento = restaurante[contador];
                conteudoHtml += "<h3 aria-live='polite'>" + estabelecimento.nome + "</h3>";
                conteudoHtml += "<p>" + estabelecimento.informacoes + "</p>";
                conteudoHtml += "<img src='" + estabelecimento.imagem + "' alt='Faxada do Restaurante'>";
                conteudoHtml += "<br>";
                conteudoHtml += "<span> Categoria: " + estabelecimento.categoria + "</span>";
                conteudoHtml += "<br>";
                conteudoHtml += "<span>Acessibilidades do local: " + estabelecimento.acessibilidade + "</span>";
                conteudoHtml += "<br>";
                conteudoHtml += "<span>Nota: " + estabelecimento.nota + "</span>";
                conteudoHtml += "<br>";
                conteudoHtml += "<label for='favorito" + (contador) + "'>Favoritar</label>";
                conteudoHtml += "<input type='checkbox' id='favorito" + (contador) + "'>";

            }
            section.innerHTML = conteudoHtml;
        }


        function muda2() {
            mostra.setAttribute("style", "display: none");
            let section = document.getElementById("conteudo");

            section.innerHTML = "";
            conteudoHtml = "";

            for (let contador = 0; contador < loja.length; contador++) {
                let estabelecimento = loja[contador];
                conteudoHtml += "<h3 aria-live='polite'>" + estabelecimento.nome + "</h3>";
                conteudoHtml += "<p>" + estabelecimento.informacoes + "</p>";
                conteudoHtml += "<img src='" + estabelecimento.imagem + "' alt='Faxada do loja'>";
                conteudoHtml += "<br>";
                conteudoHtml += "<span> Categoria: " + estabelecimento.categoria + "</span>";
                conteudoHtml += "<br>";
                conteudoHtml += "<span>Acessibilidades do local: " + estabelecimento.acessibilidade + "</span>";
                conteudoHtml += "<br>";
                conteudoHtml += "<span>Nota: " + estabelecimento.nota + "</span>";
                conteudoHtml += "<br>";
                conteudoHtml += "<label for='favorito" + (contador) + "'>Favoritar</label>";
                conteudoHtml += "<input type='checkbox' id='favorito" + (contador) + "'>";

            }
            section.innerHTML = conteudoHtml;
        }
        function muda3() {
            mostra.setAttribute("style", "display: none");
            let section = document.getElementById("conteudo");

            section.innerHTML = "";
            conteudoHtml = "";

            for (let contador = 0; contador < clinica.length; contador++) {
                let estabelecimento = clinica[contador];
                conteudoHtml += "<h3 aria-live='polite'>" + estabelecimento.nome + "</h3>";
                conteudoHtml += "<p>" + estabelecimento.informacoes + "</p>";
                conteudoHtml += "<img src='" + estabelecimento.imagem + "' alt='Faxada da Clinica'>";
                conteudoHtml += "<br>";
                conteudoHtml += "<span> Categoria: " + estabelecimento.categoria + "</span>";
                conteudoHtml += "<br>";
                conteudoHtml += "<span>Acessibilidades do local: " + estabelecimento.acessibilidade + "</span>";
                conteudoHtml += "<br>";
                conteudoHtml += "<span>Nota: " + estabelecimento.nota + "</span>";
                conteudoHtml += "<br>";
                conteudoHtml += "<label for='favorito" + (contador) + "'>Favoritar</label>";
                conteudoHtml += "<input type='checkbox' id='favorito" + (contador) + "'>";

            }
            section.innerHTML = conteudoHtml;
        }

        function muda4() {
            mostra.setAttribute("style", "display: none");
            let section = document.getElementById("conteudo");

            section.innerHTML = "";
            conteudoHtml = "";

            for (let contador = 0; contador < hotel.length; contador++) {
                let estabelecimento = hotel[contador];
                conteudoHtml += "<h3 aria-live='polite'>" + estabelecimento.nome + "</h3>";
                conteudoHtml += "<p>" + estabelecimento.informacoes + "</p>";
                conteudoHtml += "<img src='" + estabelecimento.imagem + "' alt='Faxada do Hotel'>";
                conteudoHtml += "<br>";
                conteudoHtml += "<span> Categoria: " + estabelecimento.categoria + "</span>";
                conteudoHtml += "<br>";
                conteudoHtml += "<span>Acessibilidades do local: " + estabelecimento.acessibilidade + "</span>";
                conteudoHtml += "<br>";
                conteudoHtml += "<span>Nota: " + estabelecimento.nota + "</span>";
                conteudoHtml += "<br>";
                conteudoHtml += "<label for='favorito" + (contador) + "'>Favoritar</label>";
                conteudoHtml += "<input type='checkbox' id='favorito" + (contador) + "'>";

            }
            section.innerHTML = conteudoHtml;
        }

