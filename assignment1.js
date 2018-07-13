// var array=[1,2,3,4]


var fun1=function(array){
	if(array.length == 0){
		array.push(1,2,3,4,5);
		// var arrayToString = array.toString();
		return array.toString();
		
	}
	else {
		
		// console.log('HI');
		// var ArrayToString1 = array.toString();
		return array.toString();
			}
			
		}

		console.log(fun1(['param', 1, 5, 7]));