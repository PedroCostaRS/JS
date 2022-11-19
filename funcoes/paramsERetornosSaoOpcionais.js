function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²`)
    } else if (area < 20) {
        return area
    } else {
        return area
    }
}


console.log(area(4, 5))