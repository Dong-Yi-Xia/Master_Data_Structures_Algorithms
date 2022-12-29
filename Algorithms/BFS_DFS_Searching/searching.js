// linear seraching

let beasts = ['dog', 'cat', 'snake', 'horse']

beasts.indexOf('snake') //2

beasts.findIndex(item => item === 'snake')    //2

beasts.find(item => item === 'snake') //snake

beasts.includes('snake') //true