let countEl = document.getElementById("count");
let logsEl = document.getElementById("logs");
let count = 0;
let logs = [];

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  logs.push(count);
  logsEl.textContent = 'Previous entries: ' + logs;
  count = 0;
  countEl.textContent = count;
}