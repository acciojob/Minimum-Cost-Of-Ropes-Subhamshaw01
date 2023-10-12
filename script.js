let sum=function calculateMinCost(arr) {
	return function (a){
		return function(b){
			if(b){
				return sum(a+b);
			}
			return a;
		}
	}
	console.log(sum(arr));
  //your code here
  
  
  
}  
