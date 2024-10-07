const capitalize = (string) => {
  if (typeof string !== "string") {
    throw new Error("incorrect input");
  }
  return string[0].toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
  if (typeof string !== "string") {
    throw new Error("incorrect input");
  }

  return string.split("").reverse().join("");
};

const calculator = {
  substract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },

  multiply: function (a, b) {
    return a * b;
  },
};

const caesarCipher = (string, shift = 0) => {
  const encryptedArray = [];

  for (let i = 0; i < string.length; i++) {
    let currentLetter = string[i];

    let charCodeAtCurrent = currentLetter.charCodeAt();
    let encryptedLetterCode = "";

    if (charCodeAtCurrent >= 65 && charCodeAtCurrent <= 90) {
      encryptedLetterCode = charCodeAtCurrent + shift;
      encryptedLetterCode > 90
        ? (encryptedLetterCode -= 26)
        : encryptedLetterCode;
    } else if (charCodeAtCurrent >= 97 && charCodeAtCurrent <= 122) {
      encryptedLetterCode = charCodeAtCurrent + shift;

      encryptedLetterCode > 122
        ? (encryptedLetterCode -= 26)
        : encryptedLetterCode;
    } else {
      encryptedLetterCode = charCodeAtCurrent;
    }

    const encryptedLetter = String.fromCharCode(encryptedLetterCode);

    encryptedArray.push(encryptedLetter);
  }

  return encryptedArray.join("");
};

const analyzeArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return {
    average: sum / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
