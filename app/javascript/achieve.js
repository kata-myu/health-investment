const achieve = () => {
  const checkboxes = document.querySelectorAll(".achieve-check");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      console.log(id);
      const XHR = new XMLHttpRequest();
      XHR.open("POST", `/achievements/?id=${id}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        const achievement = XHR.response.achievement;
        console.log(achievement);
        const run = XHR.response.run;
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
    checked.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      console.log(id);
      const XHR = new XMLHttpRequest();
      XHR.open("DELETE", `/achievements/${id}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        const achievement = XHR.response.achievement;
        console.log(achievement);
      };
      XHR.onerror = () => {
        alert("リクエストに失敗しました");
      };
    });
  });
};
window.addEventListener("load", achieve);