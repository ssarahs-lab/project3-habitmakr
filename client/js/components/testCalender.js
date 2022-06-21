function renderCalender() {
    var calendar = new tui.Calendar('#calendar', {
      defaultView: 'month',
      taskView: true,
      template: {
        monthDayname: function(dayname) {
          return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
        }
      }
  });


  axios.get('/api/userHabits')
    .then((response) => {
      console.log(response)
      // calendar.createSchedules([
      //   // {
      //   //     id: '1',
      //   //     calendarId: '1',
      //   //     title: 'my schedule',
      //   //     category: 'time',
      //   //     dueDateClass: '',
      //   //     start: new Date(),
      //   //     end: new Date()
      //   // },
      //   // {
      //   //     id: '2',
      //   //     calendarId: '1',
      //   //     title: 'second schedule',
      //   //     category: 'time',
      //   //     dueDateClass: '',
      //   //     start: '2018-01-18T17:30:00+09:00',
      //   //     end: '2018-01-19T17:31:00+09:00'
      //   // }
        
      // ]);
      
    })


  calendar.render();
}

renderCalender()