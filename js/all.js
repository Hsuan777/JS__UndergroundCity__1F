

// setTimeout(function(){},1000)
// 跑 2~9 ，共 8 個 item ， 1 個 item 內有 9 個 <p>
let content = document.querySelector('.content');
for (var i = 2; i < 10; i++) {
  let contentItem = document.createElement('div');
  let contentItem__title = document.createElement('h2');
  contentItem__title.classList.add('content__item__title');
  contentItem__title.textContent = i;
  contentItem.appendChild(contentItem__title);
  contentItem.classList.add('content__item');
  
  (function (num) {
    for (let y = 1; y < 10; y++) {
      (function (num__sec){
        let text = document.createElement('p');
        text.classList.add('content__item__text');
        text.textContent = `${num} x ${num__sec} = ${num * num__sec}`;
        contentItem.appendChild(text);
      })(y);
    }
  })(i);
  setTimeout(function(){
    content.appendChild(contentItem);
  },1000*i)
}

// 一次印出結果
// joy_pri();
// function joy_pri() {
//   let content = document.querySelector('.content');
//   for (let i = 2; i < 10; i++) {
//     let contentItem = document.createElement('div');
//     contentItem.classList.add('content__item');
//     for (let y = 1; y < 10; y++) {
//       let text = document.createElement('p');
//       text.textContent = `${i} x ${y} = ${i * y}`;
//       contentItem.appendChild(text);
//     }
    
//     content.appendChild(contentItem);

//   }
// }

// 測試區
// 可以一次印出結果，但是無法依序列出結果
// function joy(num) {
//   for (let y = 1; y < 10; y++) {
//     console.log(`${num} x ${y} = ${num * y}`);
//   }
// };

// 若加上 setTimeout可依序列出結果，IIFE 立刻執行
// for (var i = 1; i < 10; i++) {
//   (function (x) {
//     console.log(`${x}`);
//   })(i);
// }
