// const notificationAction = () =>{
  // function checkVersion() {
  //   const latestVersion = document.querySelector(".js-currentVersion").textContent;
  //   const currentVersion = localStorage.getItem("conciseVersion");
  
  //   if (currentVersion === null || semverCompare(currentVersion, latestVersion) === -1) {      
  //     const notification = new Notification("Hello, world!");
  
  //     localStorage.setItem("conciseVersion", latestVersion);
  //   }
  // }

//   if (!('Notification' in window)) {
//     alert('未対応のブラウザです');
//   }
//   else {
//     // 許可を求める
//     Notification.requestPermission()
//       .then((permission) => {
//         if (permission == 'granted') {
//           // 許可
//           const n = new Notification("リマインドです");
          
//         } else if (permission == 'denied') {
//           // 拒否
//           return;
//         } else if (permission == 'default') {
//           // 無視
//           return;
//         }
//       });
//   }
// }
// window.addEventListener("load", notificationAction)