const input = document.querySelector(".input");

let previousValue = "";

input.addEventListener("input", (e) => {
  const inputValue = e.target.value;
  console.log(previousValue, inputValue);
  //   console.log(inputValue[inputValue.length]);

  if (/\d+$/g.test(inputValue)) {
    input.value = inputValue;
  } else {
    input.value = inputValue.substring(0, inputValue.length - 1);
  }

  if (inputValue.length === 4 && previousValue < inputValue) {
    firstThreeNumber = inputValue.slice(0, 3);
    input.value = `+(${firstThreeNumber}) - ${
      inputValue[inputValue.length - 1]
    }`;
  } else if (inputValue.length === 9 && previousValue > inputValue) {
    input.value = firstThreeNumber;
  }
  previousValue = inputValue;
});
