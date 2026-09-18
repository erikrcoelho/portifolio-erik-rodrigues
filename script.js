var ficha = document.getElementById('ficha')
var btn = document.getElementById('btn')
btn?.addEventListener('click', clicar)
function clicar(event){
    event.preventDefault();
    if (!ficha) return;
    if (ficha.style.display === 'block'){
        ficha.style.display = 'none'
    } else{
        ficha.style.display = 'block'
    }
}



    