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
function MultiplyMatrix(A, B) {
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
      Scale(mCat1, k + 0.2);
      Scale(mCat2, k + 0.2);
      Scale(mSoed, k + 0.2);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }
      break;
    case "-":
      Scale(mCat1, k - 0.2);
      Scale(mCat2, k - 0.2);
      Scale(mSoed, k - 0.2);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }
      break;
    case "ArrowLeft":
      MultiplyMatrix(mCat1, B);
      MultiplyMatrix(mCat2, B);
      MultiplyMatrix(mSoed, B);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }

      break;
    case "ArrowRight":
      MultiplyMatrix(mCat1, A);
      MultiplyMatrix(mCat2, A);
      MultiplyMatrix(mSoed, A);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }

      break;
    case "ArrowUp":
      MultiplyMatrix(mCat1, C);
      MultiplyMatrix(mCat2, C);
      MultiplyMatrix(mSoed, C);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }
      break;
    case "ArrowDown":
      MultiplyMatrix(mCat1, D);
      MultiplyMatrix(mCat2, D);
      MultiplyMatrix(mSoed, D);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }

      break;
    case "z":
      RotateObj(mCat1, mtxRotateZ);
      RotateObj(mCat2, mtxRotateZ);
      RotateObj(mSoed, mtxRotateZ);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }
      break;
    case "y":
      RotateObj(mCat1, mtxRotateY);
      RotateObj(mCat2, mtxRotateY);
      RotateObj(mSoed, mtxRotateY);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < catMatrix.length; i++) {
        myCat.draw(catMatrix[i]);
      }
      break;
    case "x":
      RotateObj(mCat1, mtxRotateX);
      RotateObj(mCat2, mtxRotateX);
      RotateObj(mSoed, mtxRotateX);
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

function RotateObj(A, mtxRotate) {
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

function Scale(A, k) {
  let scaleMatrix = [
    [k, 0, 0, 0],
    [0, k, 0, 0],
    [0, 0, k, 0],
    [0, 0, 0, 1],
  ];
  MultiplyMatrix(A, scaleMatrix);
}

function MoveObj(mtx, x, y) {
  let mtxMove = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [x, y, 0, 1],
  ];
  MultiplyMatrix(mtx, mtxMove);
}
