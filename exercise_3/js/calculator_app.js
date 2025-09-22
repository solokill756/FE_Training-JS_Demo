document.addEventListener('DOMContentLoaded', function () {
  let display = document.getElementById('display');
});
function appendToDisplay(value) {
  if (display.value.length < 15) {
    if (
      /[0-9]/.test(value) === false &&
      /[0-9]/.test(display.value.slice(-1)) === false
    ) {
      return;
    }

    if (value === 'exp') {
      display.value += '^';
      return;
    }

    if (value === '.') {
      if (display.value.includes('.')) return;

      if (
        display.value === '' ||
        /[0-9]/.test(display.value.slice(-1)) === false
      ) {
        display.value += '0.';
      } else {
        display.value += '.';
      }
      return;
    }

    display.value += value;
  }
}

function calculateResult() {
  try {
    calculatePercentage();
    calculateExponential();
    display.value = eval(display.value).toString();
  } catch (error) {
    display.value = 'Error';
  }
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

function calculateExponential() {
  try {
    while (display.value.includes('^')) {
      const index = display.value.indexOf('^');
      let base = '';
      let exponent = '';
      let i = index - 1;
      let j = index + 1;

      while (i >= 0 && /[0-9.]/.test(display.value[i])) {
        base = display.value[i] + base;
        i--;
      }

      while (j < display.value.length && /[0-9.]/.test(display.value[j])) {
        exponent += display.value[j];
        j++;
      }

      const powerResult = Math.pow(parseFloat(base), parseFloat(exponent));
      display.value =
        display.value.slice(0, i + 1) + powerResult + display.value.slice(j);
      return;
    }
  } catch (error) {
    display.value = 'Error';
  }
}

function calculatePercentage() {
  try {
    while (display.value.includes('%')) {
      const index = display.value.indexOf('%');
      let number = '';
      let i = index - 1;

      while (i >= 0 && /[0-9.]/.test(display.value[i])) {
        number = display.value[i] + number;
        i--;
      }

      const percentResult = parseFloat(number) / 100;
      display.value =
        display.value.slice(0, i + 1) +
        percentResult +
        display.value.slice(index + 1);
      return;
    }
  } catch (error) {
    display.value = 'Error';
  }
}

function percentage() {
  try {
    if (/[0-9]/.test(display.value.slice(-1)) === false) {
      return;
    }
    calculateResult();
    display.value = `${parseFloat(display.value) * 100}%`;
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}
