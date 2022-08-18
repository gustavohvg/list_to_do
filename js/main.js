const inputDescripTodoAdd = $('#descrip-todo-add');
const btnAddTodo = $('#btn-add');
const listTodo = $('#list-todo');

const addTodo = (str) => {
    if (str == ''){
        inputDescripTodoAdd.css('border-color', '#f00').focus();
        return false;
    } else{
        inputDescripTodoAdd.css('border-color', '#ced4da');
    }

    const content = `
    <li tabindex="0">
        <span class="material-icons-outlined mark-todo" title="marcar tarefa como concluída" data-marked="false" onclick="markUnmarkTodo($(this))">circle</span>
        <span class="text-todo">${str}</span>
        <span class="material-icons del-todo" title="remover tarefa" onclick="delTodo($(this))">remove</span>
    </li>
    `;

    inputDescripTodoAdd.val('').focus();
    listTodo.append(content);
};
const markUnmarkTodo = (e) => {
    const isMark = e.attr('data-marked') === 'true';

    if (isMark)
        e.text('circle').attr('title', 'marcar tarefa como concluída').attr('data-marked', 'false').toggleClass('material-icons-outlined material-icons');
    else
        e.text('check_circle').attr('title', 'marcar tarefa como não concluída').attr('data-marked', 'true').toggleClass('material-icons-outlined material-icons');
};
const delTodo = (e) => {
    e.parent().remove();
};

btnAddTodo.click(() => {
    const valDescripTodoAdd = inputDescripTodoAdd.val();

    addTodo(valDescripTodoAdd);
});
inputDescripTodoAdd.on('keydown', (event) => {
    if(event.keyCode === 13) {
        btnAddTodo.click();
    }
});

$("#list-todo").on('keydown', 'li', function (event){
    if (event.keyCode === 13) {
        $(this).find('.mark-todo').click();
    }
    if (event.keyCode === 8) {
        $(this).find('.del-todo').click();
    }
});