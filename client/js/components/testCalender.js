export function renderCalender() {
  let page = document.getElementById('page')
  page.innerHTML = ''
  page.classList.add("animate__animated");
    page.classList.add("animate__fadeIn")

  //initialises the calendar
  let calendar = new tui.Calendar(page, {
      disableClick: true,
      defaultView: 'month',
      taskView: true,
      useDetailPopup: true,
      template: {
        monthDayname: function(dayname) {
          return '<span style="color: black;" "class="calendar-week-dayname-name">' + dayname.label + '</span>';
        },
        weekDayname: function(model) {
          return '<span class="tui-full-calendar-dayname-date">' + model.date + '</span>&nbsp;&nbsp;<span class="tui-full-calendar-dayname-name">' + model.dayName + '</span>';
      },
        popupEdit: function() {
          return null;
       },
       popupDetailBody: function(schedule) {
        return 'Body : ' + schedule.body;
      },
      }
    });

    //access the db of completed habits and show them on the calender
    axios.get('/api/completedHabit')
    .then((response) => {
      
      let data = response.data.map((habit) => {
        let time_completed = (moment(new Date(habit.time_completed)).format()).split('T')
        return {
          id: habit.user_habit_log_id,
          title: habit.habit_name,
          category: 'time',
          start: time_completed[0],
          isAllDay: true,
          bgColor: 'grey',
          color: 'white'
        }
      })
      
      calendar.createSchedules(data)

    })
}
