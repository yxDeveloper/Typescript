// 创建枚举
enum Gender {
  Male,
  Female
}

// 创建变量，使用枚举作为类型
let userGender: Gender

userGender = Gender.Female
// userGender = Gender.Male

console.log(userGender);

// 错误演示：
// Gender.Female = '男'