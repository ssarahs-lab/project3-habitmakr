export function renderCalender() {
  let page = document.getElementById('page')
  page.innerHTML = ''
  //initialises the calendar
  let calendar = new tui.Calendar(page, {
      disableClick: true,
      defaultView: 'month',
      taskView: true,
      useDetailPopup: true,
      template: {
        monthDayname: function(dayname) {
          return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
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
        let time_completed = habit.time_completed.split("T")
        return {
          id: habit.user_habit_log_id,
          title: habit.habit_name,
          category: 'time',
          start: time_completed[0],
          isAllDay: true,
          bgColor: 'black',
          color: 'white'
        }
      })
      
      calendar.createSchedules(data)

    })
}
