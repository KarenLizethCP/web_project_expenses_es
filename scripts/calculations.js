let budgetValue = 0;
let totalExpensesValue = 0;
let averageExpense = 0;

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
  console.log(`Valor total de los gastos: ${totalExpensesValue}`);
}

function calculateAverageExpense() {
  averageExpense = totalExpensesValue / expenseEntries.length;
  return averageExpense;
  console.log(`Gasto promedio: ${averageExpense}`);

  if (expenseEntries.length === 0) {
    console.log("No hay gastos registrados.");
  }
}

function calculateBalance() {
  const balance = budgetValue - totalExpensesValue;
  return balance;
  console.log(`Balance restante: ${balance}`);
}

let balanceColor = "green";

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance <= 0.25 * budgetValue) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let total = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      total += expenseEntries[i][1];
    }
  }
  return total;
  console.log(`Gasto total en ${category}: ${total}`);
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  let categoriesData = [];

  for (let i = 0; i < categories.length; i++) {
    let total = calculateCategoryExpenses(categories[i]);
    categoriesData.push([categories[i], total]);
  }

  let largestCategory = categoriesData[0][0];
  let largestAmount = categoriesData[0][1];

  for (let i = 1; i < categoriesData.length; i++) {
    if (categoriesData[i][1] > largestAmount) {
      largestAmount = categoriesData[i][1];
      largestCategory = categoriesData[i][0];
    }
  }

  return largestCategory;
}

function addExpenseEntry(newEntry) {
  expenseEntries.push(newEntry);

  totalExpensesValue += newEntry[1];
}
