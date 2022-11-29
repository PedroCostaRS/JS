// tipos de declaração de função

// function declaration padrão
function soma(a, b) {
    return a + b
}// usada em qualquer ponto do software, mesmo antes da sua declaração

// function expression - retorna os valores para uma const ou let
const sub = function (a, b) {
    return a - b
}// Só pode ser usada após a declaração

// named function expression
const mult = function mult(a, b) {
    return a * b
} // Só pode ser usada após a declaração