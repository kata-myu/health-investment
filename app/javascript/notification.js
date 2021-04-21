window.addEventListener('DOMContentLoaded', ()=>{
  Notification.requestPermission(permission=>{
    const notification = new Notification("Check!");
  });
});