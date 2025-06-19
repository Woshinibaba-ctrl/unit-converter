function convert() {
  const value = parseFloat(document.getElementById("inputValue").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  let result;

  if (isNaN(value)) {
    result = "Please enter a number.";
  } else if (from === to) {
    result = value;
  } else {
    const lengthFactors = {
      cm: 0.01,
      m: 1,
      km: 1000,
      inch: 0.0254,
      ft: 0.3048
    };

    const weightFactors = {
      g: 0.001,
      kg: 1,
      lb: 0.453592,
      oz: 0.0283495
    };

    if (from in lengthFactors && to in lengthFactors) {
      const inMeters = value * lengthFactors[from];
      result = inMeters / lengthFactors[to];
    } else if (from in weightFactors && to in weightFactors) {
      const inKg = value * weightFactors[from];
      result = inKg / weightFactors[to];
    } else if ((from === "C" && to === "F")) {
      result = (value * 9/5) + 32;
    } else if ((from === "F" && to === "C")) {
      result = (value - 32) * 5/9;
    } else {
      result = "Unsupported conversion.";
    }
  }

  document.getElementById("result").textContent = `Result: ${result}`;
}
