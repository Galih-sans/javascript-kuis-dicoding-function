const minimal = (a,b) =>{
	if(a<b){
      return a;
    }else if(a==b){
     return a;
    }else{
     return b; 
    }
}

const power = (a,b) => a**b; 


minimal(5,2)
power(7, 3)
power(3, 3)
power(4, 0.5)

module.exports = { minimal, power };
