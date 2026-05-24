// ! areYouPlayingBanjo codewars
// 1 st way
// function areYouPlayingBanjo(name) {
//   return (
//     name +
//     (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
//     " banjo"
//   );
// }

// // 2nd way
// function areYouPlayingBanjo(name) {
//   if (name[0].toLowerCase() === "r") {
//     return name + " plays banjo";
//   } else {
//     return name + " does not play banjo";
//   }
// }
// // 3 nd way
// function areYouPlayingBanjo(name) {
//   if (name.match(/^r/i)) {
//     return name + " plays banjo";
//   } else {
//     return name + " does not play banjo";
//   }
// }

// areYouPlayingBanjo("Adam");

// // 4 nd way but not working in codewars
// function areYouPlayingBanjo(name) {
//   if (name.substring(0, 1) === "R" && "r") {
//     console.log(name + " plays banjo");
//   } else {
//     console.log(name + " does not play banjo");
//   }
// }

// areYouPlayingBanjo("Rejo");

