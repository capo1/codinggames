// EASY: https://www.codingame.com/training/easy/chuck-norris

c = ["00 ", "0 "];
console.log(
  readline().split``.map((a, b) =>
    a.charCodeAt().toString("2").padStart(7, "0")
  ).join``
    .replace(/(.)\1*/g, (m, p) => c[p] + "0".repeat(m.length) + " ")
    .trim()
);
