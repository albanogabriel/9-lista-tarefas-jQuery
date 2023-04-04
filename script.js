$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val()
        const novoItem = $(`<li><span> ${novaTarefa}</span></li>`)
        $(novoItem).appendTo('#lista-tarefas')
        $('#nova-tarefa').val(' ')
    })

    $('#lista-tarefas').on('click', 'li', function(){
        $(this).toggleClass('tarefa-feita') //this -> apenas para um elemento li em específico e toggleClass adiciona ou remove uma classe caso já esteja diferente do addClass que pode ir somando classes
    })

})