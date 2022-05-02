const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']


const testFunction = (val1, val2) => {
  const day = new Date(2018, (val1 - 1), val2)
  const weekDay = weekDays[day.getDay()]
  console.log(day.getDay())
  console.log(weekDay)

}
testFunction(3, 23)