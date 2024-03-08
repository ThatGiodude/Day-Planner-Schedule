window.onload = function () {
  let saveButtons = document.getElementsByClassName("saveBtn");
  for (let i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", saveText);
  }

  let saveButtons = document.getElementsByClassName("saveBtn");
  for (let i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", saveText);
  }

  var currentDate = dayjs().format('MMMM DD, YYYY');
  $("#currentDay").text(currentDate);

  let saveButtons = document.getElementsByClassName("saveBtn")
  let timeDisplayEl = $('#time-display');

  function displayTime() {
    let rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
