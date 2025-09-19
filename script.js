const tabla = document.getElementById("tabla")

for (let i = 1; i <= 10; i++) {
    const fila = document.createElement("tr")
    tabla.appendChild(fila) 
    
    for (let t = 1; t <= 10; t++) {
        const columna = document.createElement("td")
        fila.appendChild(columna)

        columna.textContent = i * t
    }
}
