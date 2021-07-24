for(let i=0;i<5;i++){
    console.log(i);
}

console.log("working with integer array")
let reviews: number[] = [5,4,3,4.5,3,5];
let total:number = 0;
for(let i=0;i<reviews.length;i++){
    console.log(reviews[i]);
    total = total+reviews[i];
}

let average:number = total/reviews.length;
console.log(" average = " + average);

console.log("working with string arrays")

let names:string[] = ["apple","orange"];
names.push("lemon");
for(let name of names){
    if(name == "apple"){
        console.log("its an apple");
    }else{
        console.log("it's not an apple")
    }
}
