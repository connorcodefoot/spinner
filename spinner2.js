const spinnerSymbols = ['|','/', '-','\\','|','/', '-','\\', '|' ]

let timer;
let i = 0;

function type() {

  process.stdout.write(spinnerSymbols[i] + '\r');
  i++

  if(i >= spinnerSymbols.length) {
    clearInterval(timer);
  }
}

timer = setInterval(type, 200);