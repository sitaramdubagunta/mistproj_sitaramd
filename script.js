function showAlert() {
  alert("Name: Your Name\nReg No: 123456\nPhone: 9876543210");
}

function toggleText() {
  const span = document.getElementById("toggleText");
  if (!span) return;
  if (span.style.display === "none" || span.style.display === "") {
    span.style.display = "inline";
  } else {
    span.style.display = "none";
  }
}
