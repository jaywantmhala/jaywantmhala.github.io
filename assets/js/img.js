// for 0
const progressContainer = document.querySelector('.progress-container');

// initial call

function setPercentage() {
  const percentage = progressContainer.getAttribute('data-percentage') + '%';
  
  const progressEl = progressContainer.querySelector('.progress');
  const percentageEl = progressContainer.querySelector('.percentage');
  
  progressEl.style.width = percentage;
  percentageEl.innerText = percentage;
  percentageEl.style.left = percentage;
}
setPercentage();


const progressContainer1 = document.querySelector('.progress-container1');

// initial call
// for 1st
function setPercentage1() {
  const percentage1 = progressContainer1.getAttribute('data-percentage1') + '%';
  
  const progressEl1 = progressContainer1.querySelector('.progress1');
  const percentageEl1 = progressContainer1.querySelector('.percentage1');
  
  progressEl1.style.width = percentage1;
  percentageEl1.innerText = percentage1;
  percentageEl1.style.left = percentage1;
}
setPercentage1();


// for 2nd
const progressContainer2 = document.querySelector('.progress-container2');

// initial call
// for 1st
function setPercentage2() {
  const percentage2 = progressContainer2.getAttribute('data-percentage2') + '%';
  
  const progressEl2 = progressContainer2.querySelector('.progress2');
  const percentageEl2 = progressContainer2.querySelector('.percentage2');
  
  progressEl2.style.width = percentage2;
  percentageEl2.innerText = percentage2;
  percentageEl2.style.left = percentage2;
}
setPercentage2();

// for 3rd
const progressContainer3 = document.querySelector('.progress-container3');

// initial call

function setPercentage3() {
  const percentage3 = progressContainer3.getAttribute('data-percentage3') + '%';
  
  const progressEl3 = progressContainer3.querySelector('.progress3');
  const percentageEl3 = progressContainer3.querySelector('.percentage3');
  
  progressEl3.style.width = percentage3;
  percentageEl3.innerText = percentage3;
  percentageEl3.style.left = percentage3;
}
setPercentage3();