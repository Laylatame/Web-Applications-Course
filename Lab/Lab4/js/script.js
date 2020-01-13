
var postTodo = document.getElementsByClassName("submitButton")[0];
var clearTodo = document.getElementsByClassName("clearButton btn-info")[0];
var markTodo = document.getElementsByClassName("markAllButton btn-success")[0];
var deleteTodo = document.getElementsByClassName("deleteButton btn-danger")[0];
var divLista = document.getElementsByClassName("panel-body listOfTodos")[0];
let newText = document.getElementsByClassName("newTodo form-control")[0];
newText.value = "";


postTodo.addEventListener("click", ( event ) => {
    event.preventDefault();

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    var label = document.createElement('label');

    label.appendChild(document.createTextNode(newText.value));
    var node = document.createElement("LI");
    node.appendChild(checkbox);
    node.appendChild(document.createTextNode(" "));
    node.appendChild(label);
    divLista.appendChild(node);
    newText.value = "";
});

clearTodo.addEventListener("click", ( event ) => {
    event.preventDefault();

    var checkboxes = document.getElementsByTagName('input');
    for (var i=0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

});

markTodo.addEventListener("click", ( event ) => {
    event.preventDefault();

    var checkboxes = document.getElementsByTagName('input');
    for (var i=0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }

});

deleteTodo.addEventListener("click", ( event) => {
    event.preventDefault();

    while(divLista.firstChild){
        divLista.removeChild(divLista.firstChild);
    }
});