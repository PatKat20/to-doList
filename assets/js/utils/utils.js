const addId = {
    _id:1,
    get id(){
        return this._id++;
    }
}

function deleteLastLetter(){
    const backspaceInput = document.getElementById("backspaceInput")
    backspaceInput.value = backspaceInput.value.slice(0, -1);
}

function createInput(attr){
    let input = document.createElement("input");
    input.type = attr;
    return input
}

export { addId, deleteLastLetter, createInput}