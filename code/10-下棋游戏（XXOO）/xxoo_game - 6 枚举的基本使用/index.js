// 创建枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
// 创建变量，使用枚举作为类型
var userGender;
userGender = Gender.Female;
// userGender = Gender.Male
console.log(userGender);
// 错误演示：
// Gender.Female = '男'
