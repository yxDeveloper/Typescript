/*
 * @Author: your name
 * @Date: 2020-09-07 20:34:24
 * @LastEditTime: 2020-09-16 23:32:16
 * @LastEditors: Please set LastEditors
 * @Description: TS补充
 * @FilePath: \Typescript\code\TS补充2.ts
 */
const jianXiaoJieJie : ()=> string =()=>{return '大脚'}

const zhaXiaoJieJie: () => void = () => {}

let jiLaLa: (lala: string) => boolean = (lala: string) => {
    return true
}

enum lalala {
    la,
    zh
}
interface lala {
    la: string
    ji: string
}

let state: lalala = lalala.la

// const XiaoJieJie: String[] = ['1','2','3']
const XiaoJieJie: string[] = ['1','2','true']
// error: const XiaoJieJie: string[] = ['1','2',true]


console.log(XiaoJieJie);
