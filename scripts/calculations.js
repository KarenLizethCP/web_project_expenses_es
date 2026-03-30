let budgetValue = 0;
let totalExpensesValue = 0;

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
  if (expenseEntries.length === 0) {
    console.log("No hay gastos registrados para calcular el promedio.");
    return;
  }
  const averageExpense = totalExpensesValue / expenseEntries.length;
  console.log(`Gasto promedio: ${averageExpense}`);
}

function calculateBalance() {
  const balance = budgetValue - totalExpensesValue;
  console.log(`Balance restante: ${balance}`);
}
