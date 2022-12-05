
  let a = 0;
  let b = 0;
  let c = 1;

setInterval(my, 1000);

  function my( )
  {
    a = b + a;
    document.getElementById('money').innerText = a + "$";
  }
  
  document.getElementById('but').onclick = () => {
    a = a + c;
    document.getElementById('money').innerText = a + "$";
  };

  document.getElementById('click1').onclick = () => {
    if (a >= 200){
    a = a - 200;
    c = c + 1;
    document.getElementById('money').innerText = a + "$";
    }
    else {
        alert("You can't afford it");
    }
   }

  document.getElementById('shop1').onclick = () => {
    if (a >= 100){
    a = a - 100;
    b = b + 1;
    document.getElementById('money').innerText = a + "$";
    }
    else {
        alert("You can't afford it");
    }
  };

  document.getElementById('shop2').onclick = () => {
    if (a >= 950){
    a = a - 950;
    b = b + 10;
    document.getElementById('money').innerText = a + "$";
    }
    else {
    alert("You can't afford it");
    }
   }

   document.getElementById('save').onclick = () => {
   
   }
