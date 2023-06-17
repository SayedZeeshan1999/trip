var bus1={
    name : "vishva travels",
      cost : 500,
      
      
    };
    
    var bus2={
    name : "Azeem travels",
      cost : 1000,
    
    };
    
    var bus3={
    name : "Dholphine travels",
      cost : 1500,
    
    }
    
    let cost = prompt("Enter your budget")
    
    
    if(cost >=500 && cost<1000){
      console.log("you have must select vishava travels")
    }
    else if (cost >=1000 && cost <1500){
       console.log("you have must select Azeem travels")
    }
    else if(cost >1000 && cost <=1500){
      console.log("you have must select dolphine travels")
    }
    else if(cost<500 && cost>0 ){
      console.log("you can use other travels")
    }
    
    let age = prompt("Enter your age")
    
    if(age>=18){
      console.log(" you have to pay full ticket");
    } else{
       console.log("you have to pay half ticket");
    }
    