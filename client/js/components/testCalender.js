export function renderCalender() {
  
  var calendar = new tui.Calendar('#calendar', {
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
      }
    });

    axios.get('/api/completedHabit')
    .then((response) => {
      console.log(response)
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
      console.log(data)
      calendar.createSchedules(data)

    })
    return calendar
}
