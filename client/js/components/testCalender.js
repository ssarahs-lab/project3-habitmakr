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
          return 'Complete';
      },
      }
    });

    axios.get('api/userhabits')
    .then((response) => {
      let data = response.data.map((habit) => {
        let start_date = habit.date_started.split("T")
        return {
          title: habit.habit_name,
          category: 'time',
          start: start_date[0],
          isAllDay: true,
          bgColor: 'black',
          color: 'white'
        }
      })
      console.log(data)
      calendar.createSchedules(data)
    })

    calendar.on('clickSchedule', function(event) {
      const schedule = event.schedule;
      if(schedule.bgColor !== 'blue') {
        schedule.bgColor = 'blue'
      } else {
        schedule.bgColor = 'black'
      }
      
      calendar.render()

  });
    

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
