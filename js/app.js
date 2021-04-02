function algoritmoBurbuja(lista) {
    let n, i, k, aux;

    // La lleno con el tamaño de la lista
    n = lista.length;

    // Bucle anidado
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }

        }

    }
    return lista;
}



function validar() {
    const forma = document.getElementById('forma');

    let cadena1 = forma['operandoA'];
    let cadena2 = forma['operandoB'];

    let respuesta = "";


    if (cadena1.value != "" && cadena2.value != "") {
        // Trasformo la cadena recuperada desde Front en lista
        let retornaValor1 = Array.from(cadena1.value.toUpperCase());
        let retornaValor2 = Array.from(cadena2.value.toUpperCase());

        // Invoco el algoritmo para ordenar
        algoritmoBurbuja(retornaValor1);
        algoritmoBurbuja(retornaValor2);


        var intro = document.getElementById('resultado');

        if (retornaValor1.toString() == retornaValor2.toString()) {
            respuesta = "Es un Palindromo!";
            intro.style.cssText = 'color: black;';
        } else {
            respuesta = "No lo es!";
            intro.style.cssText = 'color: red;';

        }

        document.getElementById('resultado').innerHTML = ` ${respuesta}`;

    } else {
        console.log("Nada que mostrar");
    }

}
