// const notification = () => {
//   const payload = {
//     text: "ポイントが付与される日です！\n" +
//           "サイドバーから確認できます。" + "\n" +
//           "引き続き、継続していきましょう！" + "\n"
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
//   setInterval(checkTime, 10000000)
//   const currentTime = new Date();
//   const date = currentTime.getDate();
//   console.log(date);
//   if (preDate !== date && date % 5 === 0) {
//     preDate = date;
//     notification
//   }
// };
// window.addEventListener("load", checkTime);