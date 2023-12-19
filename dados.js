
        var pessoasRifa = [
            {
                colaborador: 'Maia',
                numbersRifa: ['234', '222', '555', '000','059']
            },
            {
                colaborador: 'André',
                numbersRifa: ['123', '553', '666', '001','673']
            },
            {
                colaborador: 'Maria',
                numbersRifa: ['002', '661', '999', '157','441']
            },
            {
                colaborador: 'Junior',
                numbersRifa: ['012', '961', '949', '757','017']
            },
            {
                colaborador: 'Márcio',
                numbersRifa: ['984', '194', '351', '817']
            }
        ];

        function verificarNumeros() {
            var numerosDigitados = document.getElementById('emb').value.split("\n");
            var resultado = '';
            var contador = 1; // Inicializando o contador
        
            numerosDigitados.forEach(function(numeroDigitado) {
                var numero = String(numeroDigitado);
                var encontrado = false;
        
                for (var i = 0; i < pessoasRifa.length; i++) {
                    var numeros = pessoasRifa[i].numbersRifa;
                    if (numeros.includes(numero.substring(1))) {
                        encontrado = true;
                        var nomeColaborador = pessoasRifa[i].colaborador;
                        resultado += `${contador}. Ganhador: ${nomeColaborador[0].toUpperCase() + nomeColaborador.substring(1)} - Centena sorteada: ${numero.substring(1)} \n`;
                        contador++; // Incrementando o contador
                        break;
                    }
                }
        
                if (!encontrado) {
                    resultado += `${contador}. O número ${numero.substring(1)} não foi encontrado na rifa. \n`;
                    contador++; // Incrementando o contador
                }
            });
        
            document.getElementById('resultado').innerText = resultado;
            document.getElementById('ganhadores').innerHTML = `
                Quadro de ganhadores!
            `;
            ganhadores = document.getElementById('quadro');
            ganhadores.classList.toggle('active');
            
        }
        