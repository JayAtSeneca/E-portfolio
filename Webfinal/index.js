const displayHourBox = () => {
  const hourly = document.getElementById("hourpay");
  hourly.hidden = false;
  const hourlyInput = document.getElementById("hiringHourPay");
  hourlyInput.required = true;
};

const removeHourBox = () => {
  const hourly = document.getElementById("hourpay");
  hourly.hidden = true;

  const hourlyInput = document.getElementById("hiringHourPay");
  hourlyInput.required = false;
};


  function showMessage() {
    alert("data reset DONE!");
}

function showOptions()
{
  let elem1 = document.getElementById('option1');
  elem1.style.display = "block";
  elem1.style.color = "red"
  let elem2 = document.getElementById('option2');
  elem2.style.display = "block";
  elem2.style.color = "red"
  let elem3 = document.getElementById('option3');
  elem3.style.display = "block";
  elem3.style.color = "red"
  let elem4 = document.getElementById('option4');
  elem4.style.display = "block";
  elem4.style.color = "red"
}

