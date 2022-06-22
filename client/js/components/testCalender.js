export function renderCalender() {
  var calendar = new tui.Calendar('#calendar', {
    defaultView: 'month',
    taskView: true,
    template: {
      monthDayname: function(dayname) {
        return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
      }
    }
  });

}