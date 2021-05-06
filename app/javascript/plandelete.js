const plandelete = () => {
  const deleteBtns = document.querySelectorAll(".plan-delete-btn");
  deleteBtns.forEach((deleteBtn) =>{
    if (deleteBtn.getAttribute("data-load") != null) {
      return null;
    }
    deleteBtn.setAttribute("data-load", "true");

    deleteBtn.addEventListener("click", (e) => {
      const dataId = e.target.getAttribute("data-id");
      const XHR = new XMLHttpRequest();
      XHR.open("DELETE", `/plans/${dataId}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        const deletePlan = XHR.response.plan;
        console.log(deletePlan);
        if (XHR.status != 200) {
          alert (`Error ${XHR.status}: ${XHR.statusText}`);
        }
      };

      const btn = e.target.parentNode;
      const planElement = btn.parentNode;
      planElement.remove();
    });
  });
};
setInterval(plandelete, 1000);


const dayPlandelete = () => {
  const dayDeleteBtns = document.querySelectorAll(".day-plan-delete-btn");
  dayDeleteBtns.forEach((dayDeleteBtn) =>{
    if (dayDeleteBtn.getAttribute("data-load") != null) {
      return null;
    }
    dayDeleteBtn.setAttribute("data-load", "true");

    dayDeleteBtn.addEventListener("click", (e) => {
      const dayDataId = e.target.getAttribute("data-id");
      const XHR = new XMLHttpRequest();
      XHR.open("DELETE", `/plans/${dayDataId}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        const deletePlan = XHR.response.plan;
        console.log(deletePlan);
        if (XHR.status != 200) {
          alert (`Error ${XHR.status}: ${XHR.statusText}`);
        }
      };

      const btn = e.target.parentNode;
      const planElement = btn.parentNode;
      planElement.remove();
    });
  });
};

setInterval(dayPlandelete, 1000);