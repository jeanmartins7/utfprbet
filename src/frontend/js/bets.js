function createCard(title, discipline, value, betStatus) {
  // Cria a div do card
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  cardDiv.style.width = '25rem';

  // Cria a div do corpo do card
  const cardBodyDiv = document.createElement('div');
  cardBodyDiv.className = 'card-body';

  // Cria o elemento h6 para o título
  const titleH6 = document.createElement('h6');
  titleH6.textContent = title;

  // Cria o elemento h7 para a disciplina
  const disciplineH7 = document.createElement('h7');
  disciplineH7.textContent = `Disciplina: ${discipline}`;

  // Cria o elemento h7 para o valor da aposta
  const valueH7 = document.createElement('h7');
  valueH7.textContent = `Valor da Aposta: ${value}`;

  // Cria o elemento h7 para o status da aposta
  const betH7 = document.createElement('h7');
  betH7.textContent = `Bet: ${betStatus}`;

  // Cria a div dos botões
  const betButtonDiv = document.createElement('div');
  betButtonDiv.className = 'bet-button';

  // Cria os botões
  const adjustButton = document.createElement('button');
  adjustButton.textContent = 'Ajustar aposta';

  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancelar aposta';

  // Adiciona o evento de clique ao botão "Cancelar aposta"
  cancelButton.addEventListener('click', function() {
    removeBet(title, accessToken);
    removeCard(cardDiv);
  });

  // Adiciona os elementos na hierarquia correta
  betButtonDiv.appendChild(adjustButton);
  betButtonDiv.appendChild(cancelButton);

  cardBodyDiv.appendChild(titleH6);
  cardBodyDiv.appendChild(disciplineH7);
  cardBodyDiv.appendChild(valueH7);
  cardBodyDiv.appendChild(betH7);
  cardBodyDiv.appendChild(betButtonDiv);

  cardDiv.appendChild(cardBodyDiv);

  // Retorna o card criado
  return cardDiv;
}

function carregarBets(usuario_id, accessToken) {
  axios.get('http://localhost:3000/users/' + usuario_id + '/bets', {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  })
    .then(res => processarObjetos(res.data))
    .catch(err => console.error(err));
}

function removeCard(card) {
  console.log(card.id)
  
  card.remove();
}

function removeBet(betId, accessToken) {
  axios.delete('http://localhost:3000/bets/' + betId, {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  })
    .then(response => {
      console.log('Aposta removida com sucesso');
    })
    .catch(error => {
      console.error('Erro ao remover aposta:', error);
    });
}

const cardsContainer = document.getElementById('cards-container')

const cookies = document.cookie.split('; ');
let accessToken = null;

for (let i = 0; i < cookies.length; i++) {
  const cookie = cookies[i].split('=');
  if (cookie[0] === 'accessToken') {
    accessToken = cookie[1];
    break;
  }
}

const data = {
  nome: 'deus',
  email: 'deus@gmail.com',
  usuario_id: '1f9238ae-9286-4cf5-80eb-d7859e03c1f7'
}

carregarBets(data.usuario_id, accessToken);

function processarObjetos(objetos) {
  objetos.rows.forEach(objeto => {
    card = createCard(objeto.id, objeto.disciplina, objeto.valor, objeto.chute);
    cardsContainer.appendChild(card);
  });
}
