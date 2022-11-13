let numero = document.querySelector(".number");
let mes = document.querySelector(".month");
let anio = document.querySelector(".year");
let dia = document.querySelector(".day");
let form = document.querySelector(".form");
let input = document.querySelector("input");
let taskContainer = document.querySelector(".taskContainer")


const setDate = () =>{
    const date = new Date();
    mes.textContent = date.toLocaleString("es", {month: "short"})
    numero.textContent = date.toLocaleString("es", {day: "numeric"})
    anio.textContent = date.toLocaleString("es", {year: "numeric"})
    dia.textContent = date.toLocaleString("es", {weekday: "long"})
} 

setDate()

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const {value} = e.target.taskText;
    if(!value) return;
    let task = document.createElement("div");
    task.addEventListener("click", changeState)
    task.textContent = value;
    taskContainer.prepend(task)
    e.target.reset()
})


const changeState = (e) =>{
    e.target.classList.toggle('done')
}