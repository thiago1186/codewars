function zero(obj) {let number = 0; return obj ? obj.operator(number) : number;}
function one(obj) {let number = 1; return obj ? obj.operator(number) : number;}
function two(obj) {let number = 2; return obj ? obj.operator(number) : number;}
function three(obj) {let number = 3; return obj ? obj.operator(number) : number;}
function four(obj) {let number = 4; return obj ? obj.operator(number) : number;}
function five(obj) {let number = 5; return obj ? obj.operator(number) : number;}
function six(obj) {let number = 6; return obj ? obj.operator(number) : number;}
function seven(obj) {let number = 7; return obj ? obj.operator(number) : number;}
function eight(obj) {let number = 8; return obj ? obj.operator(number) : number;}
function nine(obj) {let number = 9; return obj ? obj.operator(number) : number;}


function plus(number) { return {operator:function(otherNumber){return otherNumber+this.number},number:number}}
function minus(number) { return {operator:function(otherNumber){return otherNumber - this.number},number:number}}
function times(number) { return {operator:function(otherNumber){return otherNumber*this.number},number:number}}
function dividedBy(number) { return {operator:function(otherNumber){return parseInt(otherNumber/this.number)},number:number}}
