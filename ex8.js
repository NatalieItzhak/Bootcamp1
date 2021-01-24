var i;
for (i=0; i <101; i++) {  
    if (i % 7 == 0 || i / 10 ==7 || i % 10 ==7 || i.toString().indexOf("7")>-1) 
    {
      console.log("BOOM");    
    }
    else {
      console.log(i);
    }
}





