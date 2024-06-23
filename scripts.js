function calcularFibonacci(){
    const $numero = parseInt(document.getElementById("numero").value);
    const $resultado = document.getElementById("resultado")

    if (isNaN($numero) || $numero <= 0) {
        $resultado.textContent = "Ingresa un número valido"
    }

    let array = new Array($numero);
    
    array[0] = 0;
    array[1] = 1;
    
    for (let i = 2; i < array.length; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    
    $resultado.textContent = `Serie de Fibonacci de ${$numero} es: ${array.join(" , ")}`;
    $resultado.style.display = "block";
}

