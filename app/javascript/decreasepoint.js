const decreasepoint = () => {
  const XHR = new XMLHttpRequest();
  XHR.open("GET", "/plans/decrease_point", true);
  XHR.responseType = "json";
  XHR.send();
  XHR.onload = () => {
    const decreasepoint = XHR.response.point;
    console.log(decreasepoint);

    if (XHR.status != 200) {
      alert(`Error ${XHR.status}: ${XHR.statusText}`);
    }else{
      return null;
    }
  };
};


const checkTime = () => {
  let preDate;
  const decreasepointTime = () => {
    const currentTime = new Date();
    const date = currentTime.getDate();

    if (preDate !== date && /[1-2]*[9]/.test(date)){
      preDate = date;
      decreasepoint()
    }
  };

  setInterval(decreasepointTime, 100000);
};

window.addEventListener("load", checkTime);