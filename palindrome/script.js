const btn = document.querySelector("#check-btn");
btn.addEventListener("click", handleClick);

function handleClick() {
  const input = document.querySelector("#text-input").value;
    if (input === "") {
      alert("Please input a value");
    } else {
      const result = document.querySelector("#result");
      const cleaned = input.replace(/[a-zA-Z0-9]/g, "");
      const reversed = cleaned.split("").reverse().join("").toLowerCase();
      if (cleaned.toLowerCase() === reversed) {
        result.textContent = `${input} is a palindrome`;
      } else {
        result.textContent = `${input} is not a palindrome`;
      }
    }
}
