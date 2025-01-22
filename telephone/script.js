const checkBtn = document.querySelector("#check-btn");
checkBtn.addEventListener("click", handleClick);
const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", handleClear);

function handleClick() {
  const input = document.querySelector("#user-input").value;
  if (input === "") {
    alert("Please provide a phone number");
  } else {
    const result = document.querySelector("#results-div");
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    if (regex.test(input)) {
      result.textContent = `Valid US number: ${input}`;
    } else {
      result.textContent = `Invalid US number: ${input}`;
    }
  }
}

function handleClear() {
  const result = document.querySelector("#results-div");
  result.textContent = "";
}
