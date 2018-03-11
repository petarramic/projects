const eventType = ['change', 'keyup'];
const perWeek = document.querySelector('.per-week');
const perMonth = document.querySelector('.per-month');

eventType.forEach(e => perWeek.addEventListener(e, () => {
  // Check if there is an amount in both inputs
  if (perWeek.value === '') {
    perWeek.focus();
  } else {
    // Calculate amount per month
    perMonth.value = (perWeek.value / 7 * 365.25 / 12).toFixed(2);
  }
}));

eventType.forEach(e => perMonth.addEventListener(e, () => {
  if (perMonth.value === '') {
    // perMonth.style.borderColor = redBorder;
    perMonth.focus();
  } else {
    // Calculate amount per week
    perWeek.value = (perMonth.value * 12 / 365.25 * 7).toFixed(2);
  }
}));
