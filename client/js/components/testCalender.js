export function renderCalender() {
  let calendarEl = document.getElementById('calendar')
  let calendar = new tui.Calendar(calendarEl, {
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
