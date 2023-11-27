let myArray = [];

function updateList() {
    let resultList = document.getElementById("resultList");
    resultList.innerHTML = "";
  }

  function addValue() {
    let inputValue = document.getElementById("inputValue").value;

    if (inputValue.trim() !== "") {
      myArray.push(inputValue);
      updateList();
      document.getElementById("inputValue").value = "";
    } else {
      alert("Please enter a value.");
    }
  }

let minValue = document.getElementById(`minValue`);
let valueBtn = document.getElementById(`findMinValue`);
let maxValue = document.getElementById(`maxValue`);

valueBtn.addEventListener(`click`, findValues);

function findValues(){
    minValue.value = `Minimum Value: ${Math.min(...myArray)}`;
    maxValue.value = `Maximum Value: ${Math.max(...myArray)}`;
}
