
const tela = document.querySelector('#tela');
const numeros = document.querySelectorAll('.numero');
const operacoes = document.querySelectorAll('.operacao');

numeros.forEach(numero => {

	numero.addEventListener('click', event => {

		event.preventDefault();

		tela.value += String(event.target.value);
	});
});

operacoes.forEach(operacao => {

	operacao.addEventListener('click', event => {

		event.preventDefault();

		switch(event.target.value){

			case 'A':
				tela.value = Number(tela.value) * 2;
				break;

			case 'B':
				tela.value = Number(tela.value) + 1;
				break;

			case 'Clear':
				tela.value = '';
				break;

			case 'Del':
				let valor = String(tela.value).split('');
				valor.pop();
				tela.value = valor.join('');
				break;
		}
	});
});