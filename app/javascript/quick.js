const quick = () => {
  // ホバーするとボタンが出る
  const quickArea = document.getElementById("quick-area");
  if (quickArea && quickArea.getAttribute("data-load") != null){
    return null;
  }
  if (quickArea){quickArea.setAttribute("data-load", "true");}

  if (quickArea){
    quickArea.addEventListener("mouseover", () => {
      const list = document.querySelector(".more_list");
      list.setAttribute("style", "display: block;");
    });
    quickArea.addEventListener("mouseout", () => {
      const list = document.querySelector(".more_list");
      list.removeAttribute("style", "display: block;");
    });
  }


  const basic = document.querySelector(".basic");
  if (basic && basic.getAttribute("data-load") != null){
    return null;
  }
  if(basic){basic.setAttribute("data-load", "true");}

  if (basic) {
  basic.addEventListener("click", () => {
    const XHR = new XMLHttpRequest();
    XHR.open("GET", "/plans/basic", true);
    XHR.responseType = "json";
    XHR.send("basic");
    XHR.onload = () => {
      const plans = XHR.response.plans;
      console.log(plans);

      if (plans.plan1){
        for (let i = 1; i < 8; i++) {
          switch(i){
            case 1:
            const dayplan = document.querySelector(`.plan[data-index="${i}"]`);
            HTML = 
             `<div class="plan-element"><input type="checkbox" class="achieve-check" data-id=${plans.plan1.id - 18}><span> ${plans.plan1.plan}</span> <div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan1.id - 18}>削除</span></div></div>
              <div class="plan-element"><input type="checkbox" class="achieve-check" data-id=${plans.plan2.id -18}><span> ${plans.plan2.plan}</span> <div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan2.id - 18}>削除</span></div></div>
              <div class="plan-element"><input type="checkbox" class="achieve-check" data-id=${plans.plan3.id -18}><span> ${plans.plan3.plan}</span> <div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan3.id - 18}>削除</span></div></div>
              `;
            dayplan.insertAdjacentHTML("beforeend", HTML);
            break;
            default:
              if(i == 2){
                num = 15
              }else if(i == 3){
                num = 12
              }else if(i == 4){
                num = 9
              }else if(i == 5){
                num = 6
              }else if(i == 6){
                num = 3
              }else if(i == 7){
                num = 0
              } 
            const dayplan2 = document.querySelector(`.plan[data-index="${i}"]`);
            HTML = 
             `<div class="plan-element"><span>・${plans.plan1.plan}</span><div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan1.id - num}>削除</span></div></div>
              <div class="plan-element"><span>・${plans.plan2.plan}</span><div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan2.id - num}>削除</span></div></div>
              <div class="plan-element"><span>・${plans.plan3.plan}</span><div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan3.id - num}>削除</span></div></div>
              `;
            dayplan2.insertAdjacentHTML("beforeend", HTML);
          }
        }}
      else {
        alert("1日に登録できるプランは最大6つのため簡単登録ができません！個別登録をお願いします！")
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
}


  const normal = document.querySelector(".normal");
  if (normal && normal.getAttribute("data-load") != null){
    return null;
  }
  if(normal){normal.setAttribute("data-load", "true");}

  if (normal) {
  normal.addEventListener("click", () => {
    const XHR = new XMLHttpRequest();
    XHR.open("GET", "/plans/normal", true);
    XHR.responseType = "json";
    XHR.send("normal");
    XHR.onload = () => {
      const plans = XHR.response.plans;
      console.log(plans);

      if (plans.plan1){
        for (let i = 1; i < 8; i++) {
          switch(i){
            case 1:
            const dayplan = document.querySelector(`.plan[data-index="${i}"]`);
            HTML = 
             `<div class="plan-element"><input type="checkbox" class="achieve-check" data-id=${plans.plan1.id - 18}><span> ${plans.plan1.plan}</span> <div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan1.id - 18}>削除</span></div></div>
              <div class="plan-element"><input type="checkbox" class="achieve-check" data-id=${plans.plan2.id -18}><span> ${plans.plan2.plan}</span> <div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan2.id - 18}>削除</span></div></div>
              <div class="plan-element"><input type="checkbox" class="achieve-check" data-id=${plans.plan3.id -18}><span> ${plans.plan3.plan}</span> <div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan3.id - 18}>削除</span></div></div>
              `;
            dayplan.insertAdjacentHTML("beforeend", HTML);
            break;
            default:
              if(i == 2){
                num = 15
              }else if(i == 3){
                num = 12
              }else if(i == 4){
                num = 9
              }else if(i == 5){
                num = 6
              }else if(i == 6){
                num = 3
              }else if(i == 7){
                num = 0
              } 
            const dayplan2 = document.querySelector(`.plan[data-index="${i}"]`);
            HTML = 
             `<div class="plan-element"><span>・${plans.plan1.plan}</span><div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan1.id - num}>削除</span></div></div>
              <div class="plan-element"><span>・${plans.plan2.plan}</span><div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan2.id - num}>削除</span></div></div>
              <div class="plan-element"><span>・${plans.plan3.plan}</span><div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan3.id - num}>削除</span></div></div>
              `;
            dayplan2.insertAdjacentHTML("beforeend", HTML);
          }
        }}
      else {
        alert("1日に登録できるプランは最大6のため簡単登録ができません！個別登録をお願いします！")
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
}


  const hard = document.querySelector(".hard");
  if (hard && hard.getAttribute("data-load") != null){
    return null;
  }
  if(hard){hard.setAttribute("data-load", "true");}

  if (hard) {
  hard.addEventListener("click", () => {
    const XHR = new XMLHttpRequest();
    XHR.open("GET", "/plans/hard", true);
    XHR.responseType = "json";
    XHR.send("hard");
    XHR.onload = () => {
      const plans = XHR.response.plans;
      console.log(plans);

      if (plans.plan1){
        for (let i = 1; i < 8; i++) {
          switch(i){
            case 1:
            const dayplan = document.querySelector(`.plan[data-index="${i}"]`);
            HTML = 
             `<div class="plan-element"><input type="checkbox" class="achieve-check" data-id=${plans.plan1.id - 18}><span> ${plans.plan1.plan}</span> <div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan1.id - 18}>削除</span></div></div>
              <div class="plan-element"><input type="checkbox" class="achieve-check" data-id=${plans.plan2.id -18}><span> ${plans.plan2.plan}</span> <div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan2.id - 18}>削除</span></div></div>
              <div class="plan-element"><input type="checkbox" class="achieve-check" data-id=${plans.plan3.id -18}><span> ${plans.plan3.plan}</span> <div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan3.id - 18}>削除</span></div></div>
              `;
            dayplan.insertAdjacentHTML("beforeend", HTML);
            break;
            default:
              if(i == 2){
                num = 15
              }else if(i == 3){
                num = 12
              }else if(i == 4){
                num = 9
              }else if(i == 5){
                num = 6
              }else if(i == 6){
                num = 3
              }else if(i == 7){
                num = 0
              } 
            const dayplan2 = document.querySelector(`.plan[data-index="${i}"]`);
            HTML = 
             `<div class="plan-element"><span>・${plans.plan1.plan}</span><div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan1.id - num}>削除</span></div></div>
              <div class="plan-element"><span>・${plans.plan2.plan}</span><div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan2.id - num}>削除</span></div></div>
              <div class="plan-element"><span>・${plans.plan3.plan}</span><div class="plan-delete"><span class="plan-delete-btn" data-id=${plans.plan3.id - num}>削除</span></div></div>
              `;
            dayplan2.insertAdjacentHTML("beforeend", HTML);
          }
        }}
      else {
        alert("1日に登録できるプランは最大6のため簡単登録ができません！個別登録をお願いします！")
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
}

};
setInterval(quick, 1000)