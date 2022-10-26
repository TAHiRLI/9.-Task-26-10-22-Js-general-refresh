// ========================== Task 1 =============================
{
// method 1
const array = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
let uniqueArr = new Set(array);
console.log(uniqueArr);


// method 2  
let newArr =[];

for (const item of array) {
    if(!newArr.includes(item))
        newArr.push(item);
}

console.log(newArr)
}

// ========================== Task 2 =============================
{
    let array = [1,2,-3,4,-5,6];
    let myArr =  array.reduce((a,b)=>{
        if(b> 0 )
        a.push(b*b);
        return a;
    },[])
    console.log(myArr);

}

// ========================== Task 3 =============================
{
    let str = 'Programming';

   let result = str.split('').reduce((a,b)=>{
        a.unshift(b);
        return a;
    },[])

    console.log(...result);

    
}