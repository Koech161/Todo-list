const inputField= document.getElementById('inputbox')
const shoppingList=document.getElementById('shoppingcontainer')

function addTask(){
    if(inputField.value===''){ 
        alert('Invalid input')
    }else{
        let li=document.createElement('li')
        li.innerHTML=inputField.value
        shoppingList.appendChild(li)
        let span= document.createElement('span')
        span.innerHTML='\u00d7'
        li.appendChild(span)
    }inputField.value=''
    saveData()
    } 
    shoppingList.addEventListener('click', function(e){
        if(e.target.tagName==='LI'){
            e.target.classList.toggle('checked')
            saveData()
        }
        else if(e.target.tagName==='SPAN'){
            e.target.parentElement.remove()
            saveData()
        }
    },false)
    function saveData(){
        localStorage.setItem('data',shoppingList.innerHTML)
    }
    function saveList(){
        shoppingList.innerHTML=localStorage.getItem('data')
    }saveList();