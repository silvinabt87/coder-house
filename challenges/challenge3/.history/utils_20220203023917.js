const getRandomArbitrary=(min, max)=> {
  return Math.random() * (max - min) + min;
}

exports.module=getRandomArbitrary