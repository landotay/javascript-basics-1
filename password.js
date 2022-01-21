const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome weak human.")

reader.question("Please validate password.", function(input){
	token = input.split(' ');
  
input = token[0]

if(input.length >= 10){

  console.log("Success")
}else if(input.length < 10){
  console.log("Your password failed bitch. Get good scrub.")

}

	
	reader.close()

});