/*
 * @Author: your name
 * @Date: 2020-09-17 01:50:59
 * @LastEditTime: 2020-09-17 02:06:16
 * @LastEditors: Please set LastEditors
 * @Description: TS class
 * @FilePath: \Typescript\code\TS补充3.ts
 */
/* 这里提前说一下TypeScrip的继承和ES6中的继承是一样的。关键字也是extends,
比如我们这里新建一个XiaoJieJie的类，然后继承自Lady类，在XiaoJieJie类里
写一个新的方法，叫做sayLove,具体代码如下。 */
// class Lady{
//     content='Hi，帅哥'
//     sayHello(){
//         return this.content
//     }
// }
// class XiaoJieJie extends Lady{
//     sayLove(){
//         return 'I love you'
//     }
// }

// const goddess = new XiaoJieJie()
// console.log(goddess.sayHello())
// console.log(goddess.sayLove())

// 类写好以后，我们声明的对象是XiaoJieJie这个类，我们同时执行sayHello()和sayLove()都是可以执行到的，这说明继承起作用了。
/* 
说了继承，那就必须继续看看重写，重写就是子类可以重新编写父类里边的代码。
现在我们在XiaoJieJie这个类里重写父类的sayHello()方法，比如现在我们觉的叫的不够亲切，我们改成下面这个样子。 */

// class XiaoJieJie1 extends Lady{
//     sayLove(){
//         return 'I love you!'
//     }
//     sayHello(){
//         return  'Hi , honey!'
//     }
// }
// const goddess1 = new XiaoJieJie1()
// console.log(goddess1.sayHello())
// console.log(goddess1.sayLove())

/* 我们再多讲一点，就是super关键字的使用，比如我们还是想使用Lady类中说的话，
但是在后面，加上你好两个字就可以了。这时候就可以使用super关键字，它代表父类
中的方法。那我们的代码就可以写成这个样子了。 */

// class XiaoJieJie2 extends Lady{
//     sayHello() {
//         return super.sayHello() + '你好！'
//     }
//     sayLove() {
//         return 'I love you!'
//     }
//     content = 'lala'
// }
// const goddess2 = new XiaoJieJie2()
// console.log(goddess2.sayHello())
// console.log(goddess2.sayLove())

// class XiaoJieJie2 extends Lady{
//     sayLove(){
//         return 'I love you!'
//     }
//     sayHello(){
//         return  super.sayHello()+'。你好！'
//     }
// }

