

// console.log(x + ' x ' + i + ' = ' + x * i);
// 可以一次印出結果，但是無法依序列出結果
// function joy(num) {
//   for (let y = 1; y < 10; y++) {
//     console.log(`${num} x ${y} = ${num * y}`);
//   }
// };

// 會依序列出結果
for (var i = 1; i < 5; i++) {
  (function (x) {
    console.log(`${x}`);
  })(i);
}

let content = document.querySelector('.content');
for (var i = 1; i < 10; i++) {
  let contentItem = document.createElement('div');
  let text = document.createElement('p');
  contentItem.classList.add('content__item');
  (function (num) {
    for (let y = 1; y < 10; y++) {
      // console.log(`${num} x ${y} = ${num * y}`);
      (function (y){
        text.textContent = `${num} x ${y} = ${num * y}`;

      })(y);
    }
  })(i);
  content.appendChild(contentItem).appendChild(text);
}





function joyjoy() {
  let content = document.querySelector('.content');
  for (let i = 1; i < 10; i++) {
    let contentItem = document.createElement('div');
    contentItem.classList.add('content__item');
    let text = document.createElement('p');
    (function (num) {
      for (let y = 1; y < 10; y++) {
        text.textContent = `${num} x ${y} = ${num * y}`;
      }
    })(i);
    content.appendChild(contentItem).appendChild(text);

  }
}







