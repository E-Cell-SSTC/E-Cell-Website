function hi() {
    console.log("Button Clicked - UPCOMING")
    var w1 = document.getElementById('upcoming');
    w1.classList.toggle('newcss');
    changecolor();
  }
  function hello() {
    console.log("Button Clicked - ORGANISED");
    var w2 = document.getElementById('organised');
    w2.classList.toggle('oldcss');
    hi();
  }
  function changecolor() {
    console.log("Color changed");
    var w3 = document.getElementById('w_b');
    w3.classList.toggle('cc_W_B');
    var w4 = document.getElementById('b_w');
    w4.classList.toggle('cc_b_w');
  }
