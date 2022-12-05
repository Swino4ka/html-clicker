
  let money = 0;
  let passive = 0;
  let click = 1;

setInterval(my, 1000);

  function my( )
  {
    money = money + passive;
    document.getElementById('money').innerText = money + "$";
  }
  
  document.getElementById('but').onclick = () => {
    money = money + click;
    document.getElementById('money').innerText = money + "$";
  };

  document.getElementById('but1').onclick = () => {
    money = money + 100000000;
    document.getElementById('money').innerText = money + "$";
  };



  let click1 = 200;

  document.getElementById('click1').innerText = "Buy +1 click income for " + click1 + "$";


  document.getElementById('click1').onclick = () => {
    if (money >= click1){
    money = money - click1;
    click = click + 1;
    document.getElementById('money').innerText = money + "$";
    }
    else {
        alert("You can't afford it");
    }
   }





   let shop1 = 100;

   document.getElementById('shop1').innerText = "Buy +1 income in second for " + shop1 + "$";

  document.getElementById('shop1').onclick = () => {
    if (money >= shop1){
    money = money - shop1;
    passive = passive + 1;
    shop1 = shop1 * 1.05;
    document.getElementById('shop1').innerText = "Buy +1 income in second for " + shop1 + "$";
    document.getElementById('money').innerText = money + "$";
    }
    else {
        alert("You can't afford it");
    }
  };


  let shop2 = 950;

  document.getElementById('shop2').innerText = "Buy +10 income in second for " + shop2 + "$";

  document.getElementById('shop2').onclick = () => {
    if (money >= shop2){
    money = money - shop2;
    passive = passive + 10;
    document.getElementById('money').innerText = money + "$";
    }
    else {
    alert("You can't afford it");
    }
   }

   document.getElementById('save').onclick = () => {
   
   }
