// factorial of given number

// function solver(num)
// {
//     let ans =1;
//     while(num!=1)
//     {
//         ans *=num;
//         num--;
//     }
//     console.log("factorial is : "+ans)
// }

// solver(5)

// prme number or not

// function solver(num)
// {
//     if(num==0 || num==1)
//         return true
//     for(let i=2;i<num/2;i++)
//     {
//         if(num%i==0)
//             return false;
//     }
//     return true;
    
// }

// let res = solver(6)
// console.log(res)

//fibonacci series up to given number

// function solver(num)
// {
//     let first =  0;
//     let second = 1;

//     console.log(first +" ");
//     console.log(second +" ")
//     for(let i=0;i<num-2;i++)
//     {
//         let temp= first+second;
//         console.log(temp+" ");
//         first = second;
//         second = temp;
//     }
// }

// solver(10);


// let str = "lorem ispum chudito phudiot";

// function solver(str)
// {
//     let temp = str;
//     str = ""
//     let arr = temp.split(" ");
//     let size = temp.split(" ").length;


//     for(let i=0;i<size;i++)
//     {
//        str+=  arr[i].slice(0,1).toUpperCase()+arr[i].slice(1)+" ";
//     }
//     console.log(str)
// }
// solver(str);

// reverse string without using sort method
// let arr = [10,20,30,10,40];
// arr = Array.from(new Set(arr))
// console.log(arr)

//find longest word in the string

let str = "lorem is pum chudito check";

function solver(str)
{
    let size = str.split(" ").length;
    let arr = str.split(" ");
    let index = 0;
    let high = arr[0].length;
    for(let i=1;i<size;i++)
    {
        if(arr[i].length>high)
            {
                index = i;
                high = arr[i].length;

            }
    }
    console.log("longest word :" ,arr[index])
    console.log("noOfCharactre: ",high);
}


solver(str)
