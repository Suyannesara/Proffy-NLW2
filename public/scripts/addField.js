// Procurar o botão
document.querySelector('#add-time')

// Quando clicar no Botão executar uma ação/função 
// click= ação, cloneField= Nome da ação/função
.addEventListener('click', cloneField)



//Executar uma ação
function cloneField(){
    //Duplicar o campo. Que campo?
    //node - sempre usado para se referir a elementos css
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true or false

    //Limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //Atribuição de = "", valor vazio aos dados dos inputs gerados, ou seja, os campos estão sendo limpos
    //Para cada campo/para cada field do momento,  limpar:
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ""
    })
    

    //Colocar na página: Onde?
    //AppendChild = cria um filho novo e coloca no lugar definido, no caso, "#schedules-items".
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
    