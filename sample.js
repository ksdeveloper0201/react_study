console.log("hello")

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん`);
sayHello();

import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`
console.log("hello")

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん`);
// sayHello();
/**
 * スプレッド構文
 */
//配列の展開
const arr1 = [1, 2];
// console.log(arr1)
// console.log(...arr1)

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6)
const arr7 = [...arr4, ...arr5]
console.log(arr7)
// const arr8 = [arr4, arr5]
// console.log(arr8[1][0])

// const arr9 = arr4;
// arr9[0] = 100;
// console.log(arr4)

//配列のコピーがしたいときはスプレッド構文を利用する

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "じゃけえ"]
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

const newNameArr = nameArr.map((name) => {
  if (name === "じゃけえ") {
    return name
  } else {
    return `${name}さん`
  }
})
console.log(newNameArr)

// const nameArr2 = nameArr.map((name)=>{
//   return `${name}さん`;
// })
// console.log(nameArr2);
//↑は値を返しているからそのままリストの要素として格納されていく

nameArr.map((name) => console.log(name));
//↑は一回づつconsolelogへの表示をするという形で処理をして行っている

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr)

const nameArr1 = ["田中", "山田", "じゃけえ"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`))

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
const val1 = 1 < 0 ? "trueです" : "falseです";
console.log(val1)

const num = "1300";
console.log(num.toLocaleString());

const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください"
console.log(formattedNum)

const checkSum = (num1, num2) => {
    return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です"
}
console.log(checkSum(50, 40))

/**
 * 論理演算子の本当の意味を知ろう
 */

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
    console.log("1か2がtrueの場合")
}
if (flag1 && flag2) {
    console.log("1も2もtrueの場合")
}

// ||は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);