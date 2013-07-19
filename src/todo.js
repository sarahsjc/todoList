var Todo = function(){

}

var task_template = '<li class="todo-item"><span></span><button>delete</button></li>';

Todo.add_task = function(){
    var task = $('.console input').val();
    $('.console input').val('');
    var task_element = $(task_template);
    task_element.find('span').text(task);
    task_element.appendTo($('.task-list'));
};

Todo.delete_task = function(){
    $(this).parent('li').remove();
};
