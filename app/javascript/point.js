const point = () => {
  const XHR = new XMLHttpRequest();
  XHR.open("GET", " /plans/point", true);
  XHR.responseType = "json";
  XHR.send();
  XHR.onload = () => {
    const point = XHR.response.point;
    console.log(point);
    const pointMessage = `<p>${point}pt付与されました！</p>`;
    const messageArea = document.getElementById("point-message");
    messageArea.insertAdjacentHTML("beforeend", pointMessage);

    if (XHR.status != 200) {
      alert (`Error ${XHR.status}: ${XHR.statusText}`);
    } else {
      return null;
    }
  };
};


const notification = () => {
  const payload = {
    text: "ポイントが付与される日です！\n" +
          "サイドバーで確認しましょう。" + "\n" +
          "継続することで、健康投資効果がどんどん高まりますね！" + "\n"
  }

  const url = ""

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload)
  }).then(() => {
    console.log('ポイントが付与されました！');
  })
};

const checkTime = () => {
  let preDate; 
  const pointTime = () => {
    const currentTime = new Date();
    const date = currentTime.getDate();
    
    if (preDate !== date && date % 5 === 0) {
      preDate = date;
      point()
      notification()
    }
  };

  setInterval(pointTime, 100000);
};

window.addEventListener("load", checkTime);



