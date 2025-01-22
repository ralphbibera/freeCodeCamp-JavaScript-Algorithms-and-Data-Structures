const btn = document.querySelector("#convert-btn");
btn.addEventListener("click", handleClick);

function handleClick() {
  const input = document.querySelector("#number").value;
  const output = document.querySelector("#output");

  switch (true) {
    case input === "":
      output.textContent = "Please enter a valid number";
      break;
    case input < 0:
      output.textContent = "Please enter a number greater than or equal to 1";
      break;
    case input >= 4000:
      output.textContent = "Please enter a number less than or equal to 3999";
      break;
    default:
      const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      const symbols = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
      ];

      let count = Number(input);
      let result = "";
      while (count > 0) {
        for (let i = 0; i < values.length; i++) {
          const value = values[i];
          const symbol = symbols[i];
          const modulo = count % value;

          switch (modulo) {
            case 0:
              const repeat = count / value;
              result += symbol.repeat(repeat);
              count -= repeat * value;
              break;
            case value:
              result += symbol;
              count -= value;
              break;
            default:
              if (modulo > 0 && modulo !== value) {
                const repeat = (count - (count % value)) / value;
                result += symbol.repeat(repeat);
                count -= repeat * value;
              }
          }
        }
      }
      output.textContent = result;
      break;
  }
}
