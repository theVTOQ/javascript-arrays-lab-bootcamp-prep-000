var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(name)
  return kittens
}

function appendKitten(name){
  return kittens.concat(name)
}

function prependKitten(name){
    return [name, ...kittens]
}

function removeLastKitten(){
  return kitten.splice(0, kitten.length - 1)
}

function removeFirstKitten(){
  return kitten.splice(1)
}