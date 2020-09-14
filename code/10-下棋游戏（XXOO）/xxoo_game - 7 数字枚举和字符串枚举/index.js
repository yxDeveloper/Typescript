// enum Gender {
//   Female = '女',
//   Male = '男',
//   A = '不详'
// }
// 查看枚举成员的值：
// let userGender: Gender = Gender.Female
// console.log(userGender)
// console.log(Gender.Female)
// console.log(Gender.Male)
// console.log(Gender.A)
// 给数字枚举设置初始值
// enum Gender {
//   Female = 1,
//   Male = 100,
//   A
// }
// // // 查看枚举成员的值：
// let userGender = Gender.A
// console.log(userGender)
// console.log(Gender.Female)
// console.log(Gender.Male)
// console.log(Gender.A)
// 数字枚举的默认情况：
var Gender;
(function (Gender) {
    Gender[Gender["Female"] = 0] = "Female";
    Gender[Gender["Male"] = 5] = "Male";
    Gender[Gender["A"] = 6] = "A";
})(Gender || (Gender = {}));
// // 查看枚举成员的值：
var userGender = Gender.A;
console.log(userGender);
console.log(Gender.Female);
console.log(Gender.Male);
console.log(Gender.A);
