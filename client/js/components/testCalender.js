export function renderCalender() {
  let page = document.getElementById('page')
  page.innerHTML = ''
  //initialises the calendar
  page.innerHTML = `
      <button id="prevBtn" class="btn">Prev</button>
      <button id="todayBtn" class="btn">Today</button>
      <button id="nextBtn" class="btn">Next</button>
  `
  let calendar = new tui.Calendar(page, {
      disableClick: true,
      theme: {
        'month.today.backgroundColor': 'black',
        },
      defaultView: 'month',
      taskView: true,
      useDetailPopup: true,
      template: {
        monthDayname: function(dayname) {
          return '<span style="color: black;" "class="calendar-week-dayname-name">' + dayname.label + '</span>';
        },
        weekDayname: function(model) {
          return '<span class="tui-full-calendar-dayname-date" style="color: black;">' + model.date + '</span>&nbsp;&nbsp;<span class="tui-full-calendar-dayname-name">' + model.dayName + '</span>';
        },
        popupEdit: function() {
          return null;
        },
        popupDetailBody: function(schedule) {
          return 'Body : ' + schedule.body;
        },
        monthGridHeader: function(model) {
          let date = new Date(model.date);
          let template = '<span class="tui-full-calendar-weekday-grid-date">' + date.getDate() + '</span>';
          let today = model.isToday ? 'TDY' : '';
          if (today) {
              template += '<span class="tui-full-calendar-weekday-grid-date-decorator" style="background-color: #333;"></span>';
          }
          return template;
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
          bgColor: 'grey',
          color: 'white',
          borderColor: 'grey'
        }
      })
      
      calendar.createSchedules(data)

    })
    const prevBtn = document.getElementById('prevBtn')
    const todayBtn = document.getElementById('todayBtn')
    const nextBtn = document.getElementById('nextBtn')

    prevBtn.addEventListener('click', function(){
      calendar.prev()
    })

    todayBtn.addEventListener('click', function(){
      calendar.today()
    })

    nextBtn.addEventListener('click', function() {
      calendar.next()
    })
}
