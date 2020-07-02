let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let inpNewTask = $('#inpNewTask')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let addTask = function () {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })  
    console.log(inpNewTask.val())
    inpNewTask.val('')
    ulTasks.append(listItem);
    listItem.click(() => {
        listItem.toggleClass('done')
    })
    toggleReset()
}
function toggleReset () {
    btnClear.prop('disabled',inpNewTask.val() == '')
    btnAdd.prop('disabled',inpNewTask.val() == '')
    btnSort.prop('disabled',ulTasks.children().length < 1)
    btnReset.prop('disabled',ulTasks.children().length < 1)
}
function cleanDone() {
    $('#ulTasks .done').remove()
    toggleReset()
}
btnAdd.click(() => addTask())
btnClear.click(() => {
    inpNewTask.val('')
    toggleReset()
})
inpNewTask.keypress(function (e) { 
    if(e.which == '13') {
        addTask()
    }
});
btnReset.click(cleanDone)
btnSort.click(() => {
    $('#ulTasks .done').appendTo(ulTasks)
    
})
inpNewTask.on('input', () => {
    toggleReset()
})