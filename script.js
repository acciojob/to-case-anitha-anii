function toCase(text) {
  const lowerCase = text.toLowerCase();
  const upperCase = text.toUpperCase();
  return `${lowerCase}-${upperCase}`;
}

const text = prompt("Enter text:");
alert(toCase(text));
