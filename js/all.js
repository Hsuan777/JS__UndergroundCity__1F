

joyjoy();

function joyjoy(){
  for(let i = 1; i < 10; i++){
   let content = document.querySelector('.content');
   let contentItem = document.createElement('div')
   contentItem.classList.add('content__item');
   let text = document.createElement('p');
   contentItem.textContent = `<p>${joy(1)}</p><br>`;
   content.appendChild(contentItem);
   console.log(joy(1)); 
//    console.log(joy(i)); 
  }
}


// 1~9
function joy(num) {
  for (let i = 1; i < 10; i++) {
    let x = num;
    console.log(x + ' x ' + i + ' = ' + x * i);
  }
}



