
const sopa =(ingrediente)=>{
    return `Sopa de ${ingrediente}`
}

const platillo =(ingrediente)=>{
    return `Guisado de ${ingrediente}`
}

const comida =(unCallback, ingrediente)=>{
    let hambre=unCallback(ingrediente)
    return `Estoy comiendo ${hambre}`
}

console.log(comida(sopa, 'Zanahoria'));
console.log(comida(platillo, 'Zanahoria'));
console.log(comida((ingredientePostre)=>{return `Gelatina de ${ingredientePostre}`}, 'Zanahoria'));