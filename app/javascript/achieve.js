const achieve = () => {
  const checkboxes = document.querySelectorAll(".achieve-check");
  checkboxes.forEach((checkbox) => {
    if (checkbox.getAttribute("data-load") != null) {
      return null;
    }
    checkbox.setAttribute("data-load", "true");

    checkbox.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");

      const checkBox = e.toElement; //発火した要素を取得
      const parent = checkBox.parentNode;
      const deleteBtn = parent.lastElementChild.lastElementChild;
      console.log(deleteBtn);

      const XHR = new XMLHttpRequest();
      XHR.open("POST", `/achievements/?id=${id}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        const achievement = XHR.response.achievement;
        console.log(achievement);
        const run = XHR.response.run;
        
        deleteBtn.setAttribute("style", "pointer-events: none;"); //すでにイベントリスナがセットされてしまっているので、クリックできなくする。
        deleteBtn.innerHTML = "達成済み" 
        checkBox.setAttribute("style", "pointer-events: none;");  //チェックボックスを押せなくする。

        if(run == true) {
          const done = document.getElementById("done");
          HTML = `<span class="achieve-done">本日の予定は完了です！お疲れ様です！ SNSで今の気持ちを発信しましょう！</span>
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/?lang=ja">
                    <span><svg class="svg-inline--fa fa-twitter-square fa-w-14 twitter-icon2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path></svg><!-- <i class="fab fa-twitter-square twitter-icon"></i> Font Awesome fontawesome.com --></span>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                    <span><svg class="svg-inline--fa fa-facebook-square fa-w-14 facebook-icon2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg><!-- <i class="fab fa-facebook-square facebook-icon"></i> Font Awesome fontawesome.com --></span>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                    <span><svg class="svg-inline--fa fa-instagram-square fa-w-14 instagram-icon2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path></svg><!-- <i class="fab fa-instagram-square instagram-icon"></i> Font Awesome fontawesome.com --></span>
                  </a>
                 `;
          done.insertAdjacentHTML("beforeend", HTML);
        }
      };
      XHR.onerror = () => {
        alert("リクエストに失敗しました");
      };
    });
  });

  const checkeds = document.querySelectorAll(".achieve-checked");
  checkeds.forEach((checked) => {
    if (checked.getAttribute("data-load") != null) {
      return null;
    }
    checked.setAttribute("data-load", "true");

    checked.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");

      const checkBox = e.toElement; //発火した要素を取得
      const parent = checkBox.parentNode;
      const deleteBtn = parent.lastElementChild.lastElementChild;
      console.log(deleteBtn);

      console.log(id);
      const XHR = new XMLHttpRequest();
      XHR.open("DELETE", `/achievements/${id}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        const achievement = XHR.response.achievement;
        console.log(achievement);

        deleteBtn.removeAttribute("style"); 
        deleteBtn.innerHTML = "削除";
        checkBox.setAttribute("style", "pointer-events: none;");
      };
      XHR.onerror = () => {
        alert("リクエストに失敗しました");
      };
    });
  });
};
setInterval(achieve, 1000);



const dayAchieve = () => {
  const checkboxes = document.querySelectorAll(".day-achieve-check");
  checkboxes.forEach((checkbox) => {
    if (checkbox.getAttribute("data-load") != null) {
      return null;
    }
    checkbox.setAttribute("data-load", "true");

    checkbox.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");

      const checkBox = e.toElement; //発火した要素を取得
      const parent = checkBox.parentNode;
      const deleteBtn = parent.lastElementChild.lastElementChild;
      console.log(deleteBtn);

      const XHR = new XMLHttpRequest();
      XHR.open("POST", `/achievements/?id=${id}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        const achievement = XHR.response.achievement;
        console.log(achievement);
        const run = XHR.response.run;
        
        deleteBtn.setAttribute("style", "pointer-events: none;"); //すでにイベントリスナがセットされてしまっているので、クリックできなくする。
        deleteBtn.innerHTML = "達成済み" 
        checkBox.setAttribute("style", "pointer-events: none;");  //チェックボックスを押せなくする。

        if(run == true) {
          const done = document.getElementById("day-done");
          HTML = `<span class="achieve-done">本日の予定は完了です！お疲れ様です！ SNSで今の気持ちを発信しましょう！</span>
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/?lang=ja">
                    <span><svg class="svg-inline--fa fa-twitter-square fa-w-14 twitter-icon2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path></svg><!-- <i class="fab fa-twitter-square twitter-icon"></i> Font Awesome fontawesome.com --></span>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                    <span><svg class="svg-inline--fa fa-facebook-square fa-w-14 facebook-icon2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg><!-- <i class="fab fa-facebook-square facebook-icon"></i> Font Awesome fontawesome.com --></span>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                    <span><svg class="svg-inline--fa fa-instagram-square fa-w-14 instagram-icon2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path></svg><!-- <i class="fab fa-instagram-square instagram-icon"></i> Font Awesome fontawesome.com --></span>
                  </a>
                 `;
          done.insertAdjacentHTML("beforeend", HTML);
        }
      };
      XHR.onerror = () => {
        alert("リクエストに失敗しました");
      };
    });
  });

  const checkeds = document.querySelectorAll(".day-achieve-checked");
  checkeds.forEach((checked) => {
    if (checked.getAttribute("data-load") != null) {
      return null;
    }
    checked.setAttribute("data-load", "true");

    checked.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");

      const checkBox = e.toElement; //発火した要素を取得
      const parent = checkBox.parentNode;
      const deleteBtn = parent.lastElementChild.lastElementChild;
      console.log(deleteBtn);

      console.log(id);
      const XHR = new XMLHttpRequest();
      XHR.open("DELETE", `/achievements/${id}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        const achievement = XHR.response.achievement;
        console.log(achievement);

        deleteBtn.removeAttribute("style"); 
        deleteBtn.innerHTML = "削除";
        checkBox.setAttribute("style", "pointer-events: none;");
      };
      XHR.onerror = () => {
        alert("リクエストに失敗しました");
      };
    });
  });
};
setInterval(dayAchieve, 1000);