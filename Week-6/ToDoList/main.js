// Local Storage veri ekleme
function saveLocal(x){
  const tasks = JSON.parse(localStorage.getIte("toDoList")) || { "tasks": [] };
  tasks.tasks.push(x);  
  localStorage.setItem("toDoList",JSON.stringif(tasks));
}
  
// Local Storage veri silme
function removeLocal(x){
  const tasks = JSON.parse(localStorage.getIte("toDoList")) || { "tasks": [] };

  tasks.tasks = tasks.tasks.filter(task => {
    return task !== x
  })
  localStorage.setItem("toDoList",JSON.stringif(tasks));
}
  
// Butonlara x işareti ekleme
window.addEventListener("load",() => {
    const list = document.querySelectorAll('#list li');   
    localStorage.setItem("toDoList",JSON.stringify({ "tasks": [] }));
    list.forEach(li =>{  
      saveLocal(li.textContent);   
      const closeButton = document.createElement("span");
      closeButton.innerText = "\u00D7";
      closeButton.classList.add("close");
      li.appendChild(closeButton);       
        
    })
});

// Butonlara basınca elementi silme
window.addEventListener("click", event => {    
    if(event.target.className === 'close'){
      removeLocal(event.target.parentElement.firstChild.textContent);
      event.target.parentElement.remove();       
    }
}
)

// Yeni eleman ekleme
function newElement() {
    const taskInput = document.getElementById("task");
    const taskValue = taskInput.value.trim(); 
    const toastSuccess = document.querySelector(".toast.success");
    const toastError = document.querySelector(".toast.error");
  
    if (taskValue === "") {
      
      $(toastError).toast("show");
    } else {
      
      const li = document.createElement("li");
      li.textContent = taskValue;
      saveLocal(li.textContent);
      const closeButton = document.createElement("span");
      closeButton.textContent = "\u00D7"; // text içeriğine x ekliyoruz
      closeButton.className = "close";         
      li.appendChild(closeButton);
      document.getElementById("list").appendChild(li);
      $(toastSuccess).toast("show");
    }
    taskInput.value = "";
    
  }
  
 // Üstüne tıklayınca üstü çizili yapma (tamamlanma anlamında)
document.getElementById("list").addEventListene("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked"); 
  }
});

  