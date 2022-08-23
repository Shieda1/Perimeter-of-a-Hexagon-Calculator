// https://calculator.swiftutors.com/perimeter-of-a-hexagon-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const perimeterofHexagonRadio = document.getElementById('perimeterofHexagonRadio');
const edgeLengthRadio = document.getElementById('edgeLengthRadio');

let perimeterofHexagon;
let edgeLength = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

perimeterofHexagonRadio.addEventListener('click', function() {
  variable1.textContent = 'Edge Length';
  edgeLength = v1;
  result.textContent = '';
});

edgeLengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of Hexagon';
  perimeterofHexagon = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(perimeterofHexagonRadio.checked)
    result.textContent = `Perimeter of Hexagon = ${computePerimeterofHexagon().toFixed(5)}`;

  else if(edgeLengthRadio.checked)
    result.textContent = `Edge Length = ${computeEdgeLength().toFixed(5)}`;
})

// calculation

function computePerimeterofHexagon() {
  return 6 * Number(edgeLength.value);
}

function computeEdgeLength() {
  return Number(perimeterofHexagon.value) / 6;
}