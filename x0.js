var xnulls = [
  '0','1','2',
  '3','4','5',
  '6','7','8',
];
var xor0 = 2;
var x = 0;
var o = 0;
xnulls.forEach(xo => {
  document.getElementById('divxo').innerHTML += '<input type="button" id="buttdiv" name="button" class="buttxo" / >';
  document.getElementById('buttdiv').id += xo;
});
document.querySelector('.divx0').onclick = function (click){
  if (xor0 % 2 == 0 && click.target.value !== 'X'){
    click.target.value = '0';
    xor0 ++;

  }if (xor0 % 2 == 1 && click.target.value !== '0'){
    click.target.value = 'X';
    xor0 ++;
  }


  if ((document.getElementById('buttdiv0').value == 'X' && document.getElementById('buttdiv1').value == 'X' && document.getElementById('buttdiv2').value == 'X')
   || (document.getElementById('buttdiv3').value == 'X' && document.getElementById('buttdiv4').value == 'X' && document.getElementById('buttdiv5').value == 'X')
   || (document.getElementById('buttdiv6').value == 'X' && document.getElementById('buttdiv7').value == 'X' && document.getElementById('buttdiv8').value == 'X')
   || (document.getElementById('buttdiv0').value == 'X' && document.getElementById('buttdiv3').value == 'X' && document.getElementById('buttdiv6').value == 'X')
   || (document.getElementById('buttdiv1').value == 'X' && document.getElementById('buttdiv4').value == 'X' && document.getElementById('buttdiv7').value == 'X')
   || (document.getElementById('buttdiv2').value == 'X' && document.getElementById('buttdiv5').value == 'X' && document.getElementById('buttdiv8').value == 'X')
   || (document.getElementById('buttdiv0').value == 'X' && document.getElementById('buttdiv4').value == 'X' && document.getElementById('buttdiv8').value == 'X')
   || (document.getElementById('buttdiv2').value == 'X' && document.getElementById('buttdiv4').value == 'X' && document.getElementById('buttdiv6').value == 'X')){
       xnulls.forEach(xo => {
         document.getElementById('buttdiv' + xo).value = '';
       });
       x++;
       document.getElementById('winnerx').innerHTML = `Игрок х: ${x}`;

  }
  if ((document.getElementById('buttdiv0').value == '0' && document.getElementById('buttdiv1').value == '0' && document.getElementById('buttdiv2').value == '0')
   || (document.getElementById('buttdiv3').value == '0' && document.getElementById('buttdiv4').value == '0' && document.getElementById('buttdiv5').value == '0')
   || (document.getElementById('buttdiv6').value == '0' && document.getElementById('buttdiv7').value == '0' && document.getElementById('buttdiv8').value == '0')
   || (document.getElementById('buttdiv0').value == '0' && document.getElementById('buttdiv3').value == '0' && document.getElementById('buttdiv6').value == '0')
   || (document.getElementById('buttdiv1').value == '0' && document.getElementById('buttdiv4').value == '0' && document.getElementById('buttdiv7').value == '0')
   || (document.getElementById('buttdiv2').value == '0' && document.getElementById('buttdiv5').value == '0' && document.getElementById('buttdiv8').value == '0')
   || (document.getElementById('buttdiv0').value == '0' && document.getElementById('buttdiv4').value == '0' && document.getElementById('buttdiv8').value == '0')
   || (document.getElementById('buttdiv2').value == '0' && document.getElementById('buttdiv4').value == '0' && document.getElementById('buttdiv6').value == '0')){
       xnulls.forEach(xo => {
         document.getElementById('buttdiv' + xo).value = '';
       });
       o++;
       document.getElementById('winnero').innerHTML = `Игрок 0: ${o}`;
  }
}
function clearxo () {
  xnulls.forEach(xo => {
    document.getElementById('buttdiv' + xo).value = '';
  });
}
