class FiguraGeometrica {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea () {
        return this.base * this.altura
    }
}

let cuadrado = new FiguraGeometrica(2, 2)
let rectangulo = new FiguraGeometrica(4, 2)
let triangulo = new FiguraGeometrica(3,3)

triangulo.calcularArea() = function() {
    return this.base * this.altura / 2
}