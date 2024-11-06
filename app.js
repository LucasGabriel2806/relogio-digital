/** Variáveis */
let horario = document.getElementById("horario");

function atualizarRelogio() {
  
  /** Pegando horas, minutos e segundos e colocando em uma variável */
  let data = new Date();
  let horas = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();

  /** Acresentando o 0 as horas, minutos e segundos que não possuem.
   *  Ex: 5 será 05
   */
  if (horas < 10) {
    horas = '0' + horas;
  }

  if (minutos < 10) {
    minutos = '0' + minutos;
  }

  if (segundos < 10) {
    segundos = '0' + segundos;
  }

  /** Exibindo o valor no site */
  horario.innerHTML = `${horas}:${minutos}:${segundos}`;

}

/** Se eu atualizar a página, vai aparecer 00:00:00 depois de um segundo aparecerá o tempo certo, então chamo a função antes e depois será atualizada a cada segundo. */
atualizarRelogio();

/** Chama a função a cada segundo, atualizando o relógio */
setInterval(atualizarRelogio, 1000);