let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];

const btn = document.querySelector("#purchase-btn");
btn.addEventListener("click", handleClick);
const input = document.querySelector("#cash");
const changeDue = document.querySelector("#change-due");

function handleClick() {
  changeDue.innerHTML = ""; // Clear previous results
  const cash = Number(input.value);
  let totalAvailableChange = parseFloat(
    cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2)
  );
  let change = parseFloat((cash - price).toFixed(2));
  const unitValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

  const status = document.createElement("p");

  if (cash === price) {
    status.textContent = "No change due - customer paid with exact cash";
    changeDue.appendChild(status);
    return;
  }

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (change > totalAvailableChange) {
    status.textContent = "Status: INSUFFICIENT_FUNDS";
    changeDue.appendChild(status);
    return;
  }

  const changes = [];
  for (let i = unitValues.length - 1; i >= 0; i--) {
    const unitValue = unitValues[i];
    const [currencyUnit, amount] = cid[i];

    if (change >= unitValue && amount > 0) {
      const changeGiven = Math.min(
        amount,
        Math.floor(change / unitValue) * unitValue
      );
      change = parseFloat((change - changeGiven).toFixed(2));
      cid[i][1] -= changeGiven;
      if (changeGiven > 0) {
        changes.push([currencyUnit, changeGiven]);
      }
    }
  }

  if (change > 0) {
    status.textContent = "Status: INSUFFICIENT_FUNDS";
    changeDue.appendChild(status);
    return;
  }

  const totalChangeGiven = changes.reduce(
    (sum, [_, amount]) => sum + amount,
    0
  );

  if (
    parseFloat(
      totalAvailableChange.toFixed(2) - totalChangeGiven.toFixed(2)
    ) === 0
  ) {
    status.textContent = "Status: CLOSED";
    changeDue.appendChild(status);
  } else {
    status.textContent = "Status: OPEN";
    changeDue.appendChild(status);
  }

  changes.forEach(([currencyUnit, amount]) => {
    const changeDetail = document.createElement("p");
    changeDetail.textContent = `${currencyUnit}: $${amount.toFixed(2)}`;
    changeDue.appendChild(changeDetail);
  });
}
