function addAffiliate() {
  // Get the value from the input
  const affiliateValue = document.getElementById('affiliateInput').value;

  // If the value is not empty, display it, otherwise show an error message
  if (affiliateValue) {
    document.getElementById('output').innerHTML = `<strong>Affiliate Value Added:</strong> ${affiliateValue}`;
  } else {
    document.getElementById('output').innerHTML = "<strong style='color: red;'>Please enter an affiliate value.</strong>";
  }
}
