// MITASK-B
function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      count += 1;
    }
  }
  return count;
}

countDigits("ad2a54y79wet0sfgb9");



// MITASK-A
function countLetter(letter, word) {
  let identicals = 0;
  for(let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      identicals += 1
    }
  };
  return identicals;
};

console.log("we have these many identical letters:", countLetter("e", "devex academy"));


// ========================================================



console.log("Jack Ma maslahatlari");

const list = [
  "yaxshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato giling", // 20-30
  "uzingizga ishlashni boshlang", // 30-40
  "siz kuchli bolgan narsalarni giling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

//callback function
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// maslahatBering(70, (error, data) => {
//   if (error) console.log(error, "ERROR");
//   else {
//     console.log("answer:", data);
//   }
// });

async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5])
      }, 5000) 
    });
    // setTimeout(function () {
    //   callback(null, list[5]);
    // }, 5000);
  }
}

// then/catch
// console.log("Passed here 0");
// maslahatBering(65)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((error) => {
//     console.log("error:", error);
//   });
// console.log("Passed here 1");


// async/await
async function run() {
  let javob = await maslahatBering(25);
  console.log(javob);
  javob = await maslahatBering(75);
  console.log(javob);
  javob = await maslahatBering(45);
  console.log(javob);
}
run();
