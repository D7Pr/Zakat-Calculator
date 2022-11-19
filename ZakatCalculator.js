const getTotalOfAllEntries = () => {
  var allInputValues = document.getElementsByClassName("input-value--user");
  var total = 0.0;

  //add up all input fields
  for (var i = 0; i < allInputValues.length; i++) {
    if (parseInt(allInputValues[i].value.replace(/\,/g, ""))) {
      var inputNum = parseFloat(allInputValues[i].value.replace(/,/g, ""));
      total += inputNum;
    }
  }
  return total;
};

const displayTotalOfAllEntries = () => {
  //first bolded value showing user total
  var zakahEligibleAmount = document.getElementsByClassName(
    "eligible-for-zakah--number"
  )[0];
  zakahEligibleAmount.innerHTML =
    getTotalOfAllEntries()
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const calculateHowMuchIsOwed = () => {
  displayTotalOfAllEntries();
  //get the location where the amount you owe is going to show up
  var amountYouOweField = document.getElementsByClassName(
    "your-amount-due--number"
  )[0];

  // does the main calculation
  if (parseFloat(getTotalOfAllEntries().toFixed(2).toString()).toFixed(2).replace(/,/g, "") >= 0) {
    amountYouOweField.innerHTML =
      (getTotalOfAllEntries() /40)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    amountYouOweField.innerHTML = "Check Value Please";
  }
};

function getOption() {
  selectElement = document.querySelector('#currency');
  output = selectElement.value;
  document.querySelector('.output').textContent = output;
}

function resetAllInputFields() {
  var valueFields = document.getElementsByClassName("value-field");
  for (var i = 1; i < valueFields.length; i++) {
    valueFields[i].value = "";
    valueFields[i].innerHTML = "";
  }
}

