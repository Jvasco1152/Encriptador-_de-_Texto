function encriptarTexto() {
            procesarTexto(1);
        }

        function desencriptarTexto() {
            procesarTexto(-1);
        }

        function procesarTexto(direccion) {
            var textoOriginal = document.getElementById('textoOriginal').value;
            var clave = parseInt(document.getElementById('clave').value, 10);

            if (isNaN(clave)) {
                alert('Por favor, ingrese un número válido como clave.');
                return;
            }

            var textoProcesado = '';

            for (var i = 0; i < textoOriginal.length; i++) {
                var char = textoOriginal[i];

                if (char.match(/[a-z]/i)) {
                    var code = textoOriginal.charCodeAt(i);

                    if (code >= 65 && code <= 90) {
                        char = String.fromCharCode(((code - 65 + clave * direccion) % 26 + 26) % 26 + 65);
                    } else if (code >= 97 && code <= 122) {
                        char = String.fromCharCode(((code - 97 + clave * direccion) % 26 + 26) % 26 + 97);
                    }
                }

                textoProcesado += char;
            }

            document.getElementById('textoEncriptado').value = textoProcesado;
        }