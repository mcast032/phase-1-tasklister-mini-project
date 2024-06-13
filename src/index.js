
//1
document.addEventListener("DOMContentLoaded", () => {
  // 4 make a variable and seperate 
 let form = document.querySelector('form')
 form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildTodo(e.target.querySelector('#new-task-description').value)
    form.reset() //last part
 })
});

//2
function buildTodo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  // console.log(p)
  document.querySelector('#list').appendChild(p)
}

//3
function handleDelete(e){
  e.target.parentNode.remove()

}











