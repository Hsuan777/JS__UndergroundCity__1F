

// 跑 2~9 ，共 8 個 item ， 1 個 item 內有 9 個 <p>
let content = document.querySelector('.content');

// 規劃戰術 -> IIFE
(function () {
  for (let i = 2; i < 10; i++) {
    let contentItem = document.createElement('div');
    let contentItem__title = document.createElement('h2');
    contentItem__title.classList.add('content__item__title');
    contentItem__title.textContent = i;
    contentItem.appendChild(contentItem__title);
    contentItem.classList.add('content__item');
    for (let y = 1; y < 10; y++) {
      let text = document.createElement('p');
      text.classList.add('content__item__text');
      text.textContent = `${i} x ${y} = ${i * y}`;
      contentItem.appendChild(text);
    }
    setTimeout(function () {
      content.appendChild(contentItem);
    }, 1000 * i) // 兩秒後開始
  }
}());




