 let countEl = document.getElementById("count-el");
 let count = 0;
 function increment() {
    count += 1;
    countEl.textContent = count;
 }
 function minusIncrement(){
    count -= 1;
    countEl.textContent = count;
 }
 let saveEl = document.getElementById("save-el");
 function save() {
    let saveText = count + " - ";
    saveEl.textContent += saveText;
    countEl.textContent = 0;
    count = 0;
 }