
/* Ho cercato di fare un lavoro più semplice possibile per non completarmi la vita. Ho portato a termine tutto quello 
richiesto dalla traccia ma non mi sono dilungato oltre sulla bellezza dello stile*/

function aggiungiTask() {
    const input = document.getElementById("input").value;
    if (input !== "") {
        const ul = document.getElementById("lista");
        const li = document.createElement("li");
        const testoTask = document.createTextNode(input);
        const button = document.createElement("button");
        
        button.innerHTML = "Elimina";
        button.onclick = function () {
            ul.removeChild(li);
        };

        li.onclick = function () {
            li.style.textDecoration = "line-through";
        };
/* ovviamente ci ero arrivato al fatto che servisse una funzione onclick ma non sapevo la sintassi 
per imporre la linea */

        li.appendChild(testoTask);
        li.appendChild(button);
        ul.appendChild(li);

        document.getElementById("input").value = "";
    }
}
