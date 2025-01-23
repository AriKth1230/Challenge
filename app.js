// Array para almacenar nombres 
let amigos =[]

//Función para agregar amigos 
function agregarAmigo(){
 const imputAmigo = document.getElementById("amigo");
 const nombreAmigo = imputAmigo.value.trim();

//Alerta por si el campo está vacío 
if (nombreAmigo === ""){
    alert("Ingrese un nombre por favor");
    return;
}
//Nombre NO duplicado 
if (amigos.includes(nombreAmigo)){
    alert(`El nombre ${nombreAmigo} ya está registrado`);
    return;
}
//Si el nombre no está duplicado lo agregamos 
amigos.push(nombreAmigo);
//Limpiar 
imputAmigo.value="";

actualizarLista();

}

//Funcion para actualizar la lista de amigos 
function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");

    //reiniciar lista actual
    listaAmigos.innerHTML = "";

    for (let i = 0; i<amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
//Función para sortear amigos 
function sortearAmigo(){
if(amigos.length === 0){ //Comprobar si el array está vacío
    alert("No hay amigos para sortear. Agrega al menos 1 a la lista.");
    return;
}
//Valores aleatorios 
const indiceAmigo = Math.floor(Math.random() * amigos.length);

//Nombre sorteado
const amigoSorteado = amigos[indiceAmigo];

//Resultado
const resultado = document.getElementById("resultado");
resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;

}