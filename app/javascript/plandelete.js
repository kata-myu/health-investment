const plandelete = () => {
  const deleteBtns = document.querySelectorAll(".plan-delete-btn");
  console.log(deleteBtns);
  deleteBtns.forEach((deleteBtn) =>{
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

window.addEventListener("load", plandelete);