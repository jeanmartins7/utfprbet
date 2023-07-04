function salvarFormulario() {

  const disciplina = document.getElementById('disciplina').value;
  const valor = document.getElementById('valor').value;
  const chuteSelect = document.getElementById('chute');
  const chuteValue = chuteSelect.value;
  const chute = chuteValue === 'APROVADO' ? 'APROVADO' : (chuteValue === 'REPROVADO' ? 'REPROVADO' : '');

  const bet = {
    disciplina: disciplina,
    valor: parseFloat(valor),
    chute: chute
  };

  const cookies = document.cookie.split('; ');
  let accessToken = null;

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === 'accessToken') {
      accessToken = cookie[1];
      break;
    }
  }

  axios.post('http://localhost:3000/bets', bet,{
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  }).then(res => {
    console.log('Aposta criada com sucesso');
  }).catch(error => {
    console.error('Erro ao criar aposta:', error);
  });

  fecharFormulario();
}

function fecharFormulario() {

  window.location.href = 'shop.html';
}


const form = document.getElementById('popup-form');