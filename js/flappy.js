function novoElemento (tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira (reversa = false) {
    this.element = novoElemento ('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.element.appendChild(reversa ? corpo : borda)
    this.element.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

function ParDeBarreira (Altura, Abertura, x) {
    this.element = novoElemento('div', 'par-de-barreira')

    this.superior = new Barreira (true)
    this.inferior = new Barreira (false) 

    this.element.appendChild(this.superior.element)
    this.element.appendChild(this.inferior.element)
}