let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')

function addItem() {
  let listItem = $('<li>', {
    'class': 'list-group-item',
    text: inpNewTask.val()
  })
  listItem.click(() => {
    listItem.toggleClass('done')
  })
  ulTasks.append(listItem)
  inpNewTask.val('')
}

function clearDone() {
  $('#ulTasks .done').remove()
}

inpNewTask.keypress((e) => {
  if (e.which == 13) addItem()
})
btnAdd.click(addItem)
btnReset.click(() => inpNewTask.val(''))
btnCleanup.click(clearDone)
