
var katzDeli = []       //create the deli

var katzDeliLine = []   //create the deli line (whats the difference?)



//PART ONE
function takeANumber(queue, name){
  //add the new person to the end of the line
  queue.push(name)
  //get there place in line
  var place = queue.length
  //welcome that person
  return `Welcome, ${name}. You are number ${place} in line.`
}


//PART TWO
function nowServing(){

  if(katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  } else {
    var customer = katzDeliLine[0]
    katzDeliLine = katzDeliLine.slice(1)
    return `Currently serving ${customer}.`
  }
}


//PART THREE ${i === 0 ? '' : 's'}
function currentLine(queue){

  if(queue.length < 1 ){
    return "The line is currently empty."
  } else {
    var count = 1
    return `The line is currently: ${condition ? val1 : val2 }
  }
}
