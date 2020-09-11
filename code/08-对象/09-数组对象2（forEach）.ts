let songs2: Array<string> = ['五环之歌', '探清水河', '晴天']

// 使用for循环，遍历数组：
for (let i: number = 0; i < songs2.length; i++) {
  console.log('索引为', i, '元素为', songs2[i])
}

// 使用forEach方法，遍历数组：
songs2.forEach((item, i) => {
  console.log('索引为', i, '元素为', item)
})

// 3:10