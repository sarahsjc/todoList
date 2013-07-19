$(function(){
    $('.console button').click(Todo.add_task);
    $('.task-list li button').live('click', Todo.delete_task);
});




