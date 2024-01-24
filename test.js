const arr = [1,2,3,4];
const res = arr.reduce((a,i)=>{
    console.log(a);
    return  a + i
},[])

console.log( "aee =>",res);