var year=2000;
//checking wheater year is divisible by 4 or not
if (year%4==0)
 {      
     if(year%100==0)//checking year is divisible by 100 or not
     {
        if(year%400==0)//checking year is divisible by 400 or not
            console.log("This is Leap Year");
        else 
            console.log("This is not leap year");
     }
     else
        console.log("This is leap year");
  }else
            console.log("This is not leap year");