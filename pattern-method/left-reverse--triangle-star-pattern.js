let n = 5;
for (let i = n; i >= 1; i--) 
{
    let str = '';
    
    for (let j = 1; j <= 2 * n; j++) 
    {
        if (i + j >= n + 1 && (i >= j - n + 1)) 
        {
                        str +=  '*';
          
        } 
        else {
                        str += '  ';
        }
    }
 
  