// // "use strict";
// // //function syntax
// // function logger() {
// //   console.log("My name is faran");
// // }
// // //Calling, running or invoking
// // logger();
// // logger();
// // logger();
// // function sandwichProcessor(breadslice, sausage) {
// //   console.log(breadslice, sausage);
// //   const sandwich = `This sandwich has ${sausage} sausage and ${breadslice} Breadslices`;
// //   return sandwich;
// // }
// // console.log(sandwichProcessor(18, 64));
// // const byear = 1997;
// // const agereturn = (agecall) => 2022 - byear;
// // console.log(agereturn());

// function slicer(fruit) {
//   return fruit * 4;
// }
// function juicer(apples, bananas) {
//   const aslices = slicer(apples);
//   const bslices = slicer(bananas);
//   return `This juice contains ${apples} apples with ${aslices} and ${bananas} bananas with ${bslices}`;
// }
// console.log(juicer(2, 3));
// // const doblusRCalculator = (yob) => {
// //   const age = 2022 - yob;
// //   const retirement = 65 - age;
// //   return `Your Age is ${age} and you will retire in ${retirement} years `;
// // };

// // console.log(doblusRCalculator(1997));
// const calcAevrage = (a, b, c) => (a + b + c) / 3;

// function checkWiner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(
//       `Dolphins Won the match and the score is ${avgDolphins} vs / ${avgKoalas}`
//     );
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(
//       `Koalas Won the match and the score is ${avgKoalas} vs / ${avgDolphins}`
//     );
//   } else if (avgDolphins == avgKoalas) {
//     console.log(`No one won the Match :( Its a Draw`);
//   } else {
//     console.log("No one is Winner");
//   }
// }
// let davg = calcAevrage(85, 54, 41);
// let kavg = calcAevrage(23, 34, 27);
// console.log(checkWiner(davg, kavg));
// const aime = ["retro", "punchy", "jad"];
// console.log(aime);
// const pbx = new Array(1, 2, 3, 4);
// console.log(pbx);
const faran = {
  firstName: "Faran",
  lastName: "Javed",
  title: "Web Developer",
  job: "Wen Developemnt",
  Experience: "8 months",
};
faran.age = "25";
console.log(faran);
faran["driver"] = "No";
const intrestedin = prompt(
  "What you want to know about Faran Choose between firstName,lastName,age, Driver, title,job and experience"
);
if (intrestedin) {
  console.log(intrestedin);
  console.log(faran[intrestedin]);
} else {
  console.log("Please choose the right option");
}
