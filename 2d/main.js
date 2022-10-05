//canvas.width = (window.innerWidth * 80) / 100;
//canvas.height = (window.innerHeight * 95) / 100;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
let ctx = document.getElementById("canvas").getContext("2d");
// функция перевода координат из мировых в экранные
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
class Cat {
    draw(part) {
        let arr = getNewMatrix(part);
        console.log(arr)
        for (let i = 0; i < arr.length - 1; i++) {
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.lineWidth = "4";
            ctx.moveTo(arr[i][0], arr[i][1]); //координаты начала линии
            ctx.lineTo(arr[i + 1][0], arr[i + 1][1]); // координаты конца линии
            ctx.stroke();
        }
    }
}
//----------------------------Матрицы перемещения-------------------------------
let B = [
    [1,   0, 0],
    [0,   1, 0],
    [-10, 0, 1]
];
let A = [
    [1,  0, 0],
    [0,  1, 0],
    [10, 0, 1]
];
let C = [
    [1, 0,  0],
    [0, 1,  0],
    [0, 10, 1]
];
let D = [
    [1,  0,  0],
    [0,  1,  0],
    [0, -10, 1]
];
//------------------------------------------------------------------------------------
// функция перемножения матриц
function MultiplyMatrix(A, B) {
    var rowsA = A.length,
        colsA = A[0].length,
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
let myCat = new Cat();
myCat.draw(mLEar);
myCat.draw(mREar);
myCat.draw(mHead);
myCat.draw(mLEye);
myCat.draw(mREye);
myCat.draw(mNose);
myCat.draw(mTail);
myCat.draw(mBody);
myCat.draw(mLFoot);
myCat.draw(mRFoot);
let k = 1;
// ---------------------Работа с объектом------------------------
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "+":
            Scale(mLEar, k+0.2);
            Scale(mREar, k+0.2);
            Scale(mHead, k+0.2);
            Scale(mLEye, k+0.2);
            Scale(mREye, k+0.2);
            Scale(mNose, k+0.2);
            Scale(mTail, k+0.2);
            Scale(mBody, k+0.2);
            Scale(mLFoot, k+0.2);
            Scale(mRFoot, k+0.2);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < catMatrix.length; i++) {
                    myCat.draw(catMatrix[i]);
            }
        break;
        case "-":
            Scale(mLEar, k-0.2);
            Scale(mREar, k-0.2);
            Scale(mHead, k-0.2);
            Scale(mLEye, k-0.2);
            Scale(mREye, k-0.2);
            Scale(mNose, k-0.2);
            Scale(mTail, k-0.2);
            Scale(mBody, k-0.2);
            Scale(mLFoot, k-0.2);
            Scale(mRFoot, k-0.2);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < catMatrix.length; i++) {
                    myCat.draw(catMatrix[i]);
            }
            break;
        case "ArrowLeft":
            MultiplyMatrix(mLEar, B);
            MultiplyMatrix(mREar, B);
            MultiplyMatrix(mHead, B);
            MultiplyMatrix(mLEye, B);
            MultiplyMatrix(mREye, B);
            MultiplyMatrix(mNose, B);
            MultiplyMatrix(mTail, B);
            MultiplyMatrix(mBody, B);
            MultiplyMatrix(mLFoot, B);
            MultiplyMatrix(mRFoot, B);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < catMatrix.length; i++) {
                    myCat.draw(catMatrix[i]);
            }
            console.log("Left pressed");
            break;
        case "ArrowRight":
            MultiplyMatrix(mLEar, A);
            MultiplyMatrix(mREar, A);
            MultiplyMatrix(mHead, A);
            MultiplyMatrix(mLEye, A);
            MultiplyMatrix(mREye, A);
            MultiplyMatrix(mNose, A);
            MultiplyMatrix(mTail, A);
            MultiplyMatrix(mBody, A);
            MultiplyMatrix(mLFoot, A);
            MultiplyMatrix(mRFoot, A);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < catMatrix.length; i++) {
                    myCat.draw(catMatrix[i]);
            }
            console.log("Right pressed");
            break;
        case "ArrowUp":
            MultiplyMatrix(mLEar, C);
            MultiplyMatrix(mREar, C);
            MultiplyMatrix(mHead, C);
            MultiplyMatrix(mLEye, C);
            MultiplyMatrix(mREye, C);
            MultiplyMatrix(mNose, C);
            MultiplyMatrix(mTail, C);
            MultiplyMatrix(mBody, C);
            MultiplyMatrix(mLFoot, C);
            MultiplyMatrix(mRFoot, C);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < catMatrix.length; i++) {
                    myCat.draw(catMatrix[i]);
            }
            console.log("Up pressed");
            break;
        case "ArrowDown":
            MultiplyMatrix(mLEar, D);
            MultiplyMatrix(mREar, D);
            MultiplyMatrix(mHead, D);
            MultiplyMatrix(mLEye, D);
            MultiplyMatrix(mREye, D);
            MultiplyMatrix(mNose, D);
            MultiplyMatrix(mTail, D);
            MultiplyMatrix(mBody, D);
            MultiplyMatrix(mLFoot, D);
            MultiplyMatrix(mRFoot, D);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < catMatrix.length; i++) {
                    myCat.draw(catMatrix[i]);
            }
            console.log("Down pressed");
            break;
        case "r":
            RotateObj(mLEar, 0.01);
            RotateObj(mREar, 0.01);
            RotateObj(mHead, 0.01);
            RotateObj(mLEye, 0.01);
            RotateObj(mREye, 0.01);
            RotateObj(mNose, 0.01);
            RotateObj(mTail, 0.01);
            RotateObj(mBody, 0.01);
            RotateObj(mLFoot, 0.01);
            RotateObj(mRFoot, 0.01);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < catMatrix.length; i++) {
                myCat.draw(catMatrix[i]);
        }
    }
});
//--------------------------------------------------------------------
//-----------------------------Поворот-------------------------------
function RotateObj(A,f){
    let mtxRotate = [
        [Math.cos(f), Math.sin(f), 0],
        [-Math.sin(f),Math.cos(f), 0],
        [0, 0,  1] 
    ]
    var rowsA = A.length,
        rowsB = mtxRotate.length,
        colsB = mtxRotate[0].length;
        for (var k = 0; k < colsB; k++) {
            for (var i = 0; i < rowsA; i++) {
                var t = 0;
                for (var j = 0; j < rowsB; j++) t += A[i][j] * mtxRotate[j][k];
                A[i][k] = t;//Number(t.toFixed(1));
            }
        }
        console.log("A ", A)
        return A;
}
//-----------------------------------------------------------------
//---------------------------Масштабирование-----------------------
function Scale(A,k){
    let scaleMatrix=[
        [k, 0, 0],
        [0, k, 0],
        [0, 0, 1]
    ]
    MultiplyMatrix(A, scaleMatrix);
}
