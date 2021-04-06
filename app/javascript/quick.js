const quick = () => {
  // ホバーするとボタンが出る
  const quickArea = document.getElementById("quick-area");
  quickArea.addEventListener("mouseover", () => {
    const list = document.querySelector(".more_list");
    list.setAttribute("style", "display: block;");
  });
  quickArea.addEventListener("mouseout", () => {
    const list = document.querySelector(".more_list");
    list.removeAttribute("style", "display: block;");
  });


  const basic = document.querySelector(".basic");
  basic.addEventListener("click", () => {
    const XHR = new XMLHttpRequest();
    XHR.open("GET", "/plans/basic", true);
    XHR.responseType = "json";
    XHR.send("basic");
    XHR.onload = () => {
      const plans = XHR.response.plans;
      console.log(plans);

      for (let i = 1; i < 8; i++) {
        const dayplan = document.querySelector(`.plan[data-index="${i}"]`);
         HTML = 
          `<p>・${plans.plan1.plan}<input type="checkbox" class="achieve-check" data-id=<%= ${plans.plan1.id} %></p>
           <p>・${plans.plan2.plan}<input type="checkbox" class="achieve-check" data-id=<%= ${plans.plan2.id} %></p>
           <p>・${plans.plan3.plan}<input type="checkbox" class="achieve-check" data-id=<%= ${plans.plan3.id} %></p>
          `;
        dayplan.insertAdjacentHTML("beforeend", HTML);
      }
      if (XHR.status != 200) {
        alert (`Error ${XHR.status}: ${XHR.statusText}`);
      } else {
        return null;
      }
    };
    XHR.onerror = function (){
      alert("リクエストに失敗しました");
    };
  });


  const normal = document.querySelector(".normal");
  normal.addEventListener("click", () => {
    const XHR = new XMLHttpRequest();
    XHR.open("GET", "/plans/normal", true);
    XHR.responseType = "json";
    XHR.send("normal");
    XHR.onload = () => {
      const plans = XHR.response.plans;
      console.log(plans);

      for (let i = 1; i < 8; i++) {
        const dayplan = document.querySelector(`.plan[data-index="${i}"]`);
         HTML = 
          `<p>・${plans.plan1.plan}<input type="checkbox" class="achieve-check" data-id=<%= ${plans.plan1.id} %></p>
           <p>・${plans.plan2.plan}<input type="checkbox" class="achieve-check" data-id=<%= ${plans.plan2.id} %></p>
           <p>・${plans.plan3.plan}<input type="checkbox" class="achieve-check" data-id=<%= ${plans.plan3.id} %></p>
          `;
        dayplan.insertAdjacentHTML("beforeend", HTML);
      }
      if (XHR.status != 200) {
        alert (`Error ${XHR.status}: ${XHR.statusText}`);
      } else {
        return null;
      }
    };
    XHR.onerror = function (){
      alert("リクエストに失敗しました");
    };
  });


  const hard = document.querySelector(".hard");
  hard.addEventListener("click", () => {
    const XHR = new XMLHttpRequest();
    XHR.open("GET", "/plans/hard", true);
    XHR.responseType = "json";
    XHR.send("hard");
    XHR.onload = () => {
      const plans = XHR.response.plans;
      console.log(plans);

      for (let i = 1; i < 8; i++) {
        const dayplan = document.querySelector(`.plan[data-index="${i}"]`);
         HTML = 
          `<p>・${plans.plan1.plan}<input type="checkbox" class="achieve-check" data-id=<%= ${plans.plan1.id} %></p>
           <p>・${plans.plan2.plan}<input type="checkbox" class="achieve-check" data-id=<%= ${plans.plan2.id} %></p>
           <p>・${plans.plan3.plan}<input type="checkbox" class="achieve-check" data-id=<%= ${plans.plan3.id} %></p>
          `;
        dayplan.insertAdjacentHTML("beforeend", HTML);
      }
      if (XHR.status != 200) {
        alert (`Error ${XHR.status}: ${XHR.statusText}`);
      } else {
        return null;
      }
    };
    XHR.onerror = function (){
      alert("リクエストに失敗しました");
    };
  });

};
window.addEventListener("load", quick);