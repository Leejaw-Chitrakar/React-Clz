// 10. Create a pure function formatDate(year, month, day) that returns a string in "DD/MM/YYYY" format.

function formatDate(year, month, day) {
  // Ensure two digits for day and month
  const dd = String(day).padStart(2, '0');
  const mm = String(month).padStart(2, '0');
  return `${dd}/${mm}/${year}`;
}

// Test cases
console.log(formatDate(2026, 1, 27)); // "27/01/2026"
console.log(formatDate(2023, 12, 5)); // "05/12/2023"
console.log(formatDate(2000, 5, 15)); // "15/05/2000"
