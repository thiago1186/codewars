decodeMorse = function(morseCode){
  return morseCode.split(" ").reduce((a,b) => a + (b.length > 0 ? MORSE_CODE[b] : " "),"").replace(/\s+/g," ").trim();
}
