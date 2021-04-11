// const point = () => {
//   const XHR = new XMLHttpRequest();
//   XHR.open("GET", "", true);
//   XHR.responseType = "json";
//   XHR.send();
// }


// const notification = () => {
//   const payload = {
//     text: "ポイントが付与される日です！\n" +
//           "サイドバーから確認できます。" + "\n" +
//           "継続することで、健康投資効果がどんどん高まります！" + "\n"
//   }

//   const url = ""

//   fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(payload)
//   }).then(() => {
//     alert('送信が完了しました。追ってご連絡します！')
//   })
// };

// const checkTime = () => {
//   let preDate; 
//   setInterval(checkTime, 100000)
//   const currentTime = new Date();
//   const date = currentTime.getDate();
//   console.log(date);
//   if (preDate !== date && date % 5 === 0) {
//     preDate = date;
//     point
//     notification
//   }
// };
// window.addEventListener("load", checkTime);