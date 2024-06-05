function firstNonRepeatedChar(str) {
    // Write your code here
    let size = 26;
    let arr = [...Array(size)].fill(0);
     
    for(let i=0; i<str.length; i++)
    {
        let val = str.charCodeAt(i)-97;
        arr[val] = arr[val]+1;
    }

    console.log(arr);

    for(let i=0;i<str.length; i++)
    {
        let val = str.charCodeAt(i)-97;
        if(arr[val] == 1)
        {
            return str[i];
        }
    }
   }
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
