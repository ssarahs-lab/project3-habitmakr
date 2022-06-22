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

  //   calendar.on('clickSchedule', function(event) {
  //     const schedule = event.schedule;
  //     if(schedule.bgColor !== 'blue') {
  //       schedule.bgColor = 'blue'
  //       console.log(event.schedule)
  //     } else {
  //       schedule.bgColor = 'black'
  //     }
      
  //     calendar.render()

  // });
    

}

export function addToCompletedHabit() {
    
}



// [
//   {
//       // id: '1',
//       // calendarId: '1',
//       // title: 'my schedule',
//       category: 'habit',
//       dueDateClass: '',
//       start: new Date(),
//       // end: '2018-01-19T02:30:00+09:00'
//   },
//   {
//       // id: '2',
//       // calendarId: '1',
//       title: 'second schedule',
//       category: 'time',
//       dueDateClass: '',
//       start: new Date(),
//       // end: '2018-01-19T17:31:00+09:00'
//   }
// ];
