const centerX = canvas.width / 2;
const centerY = canvas.height / 2 - 150;
let ctx = document.getElementById("canvas").getContext("2d");
function getNewMatrix(part) {
  let newM = [];
  for (let i = 0; i < part.length; i++) {
    newM[i] = [];
    newM[i][0] = Math.round(centerX + part[i][0] * 10);
    newM[i][1] = Math.round(centerY - part[i][1] * 10);
    newM[i][2] = 1;
  }
  return newM;
}
function multiplyMatrix(A, B) {
  var rowsA = A.length,
    rowsB = B.length,
    colsB = B[0].length;
  for (var k = 0; k < colsB; k++) {
    for (var i = 0; i < rowsA; i++) {
      var t = 0;
      for (var j = 0; j < rowsB; j++) t += A[i][j] * B[j][k];
      A[i][k] = t;
    }
  }
  return A;
}
class Cat {
  draw(part) {
    let arr = getNewMatrix(part);

    for (let i = 0; i < arr.length - 1; i += 2) {
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = "4";
      ctx.moveTo(arr[i][0], arr[i][1]);
      ctx.lineTo(arr[i + 1][0], arr[i + 1][1]);
      ctx.stroke();
    }
  }
}
let B = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [-10, 0, 0, 1],
];
let A = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [10, 0, 0, 1],
];
let C = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 10, 0, 1],
];
let D = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, -10, 0, 1],
];
let myCat = new Cat();
myCat.draw(mCat1);
myCat.draw(mCat2);
myCat.draw(mSoed);

let k = 1;
let f = 0.01;

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "+":
      scale(mCat1, k + 0.2);
      scale(mCat2, k + 0.2);
      scale(mSoed, k + 0.2);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }
      break;
    case "-":
      scale(mCat1, k - 0.2);
      scale(mCat2, k - 0.2);
      scale(mSoed, k - 0.2);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }
      break;
    case "ArrowLeft":
      multiplyMatrix(mCat1, B);
      multiplyMatrix(mCat2, B);
      multiplyMatrix(mSoed, B);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }

      break;
    case "ArrowRight":
      multiplyMatrix(mCat1, A);
      multiplyMatrix(mCat2, A);
      multiplyMatrix(mSoed, A);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }

      break;
    case "ArrowUp":
      multiplyMatrix(mCat1, C);
      multiplyMatrix(mCat2, C);
      multiplyMatrix(mSoed, C);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }
      break;
    case "ArrowDown":
      multiplyMatrix(mCat1, D);
      multiplyMatrix(mCat2, D);
      multiplyMatrix(mSoed, D);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }

      break;
    case "z":
      rotateObj(mCat1, mtxRotateZ);
      rotateObj(mCat2, mtxRotateZ);
      rotateObj(mSoed, mtxRotateZ);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }
      break;
    case "y":
      rotateObj(mCat1, mtxRotateY);
      rotateObj(mCat2, mtxRotateY);
      rotateObj(mSoed, mtxRotateY);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }
      break;
    case "x":
      rotateObj(mCat1, mtxRotateX);
      rotateObj(mCat2, mtxRotateX);
      rotateObj(mSoed, mtxRotateX);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }
      break;
  }
});
let mtxRotateZ = [
  [Math.cos(f), Math.sin(f), 0, 0],
  [-Math.sin(f), Math.cos(f), 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];
let mtxRotateY = [
  [Math.cos(f), 0, -Math.sin(f), 0],
  [0, 1, 0, 0],
  [Math.sin(f), 0, Math.cos(f), 0],
  [0, 0, 0, 1],
];

let mtxRotateX = [
  [1, 0, 0, 0],
  [0, Math.cos(f), Math.sin(f), 0],
  [0, -Math.sin(f), Math.cos(f), 0],
  [0, 0, 0, 1],
];

function rotateObj(A, mtxRotate) {
  var rowsA = A.length,
    rowsB = mtxRotate.length,
    colsB = mtxRotate[0].length;
  for (var k = 0; k < colsB; k++) {
    for (var i = 0; i < rowsA; i++) {
      var t = 0;
      for (var j = 0; j < rowsB; j++) t += A[i][j] * mtxRotate[j][k];
      A[i][k] = t;
    }
  }

  return A;
}

function scale(A, k) {
  let scaleMatrix = [
    [k, 0, 0, 0],
    [0, k, 0, 0],
    [0, 0, k, 0],
    [0, 0, 0, 1],
  ];
  multiplyMatrix(A, scaleMatrix);
}
