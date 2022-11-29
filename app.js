var onlyInput = document.getElementById("renderInput")
function render(v){
    onlyInput.value += v    
}

function renderButton(){
    var a = eval(onlyInput.value)
    onlyInput.value = a
}

function clearAll(){
   onlyInput.value = "" 
}

function eraseing(){
  onlyInput.value = onlyInput.value.slice(0,-1)  
    // onlyInput.value.innerText =
    // onlyInput.value.slice(0, -1)
}