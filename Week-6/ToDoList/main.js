window.addEventListener("load",() => {
    const list = document.querySelectorAll('#list li');
    list.forEach(li =>{
        const closeButton = document.createElement("span");
        closeButton.innerText = "\u00D7";
        closeButton.classList.add("close");
        li.appendChild(closeButton);
    })
});

window.addEventListener("click", event => {    
    if(event.target.className === 'close'){
        event.target.parentElement.remove();
    }
}
)

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
    
      const closeButton = document.createElement("span");
      closeButton.textContent = "\u00D7"; // text içeriğine x ekliyoruz
      closeButton.className = "close";         
      li.appendChild(closeButton);
      document.getElementById("list").appendChild(li);
      $(toastSuccess).toast("show");
    }
    taskInput.value = "";
  }
  
 
  document.getElementById("list").addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); 
    }
  });