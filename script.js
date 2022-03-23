var numeroMagico = parseInt(Math.random() * 11);
var tentativa = 1;

if (tentativa > 3) {
	resposta.innerHTML =
		"Suas tentativas acabaram! O número secreto era " + numeroMagico;
}

function Chutar() {
	var numeroEscolhido = parseInt(document.getElementById("valor").value);
	var resposta = document.getElementById("resultado");

	if (tentativa < 3 || numeroEscolhido == numeroMagico) {
		if (numeroEscolhido > -1 && numeroEscolhido < 11) {
			if (numeroEscolhido == numeroMagico) {
				resposta.innerHTML = "Você acertou!";
			} else if (numeroEscolhido > numeroMagico) {
				resposta.innerHTML = "Ops, você errou. Quem sabe um número menor...";
				tentativa++;
			} else {
				resposta.innerHTML = "Ops, você errou. Quem sabe um número maior...";
				tentativa++;
			}
		} else {
			resposta.innerHTML = "Somente números de 0 a 10";
		}
	} else {
		resposta.innerHTML =
			"Suas tentativas acabaram! O número secreto era " + numeroMagico;
	}
}