const addbtn1 = document.querySelector('.button1');
const addbtn2 = document.querySelector('.add1');
const flexcontainer = document.querySelector('.container');
const mainBody = document.querySelector('body')


const displayJustCard = document.querySelector('.displayJustCard');

let newList = document.querySelector('.addlist') ;



// created an array 
data = [];
let cardId;

// to make 1st popup visible
function addNewItem() { 
    
let newList = document.querySelector('.addlist') ;   
newList.style.display = 'block' ;
}

// to close the first popup
function closeIt() {
    let  newList = document.querySelector('.addlist');
    newList.style.display = 'none';
 }

// to add flex card
 function addFlex() {
    newList.style.display = 'none';  
    const flexHead = document.getElementById("myInput").value;

    const item = {
        id : new Date().getTime().toString(),
        title : flexHead,
        content :[]
    }

    if(flexHead){
        data.push(item);
        addCard();
    }
    else{
        alert("Enter the title")
    }

    document.getElementById("myInput").value = ""; 


const cardHeading = document.querySelector('.cardHeading');
cardHeading.innerHTML = "";

    const navBar = document.querySelector('.head1')
    navBar.style.display = 'block'

    const backButton = document.querySelector('.back')
    backButton.style.display = 'none'
   

}
 
 // to delete the flex card
 function deleteIt(id) {
    const cardId = `${id}`;
    const card = document.getElementById(cardId);
    card.parentNode.removeChild(card);
    data = data.filter((item) =>item.id!==id)
   
    
}


// made a second popup
function addCardList(id){
    let newText = document.querySelector('.addlist2') ;
    newText.style.display = 'block' 
    cardId = id;
}


// To close the second popup
function closeText() {
    let  newList = document.querySelector('.addlist2');
    newList.style.display = 'none'; 
   
 }

 function renderContents(){
    for (let i = 0; i < data.length; i++) {
       let ulelement = document.getElementById(`content_list_${data[i].id}`);
       let child=""
       for(let j=0;j<data[i].content.length;j++){
           let content = data[i].content[j];
           child += `<li class = "content ${content.done? "checked":""}" id="content_${content.id}" onclick ="doneTask(${content.id}, ${data[i].id})">${content.contentText}</li>`
           console.log(data[i]) 
       }
       ulelement.innerHTML = child;
       console.log(data)
    }  
 }



// adding viva list
function addCard(){
   
    const cardcontainer = document.querySelector('.container1')
    let child = "";
    for (let i = 0; i < data.length; i++) {
    //   console.log("data[i]:", data[i]);
      child += `<div id="${data[i].id}" class="card">
      <div value="${data[i].title}" onclick ="displayMyCard(${data[i].id}, this.getAttribute('value'))" class="ftext1">${data[i].title}</div>
      <hr>
      <div class="task1">
          <ul id="content_list_${data[i].id}">
          </ul>
      </div>    
          <div class = "btnspace">
          <button value = ${data[i].id} onclick ="deleteIt(this.value)" class = "delb"><i class="fa fa-trash" aria-hidden="true"></i></button>
          <button value = ${data[i].id} onclick ="addCardList(this.value)"  class = "plusbutn"><i class="fa fa-plus" aria-hidden="true"></i></button>
          </div>
          </div>`;
    }
    cardcontainer.innerHTML = child;
    renderContents();
    console.log(data);

  }



    function addContenttext() {
        const contentListId = `content_list_${cardId}`;
        // console.log(cardId);
        const Ul = document.getElementById(contentListId);
        const contentText = document.getElementById('myInput1').value;
        if (!contentText) {
            alert("Please add task name");
        } else {         
          document.getElementById('myInput1').value = "";
          const liNode = document.createElement("li");
          
          liNode.innerHTML = contentText;
          liNode.className = "content";
        
          Ul.appendChild(liNode);
          closeText()
          for(let i=0; i< data.length;i++){
            if(data[i].id==cardId){
                let content = {
                    id : new Date().getTime().toString(),
                    contentText: contentText,
                    done: false
                }
                data[i].content.push(content)
                // console.log(data[i].content);
            }
          }
          renderContents();
        }
      }

      function doneTask(taskId, cardId) {
        const contentId = `content_${taskId}`
        const liElement = document.getElementById(contentId);
        liElement.classList.toggle("checked");

        for (let i=0;i<data.length;i++){
            if (data[i].id ==cardId){
                for (let j=0;j<data[i].content.length;j++){
                    const content = data[i].content[j];
                    if(content.id == taskId){
                        data[i].content[j].done = !data[i].content[j].done ;
                        // data[i].content[j].done = true;
                    }
                }
            }
        }
       
      }
 
  



function displayMyCard(id, value){
   
    addbtn1.style.display = "block";
  
    const cardHeading = document.querySelector('.cardHeading');
    cardHeading.innerHTML = value;

    const cards = document.querySelectorAll('.card')
    cards.forEach(allcards => {
        allcards.style.display ='none';
    });
    const cardToShow = document.getElementById(id);
    cardToShow.style.display = 'block'

    const navBar = document.querySelector('.head1')
    navBar.style.display = 'none'

    const backButton = document.querySelector('.back')
    backButton.style.display = 'block'
}


function openFirstPage(){
    const cards = document.querySelectorAll('.card');
    const cardHeading = document.querySelector('.cardHeading');
   cardHeading.innerHTML = "";
    cards.forEach(allcards => {
        allcards.style.display ='block';
    });
    const navBar = document.querySelector('.head1')
    navBar.style.display = 'block'

    const backButton = document.querySelector('.back')
    backButton.style.display = 'none'

}

