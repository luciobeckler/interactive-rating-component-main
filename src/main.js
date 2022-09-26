let ratings = document.querySelectorAll(".circle");
let button = document.querySelector(".submit");
let mainBox = document.querySelector(".mainBox");
let number = document.querySelector(".number");
let thanksBox = document.querySelector(".thanksBox");


for (let i = 0; i < ratings.length; i++) {
      ratings[i].addEventListener('click', function () {  /* Escuta os circles a procura de um clique e aplica a função ao lado quando ocorre */
            let rattingScore = ratings[i].innerHTML;     /* Captura o valor correspondente ao botão clicado */

            for (let i = 0; i < ratings.length; i++) {         /*Sempre que ocorre um novo clique este for realoca a classe 'selectedCircle' */
                  ratings[i].classList.remove('selectedCircle')
            }
            ratings[i].classList.add('selectedCircle');

            button.addEventListener('click', function () {  /* Escuta o botão submit e aplica a função ao lado quando houver um clique */
                  mainBox.style.display = 'none';     /* Altera o parâmetro display dos elementos mainBox e thanksBox */
                  thanksBox.style.display = 'flex';
                  number.innerHTML = rattingScore;
            });

            thanksBox.addEventListener('click', function () {
                  mainBox.style.display = 'flex';
                  thanksBox.style.display = 'none';
            })
      })
}