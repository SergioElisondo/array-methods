let chars = ['A', 'B', 'A', 'C', 'B'];

const findDups = chars.filter((element, index) => {
  return chars.indexOf(element) === index
})

console.log(findDups)