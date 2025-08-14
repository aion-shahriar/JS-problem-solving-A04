

function totalFine( fare ) {

    if(typeof fare !== 'number') return "Invalid";
    else if(fare<=0) return "Invalid";
    else return fare+(fare*0.2)+30;
}

// console.log(totalFine(200))
// console.log(totalFine(0))
// console.log(totalFine(50))
// console.log(totalFine(552))
// console.log(totalFine(-35))
// console.log(totalFine("65"))
// console.log(totalFine("Gorib tai ticket katinai"))




function  onlyCharacter( str ) {
        
    if(typeof str !== "string") return "Invalid";
    else {
        let ans="";
        for(let char of str) {
            if(char==" ") continue;
            else ans+=char;
        }
        ans=ans.toUpperCase();
        return ans;
    }
}

// console.log(onlyCharacter("h e llo wor ld"))
// console.log(onlyCharacter("Cy ber- At tac k "))
// console.log(onlyCharacter("ha ck m e 1 @ru.c n "))
// console.log(onlyCharacter("Serv er::Do wn"))
// console.log(onlyCharacter(["hack", "me"]))
// console.log(onlyCharacter(true))






function  bestTeam( player1, player2 ) {
          
    if(typeof player1 !== 'object' || typeof player2 !== 'object') return "Invalid";
    else {
        let foul1=player1.foul+player1.cardY+player1.cardR;
        let foul2=player2.foul+player2.cardY+player2.cardR;

        if(foul1==foul2) return "Tie";
        else if(foul1<foul2) return player1.name;
        else return player2.name;
    }
}


// console.log(bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },{ name: "Argentina", foul: 7, cardY: 0, cardR: 0 }))
// console.log(bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },{ name: "Sweden", foul: 7, cardY: 4, cardR: 1 }))
// console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },{ name: "France", foul: 10, cardY: 2, cardR: 1 }))
// console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"))








function  isSame(arr1 , arr2 ) {

    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid";
    else if(arr1.length!=arr2.length) return false;
    else {
        for(let i=0;i<arr1.length;i++) {
            if(arr1[i]!==arr2[i]) {
                return false;
            }
        }
        return true;
    }
}

// console.log(isSame([1, 2, 3] , [1 , 2 , 3]))
// console.log(isSame([34 , 5 ,7 ,9 ], [ 34 , 5 , 7 ]))
// console.log(isSame([1, undefined , 3] , [1,null ,3]))
// console.log(isSame([1 , 4 , 5] ,[1 , 4 , 5]))
// console.log(isSame([1 , "4" , 4], [1 , 4  , 4]))
// console.log(isSame([2 , 5 , 6] ,256))
// console.log(isSame({data: [2 , 5 , 6] } , [2 , 5 , 6]))





function  resultReport( marks ) {
        
    if(!Array.isArray(marks)) return "Invalid";
    
    let passCnt=0;
    let failCnt=0;
    let sum=0;
    let avg=0;

    for(let num of marks) {
        if(num>=40) passCnt++;
        else failCnt++;
        sum+=num;
    }
    
    if(marks.length){
        avg=Math.round(sum/marks.length)
    }
    
    let ansObj={finalScore: avg, pass: passCnt, fail: failCnt};
    return ansObj;
          
}

// console.log(resultReport([]))
// console.log(resultReport([98, 87, 67, 91, 92, 33, 87]))
// console.log(resultReport([99, 87, 67, 12 ,87]))
// console.log(resultReport([99]))
// console.log(resultReport(100))










