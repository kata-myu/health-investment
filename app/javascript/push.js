const push = () => {
  const XHR = new XMLHttpRequest();
  XHR.open("GET", "/plans/push", true);
  XHR.responseType = "json";
  XHR.send();
  XHR.onload = () => {
    const achieve = XHR.response.achieve;
    console.log(achieve);
    if (achieve == "no") {
      // プッシュ通知処理
      const payload = {
        text: "本日の計画がまだ全て実行されていません。\n" +
              "計画を確認し、実行しましょう！" + "\n" +
              "やり遂げた後の最高の気分を味わいましょう！" + "\n"
      }
    
      const url = ""
    
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload)
      }).then(() => {
        console.log('プッシュしました！');
      })
    }else{
      console.log(achieve);
    }
  };
};

const checkTime = () => {
  let preDate;
  const notificationTime = () => {
    const currentTime = new Date();
    const date = currentTime.getDate();
    const time = currentTime.getHours();
    if (preDate !== date && time === 20){
      preDate = date;
      push()
    }
  };
  setInterval(notificationTime, 10000)
};

window.addEventListener("load", checkTime);




