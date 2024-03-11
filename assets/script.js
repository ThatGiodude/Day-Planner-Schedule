$(document).ready(function() {
  // Display the current day
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

  // Loads the saved tasks from local storage
  function loadTasks() {
    $(".description").each(function() {
      let hour = $(this).parent().attr("id");
      let task = localStorage.getItem(hour);

      if (task !== null) {
        $(this).val(task);
      }
    });
  }

  loadTasks();

  // Should hopefully save the tasks to local storage
  $(".saveBtn").on("click", function() {
    let hour = $(this).parent().attr("id");
    let task = $(this).siblings(".description").val();

    localStorage.setItem(hour, task);
  });

  // When updated should change the colors
  function updateTimeBlocks() {
    let currentHour = dayjs().hour();

    $(".time-block").each(function() {
      let blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past").removeClass("present future");
      } else if (blockHour === currentHour) {
        $(this).addClass("present").removeClass("past future");
      } else {
        $(this).addClass("future").removeClass("past present");
      }
    });
  }

  updateTimeBlocks();

  // Update time blocks every minute
  setInterval(updateTimeBlocks, 60000);
});