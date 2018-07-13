var str="w3schools and schools are good"
console.log(str.match(/schools/g));
//'g' is used for global search
//'i' is used for case-INsensitive

var str2="w3schools and schools are good"
console.log("searching globally " + str2.search(/schools/g));

var str1="\nschools \nschools are good \nschools are too good"
console.log(str1.match(/schools/m));

//characted match
var str1="\nschools \nschools are good \nschools are too good"
console.log(str1.match(/[s]/g));

var str1="12322124567889"
console.log(str1.match(/[1-4]/g));