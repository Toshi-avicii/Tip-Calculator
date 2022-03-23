// input
const billInput = document.querySelector('.tip-calculator .input-box .bill-input-container .bill-input-box input');
const peopleInput = document.querySelector('.tip-calculator .tip-people-container .bill-people-box input');
// btns
const resetBtn = document.querySelector('#reset-btn');
const tipBtn = document.querySelectorAll('.btn');
// output
const tipPerPerson = document.querySelector('#per-person-tip-output');
const tipTotal = document.querySelector('#total-tip-output');
const totalBill = document.querySelector('#total-bill-output');

tipBtn.forEach(btn => btn.addEventListener('click', calcOutput));

function calcOutput(e) {
//    console.log(e.currentTarget);
   let curEle = e.currentTarget; 
   let curText = curEle.innerText;
   let curNum = parseInt(curText, 10);
   
   let bill = Number(billInput.value);
   let peopleVal = Number(peopleInput.value);
   
   if(bill === 0 || peopleVal === 0 || bill < 0 || peopleVal < 0) alert('Please Enter valid values');

   if(bill > 0 && peopleVal > 0) {
    tipTotal.innerText = `$ ${Math.round(bill * (curNum / 100))}`;
    tipPerPerson.innerText = `$ ${(bill * (curNum / 100) / peopleVal).toFixed(2)}`;
    totalBill.innerText = `$ ${Math.round(bill + (bill * (curNum / 100)))}`;
   }

   if(curEle.id === 'custom-percent-btn') {
       tipTotal.innerText = '$ 0';
       tipPerPerson.innerText = '$ 0';
       totalBill.innerText = '$ 0';
       alert('Do not click this button');
    }
}

resetBtn.addEventListener('click', (e) => {
    tipTotal.innerText = '$ 0';
    tipPerPerson.innerText = '$ 0';
    totalBill.innerText = '$ 0';
    billInput.value = '';
    peopleInput.value = '';
})

