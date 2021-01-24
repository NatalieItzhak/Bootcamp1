var input = require('readline-sync');
var n = input.question("Please enter a vaild number ");

for (i=1; i<=n; i++)
{
  if (isPrime(i)){
      console.log(i);
    }
}

function isPrime(n)
{
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}


