window.addEventListener("load", () => {
  let container = document.getElementById("container");
  let timer;
  let breath = 100;
  let num = 245;
  let index = 0;
  let inc = (num / 7); // 7 is the number of lines split on page
  let col = 0;
  let cols = [2, 2, 4, 6, 4, 2, 2]; // fib sequence * 2
  
  function init() {
    for (let i = 0; i < num; i++) {
      const p = document.createElement("p");
      p.innerHTML = "/";
      p.id = i;
      container.appendChild(p);
    }
  }

  function display(n) {
    const p = document.getElementById(n);
    if (p) p.innerHTML = p.innerHTML == "/" ? "+" : "/";
  }

  function flip() {
    for (let i = 1; i <= cols[col]; i++) {
      let count = index;
      count += i;
      setTimeout(() => {display(count)}, 50);
      console.log(index);
    }
    if (col < 7) {index += (inc+cols[col]+(cols[col-1]?cols[col-1]-2 : 0)); col++;}
    if (col >= 7) { col = 0;}
    if ((index >= 245)) inc *= -1;
    else if ((inc < 0 && index <= 0)) {inc *= -1; index = 0;}
  }


  // 32ch - 627 '/'
  init(num);
  timer = setInterval(flip, breath);
});