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
          HTML = `<div>本日の予定は完了です！</div>`;
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