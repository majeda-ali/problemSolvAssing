
//Anton and Danik 
let Numgame=6;
let result_Game=["D","A","D","A","D","A"];
let countA=0;
let countD=0;

for (let i=0; i < result_Game.length ; i++)
{
if (result_Game[i]==="A")
{
    console.log(result_Game[i])

    countA=countA+1;
console.log(countA)
}
else if(result_Game[i]==="D"){
    countD=countD+1;
}
}


if(countA > countD)
{
console.log("Anton");
}
else if(countA <countD)
{
    console.log("Danik")

}
else {
    console.log("Frienship")
}
