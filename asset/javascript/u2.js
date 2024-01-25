// function crushCandy() {
//     crushThree();
//     // document.getElementById("score").innerText = score;
 

// }

var swordPoint = 0

var melonPoint = 0

var yingyangPoint = 0

var starPoint = 0
var heartPoint = 0
var waterPoint = 0

// var dtt = 0
function crushThree() {
    //check rows
    
    for (let r = 0; r < rows; r++) {
        // for (let c = 0; c < columns-6; c++) {
        //     let candy1 = board[r][c];
        //     let candy2 = board[r][c+1];
        //     let candy3 = board[r][c+2];
        //     let candy4 = board[r][c+3];
        //     let candy5 = board[r][c+4];
        //     let candy6 = board[r][c+5];
        //     let candy7 = board[r][c+6];
        //     if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && candy5.src == candy6.src && candy6.src == candy7.src && !candy1.src.includes(blank)) {
        //         // switch(candy1.src) {
        //         //     case sword: {
        //         //         swordPoint += 70
        //         //         console.log(swordPoint)
        //         //         break;
        //         //     }

        //         //     case melon: {
        //         //         melonPoint += 70
        //         //         break;
        //         //     }

        //         //     case yingyang: {
        //         //         yingyangPoint += 70
        //         //         break;
        //         //     }

        //         //     case star: {
        //         //         starPoint += 70
        //         //         break;
        //         //     }
        //         //     case heart: {
        //         //         heartPoint += 70
        //         //         break;
        //         //     }
        //         //     case water: {
        //         //         waterPoint += 70
        //         //         break;
        //         //     }

        //         // }
        //         setTimeout(function() {
        //         candy1.src = blank;
        //         candy2.src = blank;
        //         candy3.src = blank;
        //         candy4.src = blank;
        //         candy5.src = blank;
        //         candy6.src = blank;
        //         candy7.src = blank;

                
        //         },400)
        //     }
        // }
        // for (let c = 0; c < columns-5; c++) {
        //     let candy1 = board[r][c];
        //     let candy2 = board[r][c+1];
        //     let candy3 = board[r][c+2];
        //     let candy4 = board[r][c+3];
        //     let candy5 = board[r][c+4];
        //     let candy6 = board[r][c+5];
        //     if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && candy5.src == candy6.src && !candy1.src.includes(blank)) {
        //         switch(candy1.src) {
        //             case sword: {
        //                 candy1.src = sword1
        //                 break;
        //             }

                  

        //         }
        //         setTimeout(function() {
        //             candy1.src = blank;
        //             candy2.src = blank;
        //             candy3.src = blank;
        //             candy4.src = blank;
        //             candy5.src = blank;
        //             candy6.src = blank;
              
        //             },400)
             
        //     }
        // }
        // for (let c = 0; c < columns-4; c++) {
        //     let candy1 = board[r][c];
        //     let candy2 = board[r][c+1];
        //     let candy3 = board[r][c+2];
        //     let candy4 = board[r][c+3];
        //     let candy5 = board[r][c+4];
        //     if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && !candy1.src.includes(blank)) {
        //         switch(candy1.src) {
        //             case sword: {
        //                 swordPoint += 50
        //                 console.log(swordPoint)
        //                 break;
        //             }

        //             case melon: {
        //                 melonPoint += 50
        //                 break;
        //             }

        //             case yingyang: {
        //                 yingyangPoint += 50
        //                 break;
        //             }

        //             case star: {
        //                 starPoint += 50
        //                 break;
        //             }
        //             case heart: {
        //                 heartPoint += 50
        //                 break;
        //             }
        //             case water: {
        //                 waterPoint += 50
        //                 break;
        //             }

        //         }
        //         setTimeout(function() {
        //             candy1.src = blank;
        //             candy2.src = blank;
        //             candy3.src = blank;
        //             candy4.src = blank;
        //             candy5.src = blank;
                 
        //             },400)
               
        //     }
        // }


        for (let c = 0; c < columns-3; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            let candy4 = board[r][c+3];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && !candy1.src.includes(blank)) {
               
                setTimeout(function() {
                   

                    if (candy2.width == 117 || candy2.width == 116) {
                        switch(candy2.src) {
                        case sword: {
                            candy2.src = sword1 
                            
                            break;
                        }

                        
                  
                    
    
                     
    
                    }
                    candy3.src = blank;
                    candy4.src = blank;
                    candy1.src = blank;
                    }
                   
                    },400)
              
            }
        }


        
        // for (let c = 0; c < columns-2; c++) {
        //     let candy1 = board[r][c];
        //     let candy2 = board[r][c+1];
        //     let candy3 = board[r][c+2];
        //     if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes(blank)) {
        //         switch(candy1.src) {
        //             case sword: {
        //                 swordPoint += 30
        //                 console.log(swordPoint)
        //                 break;
        //             }

        //             case melon: {
        //                 melonPoint += 30
        //                 break;
        //             }

        //             case yingyang: {
        //                 yingyangPoint += 30
        //                 break;
        //             }

        //             case star: {
        //                 starPoint += 30
        //                 break;
        //             }
        //             case heart: {
        //                 heartPoint += 30
        //                 break;
        //             }
        //             case water: {
        //                 waterPoint += 30
        //                 break;
        //             }

        //         }
        //         setTimeout(function() {
        //             candy1.src = blank;
        //             candy2.src = blank;
        //             candy3.src = blank;
                  
        //             },400)
                
        //     }
        // }
    }

    //check columns
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows-8; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            let candy4 = board[r+3][c];
            let candy5 = board[r+4][c];
            let candy6 = board[r+5][c];
            let candy7 = board[r+6][c];
            let candy8 = board[r+7][c];
            let candy9 = board[r+8][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && candy5.src == candy6.src && candy6.src == candy7.src && candy7.src == candy8.src && candy8.src == candy9.src &&!candy1.src.includes(blank)) {
                 switch(candy1.src) {
                    case sword: {
                        swordPoint += 90
                        console.log(swordPoint)
                        break;
                    }

                    case melon: {
                        melonPoint += 90
                        break;
                    }

                    case yingyang: {
                        yingyangPoint += 90
                        break;
                    }

                    case star: {
                        starPoint += 90
                        break;
                    }
                    case heart: {
                        heartPoint += 90
                        break;
                    }
                    case water: {
                        waterPoint += 90
                        break;
                    }

                }
                setTimeout(function() {
                    candy1.src = blank;
                    candy2.src = blank;
                    candy3.src = blank;
                    candy4.src = blank;
                    candy5.src = blank;
                    candy6.src = blank;
                    candy7.src = blank;
                    candy8.src = blank;
                    candy9.src = blank;
                    },400)
           
            }
        }

        for (let r = 0; r < rows-7; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            let candy4 = board[r+3][c];
            let candy5 = board[r+4][c];
            let candy6 = board[r+5][c];
            let candy7 = board[r+6][c];
            let candy8 = board[r+7][c];
      
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && candy5.src == candy6.src && candy6.src == candy7.src && candy7.src == candy8.src &&!candy1.src.includes(blank)) {
                 switch(candy1.src) {
                    case sword: {
                        swordPoint += 80
                        console.log(swordPoint)
                        break;
                    }

                    case melon: {
                        melonPoint += 80
                        break;
                    }

                    case yingyang: {
                        yingyangPoint += 80
                        break;
                    }

                    case star: {
                        starPoint += 80
                        break;
                    }
                    case heart: {
                        heartPoint += 80
                        break;
                    }
                    case water: {
                        waterPoint += 80
                        break;
                    }

                }
                setTimeout(function() {
                    candy1.src = blank;
                    candy2.src = blank;
                    candy3.src = blank;
                    candy4.src = blank;
                    candy5.src = blank;
                    candy6.src = blank;
                    candy7.src = blank;
                    candy8.src = blank;
                 
                    },400)
              
            }
        }

        for (let r = 0; r < rows-6; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            let candy4 = board[r+3][c];
            let candy5 = board[r+4][c];
            let candy6 = board[r+5][c];
            let candy7 = board[r+6][c];
           
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && candy5.src == candy6.src && candy6.src == candy7.src &&!candy1.src.includes(blank)) {
                 switch(candy1.src) {
                    case sword: {
                        swordPoint += 70
                        console.log(swordPoint)
                        break;
                    }

                    case melon: {
                        melonPoint += 70
                        break;
                    }

                    case yingyang: {
                        yingyangPoint += 70
                        break;
                    }

                    case star: {
                        starPoint += 70
                        break;
                    }
                    case heart: {
                        heartPoint += 70
                        break;
                    }
                    case water: {
                        waterPoint += 70
                        break;
                    }

                }
                setTimeout(function() {
                    candy1.src = blank;
                    candy2.src = blank;
                    candy3.src = blank;
                    candy4.src = blank;
                    candy5.src = blank;
                    candy6.src = blank;
                    candy7.src = blank;
                 
                 
                    },400)
          
               
             
            }
        }

        for (let r = 0; r < rows-5; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            let candy4 = board[r+3][c];
            let candy5 = board[r+4][c];
            let candy6 = board[r+5][c];
            
           
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && candy5.src == candy6.src &&!candy1.src.includes(blank)) {
                 switch(candy1.src) {
                    case sword: {
                        swordPoint += 60
                        console.log(swordPoint)
                        break;
                    }

                    case melon: {
                        melonPoint += 60
                        break;
                    }

                    case yingyang: {
                        yingyangPoint += 60
                        break;
                    }

                    case star: {
                        starPoint += 60
                        break;
                    }
                    case heart: {
                        heartPoint += 60
                        break;
                    }
                    case water: {
                        waterPoint += 60
                        break;
                    }

                }
                setTimeout(function() {
                    candy1.src = blank;
                    candy2.src = blank;
                    candy3.src = blank;
                    candy4.src = blank;
                    candy5.src = blank;
                    candy6.src = blank;
                
                 
                    },400)
             
               
               
            }
        }

        for (let r = 0; r < rows-4; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            let candy4 = board[r+3][c];
            let candy5 = board[r+4][c];
    
            
           
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src &&!candy1.src.includes(blank)) {
                 switch(candy1.src) {
                    case sword: {
                        swordPoint += 50
                        console.log(swordPoint)
                        break;
                    }

                    case melon: {
                        melonPoint += 50
                        break;
                    }

                    case yingyang: {
                        yingyangPoint += 50
                        break;
                    }

                    case star: {
                        starPoint += 50
                        break;
                    }
                    case heart: {
                        heartPoint += 50
                        break;
                    }
                    case water: {
                        waterPoint += 50
                        break;
                    }

                }
                setTimeout(function() {
                    candy1.src = blank;
                    candy2.src = blank;
                    candy3.src = blank;
                    candy4.src = blank;
                    candy5.src = blank;
                
                
                 
                    },400)
           
             
               
              
            }
        }
        for (let r = 0; r < rows-3; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            let candy4 = board[r+3][c];
           
            
           
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src &&!candy1.src.includes(blank)) {
                 switch(candy1.src) {
                    case sword: {
                        swordPoint += 40
                        console.log(swordPoint)
                        break;
                    }

                    case melon: {
                        melonPoint += 40
                        break;
                    }

                    case yingyang: {
                        yingyangPoint += 40
                        break;
                    }

                    case star: {
                        starPoint += 40
                        break;
                    }
                    case heart: {
                        heartPoint += 40
                        break;
                    }
                    case water: {
                        waterPoint += 40
                        break;
                    }

                }
                setTimeout(function() {
                    candy1.src = blank;
                    candy2.src = blank;
                    candy3.src = blank;
                    candy4.src = blank;
                   
                
                 
                    },400)
         
           
             
             
            }
        }
        for (let r = 0; r < rows-2; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes(blank)) {
                 switch(candy1.src) {
                    case sword: {
                        swordPoint += 30
                        console.log(swordPoint)
                        break;
                    }

                    case melon: {
                        melonPoint += 30
                        break;
                    }

                    case yingyang: {
                        yingyangPoint += 30
                        break;
                    }

                    case star: {
                        starPoint += 30
                        break;
                    }
                    case heart: {
                        heartPoint += 30
                        break;
                    }
                    case water: {
                        waterPoint += 30
                        break;
                    }

                }
                setTimeout(function() {
                    candy1.src = blank;
                    candy2.src = blank;
                    candy3.src = blank;
                 
                
                 
                    },400)
             
            }
        }
    }  

 
        setTimeout(function () {
            var n = 0
           
            for (let r = 0; r < rows; r++) {
        
                for (let c = 0; c < columns; c++) {
                    if (board[r][c].src.includes(blank)) {
                        n += 1
                    }
                }
            
                if (n == 0) {
                
                    // if (dtt == 1) {
                    //     var bo= 0
                    // } else {
                    //     dtt = true
                    //     console.log(dtt)
                    //     abce = true
                    //     timm = false
                    //     time()
                    // }
                    
                    // document.querySelector(".hpBoard").innerHTML = heartPoint
                    // setTimeout(function() { document.querySelector(".hpBoard").innerHTML = 0},2000)
            
                    // document.querySelector(".starBoard").innerHTML = starPoint
                    // setTimeout(function() {document.querySelector(".starBoard").innerHTML = 0},2000)
                    // document.querySelector(".melonBoard").innerHTML = melonPoint
                    // setTimeout(function() {document.querySelector(".melonBoard").innerHTML = 0},2000)
                    
                    // document.querySelector(".swordBoard").innerHTML = swordPoint  
                    // setTimeout(function() {document.querySelector(".swordBoard").innerHTML = 0},2000)   
            
                    // document.querySelector(".yingyangBoard").innerHTML = yingyangPoint
                    // setTimeout(function() {document.querySelector(".yingyangBoard").innerHTML = 0},2000)
            
                    // document.querySelector(".manaBoard").innerHTML = waterPoint
                    // setTimeout(function() {document.querySelector(".manaBoard").innerHTML = 0},2000)


                    // wee()
         
                } else {slideCandyy()}}
    
        },800)
   


}
// var timm = false
// function wee() {
//     var a = Number(document.querySelector(".hpPointMe1").innerHTML.slice(0))
//     document.querySelector(".hpPointMe1").innerHTML = a + heartPoint

//     var a = Number(document.querySelector(".hpPointEnemy1").innerHTML.slice(0))
//     var nu = a- swordPoint
//     if (nu <= 0) {nu = 0}
//     document.querySelector(".hpPointEnemy1").innerHTML = nu
//     if (nu == 0) {setTimeout(function() {mimiGiveUp2();
//         timm = true
//         document.querySelector(".timeMe").classList.add("nonee")
//         document.querySelector(".timeEnemy").classList.add("nonee")
//     },40000)}


//     var a = Number(document.querySelector(".manaPointMe1").innerHTML.slice(0))
//     document.querySelector(".manaPointMe1").innerHTML = a + waterPoint

//     var a = Number(document.querySelector(".bsGiapDiemMe1").innerHTML.slice(0))
//     document.querySelector(".bsGiapDiemMe1").innerHTML = a + yingyangPoint

//     var a = Number(document.querySelector(".changeMe1").innerHTML.slice(0))
//     document.querySelector(".changeMe1").innerHTML = a + starPoint 




//     swordPoint = 0
//     heartPoint = 0
//     waterPoint = 0
//     yingyangPoint = 0
//     melonPoint = 0
//     starPoint = 0

// }

// function slideCandyy(){


// for (let r = 0; r < rows; r++) {

//     for (let c = 0; c < columns; c++) {
        
//         if (board[0][c].src.includes(blank)) {board[0][c].src = randomCandy()}
//         if (board[r][c].src.includes(blank)) {
//             board[r][c].src = board[r-1][c].src
//             board[r-1][c].src = blank
//         }
//     }}
        
//     setTimeout(function (){
    
//         var n = 0
//         for (let r = 0; r < rows; r++) {
    
//             for (let c = 0; c < columns; c++) {
//                 if (board[r][c].src.includes(blank)) {
//                     n += 1
//                 }
//             }
        
//             if (n == 0) {
//                 crushThree()
//             } else {slideCandyy()}
//         }
//     },150)
                
// }

function slideCandyy(){


for (let r = 0; r < rows; r++) {

    for (let c = 0; c < columns; c++) {
        if (board[0][c].src.includes(blank)) {board[0][c].src = randomCandy()}
   
        if (board[r][c].src.includes(blank)) {
            board[r][c].src = board[r-1][c].src
            board[r-1][c].src = blank
        }
    }}
        
    setTimeout(function (){
    
        var n = 0
        for (let r = 0; r < rows; r++) {
    
            for (let c = 0; c < columns; c++) {
                if (board[r][c].src.includes(blank)) {
                    n += 1
                }
            }
        
            if (n == 0) {
                crushThree()
            } else {slideCandyy()}
        }
    },400)
                
}


//cho nhân vật di chuyển
var char = document.querySelector(".meChar")
var up = document.querySelector(".upKey")
var down = document.querySelector(".downKey")
var left = document.querySelector(".leftKey")
var right = document.querySelector(".rightKey")


var goo1 = true
var idf = 0

char.style.bottom = '20px'
char.style.left = '20px'
up.addEventListener("click", go1)
function go1() {
goo2 = true
up.classList.add("focusKey")

setTimeout(function() {up.classList.remove("focusKey")},800)
goo3 = true
goo4 = true
if (goo1 == true) {
    goo1 = false
    console.log("hi1")
    
    var charbottom = Number(char.style.bottom.slice(0,-2))
    console.log("hi2")
    idf = setInterval(function() {
        var idff = true
        if (goo1 == false) {
            if (charbottom <= 1320) {
                if (charbottom < 1020) {charbottom += 20
                    char.style.bottom = charbottom + 'px'
                    console.log("hi3")}
                else if (charbottom >= 1020) {
                    var tff = 
                    document.querySelector(".gameScreen2").style.backgroundPosition.split(" ")
                    var e = Number(tff[1].slice(0,-2))
                    if (e <= 0 && e >= -2380 ) {
                    e += 20
                    if (e >= 20) { e = 0}
                    document.querySelector(".gameScreen2").style.backgroundPosition = 
                    tff[0] +" "+ e + "px"} 
                    if (e  >= 0 && charbottom >= 1020 && charbottom <= 1320) {
                        charbottom += 20
              
                    if (charbottom >= 1320)  {charbottom = 1320
                    
                    }
                    char.style.bottom = charbottom + 'px'
                    }


                }   

                up.addEventListener("click", g1)
                function g1() {
                    clearInterval(idf)
                    goo1 = true 
                    up.removeEventListener("click", g1)
                    
                }
            }
            else {clearInterval(idf)}
        }
        else {
            up.removeEventListener("click", g1)
            clearInterval(idf)}
       
    },100) 
}


}


var goo2 = true
var idf2 = 0
down.addEventListener("click", go2)
function go2() {
down.classList.add("focusKey")

setTimeout(function() {down.classList.remove("focusKey")},800)
goo1 = true
goo3 = true
goo4 = true
  if (goo2 == true) {
    goo2 = false
    console.log("hi3")
    
    var charbottom = Number(char.style.bottom.slice(0,-2))
    console.log("hi4")
    idf2  = setInterval(function() {
        if (goo2 == false) {
            
            if (charbottom >0) {


                if (charbottom > 200) {charbottom -= 20
                    char.style.bottom = charbottom + 'px'
                    console.log("hi3")}
                else if (charbottom <= 200) {
                    var tff = 
                    document.querySelector(".gameScreen2").style.backgroundPosition.split(" ")
                    var e = Number(tff[1].slice(0,-2))
                    if (e <= 0 && e >= -2380 ) {
                    e -= 20
                    if (e <= -2380) { e = -2380}
                    document.querySelector(".gameScreen2").style.backgroundPosition = 
                    tff[0] +" "+ e + "px"} 
                    if (e  <= -2380 && charbottom <= 200 && charbottom >= 0) {
                        charbottom -= 20
              
                    if (charbottom <= 0)  {charbottom = 0
                    
                    }
                    char.style.bottom = charbottom + 'px'
                    }


                }   

                down.addEventListener("click", g1)
                function g1() {
                    clearInterval(idf2)
                    goo2 = true 
                    down.removeEventListener("click", g1)
                    
                }
            }
            else {clearInterval(idf2)}
        }
        else {
            down.removeEventListener("click", g1)
            clearInterval(idf2)}
       
    },100) 
}




}


var goo3 = true
var idf3 = 0
left.addEventListener("click", go3)
function go3() {
console.log("hiiiii")
left.classList.add("focusKey")

setTimeout(function() {left.classList.remove("focusKey")},800)
goo1 = true
goo2 = true
goo4 = true
  if (goo3 == true) {
    goo3 = false
    console.log("hi3")
    
    var charleft = Number(char.style.left.slice(0,-2))
    console.log("hi4")
    idf3  = setInterval(function() {
        if (goo3 == false) {

            

            if (charleft < 880) {
                if (charleft > 240) {charleft -= 20
                    char.style.left = charleft + 'px'
                    console.log("hi3")}
                else if (charleft <= 240) {
                    var tff = 
                    document.querySelector(".gameScreen2").style.backgroundPosition.split(" ")
                    var e = Number(tff[0].slice(0,-2))
                    if (e <= 0 && e >= -1960 ) {
                    e += 20
                    if (e >= 0) { e = 0}
                    document.querySelector(".gameScreen2").style.backgroundPosition = 
                    e + "px " + tff[1]} 
                if (e  >= 0 && charleft <= 240 && charleft >= 0) {
                        charleft -= 20
              
                    if (charleft <= 0)  {charleft = 0
                    
                    }
                    char.style.left = charleft + 'px'
                    }


                } 

                left.addEventListener("click", g1)
                function g1() {
                    clearInterval(idf3)
                    goo3 = true 
                    left.removeEventListener("click", g1)
                    
                }
            }
            else {clearInterval(idf3)}
        }
        else {
            left.removeEventListener("click", g1)
            clearInterval(idf3)}
       
    },100) 
}




}


var goo4 = true
var idf4 = 0
right.addEventListener("click", go4)
function go4() {
right.classList.add("focusKey")

setTimeout(function() {right.classList.remove("focusKey")},800)
goo1 = true
goo3 = true
goo2 = true
  if (goo4 == true) {
    goo4 = false
    console.log("hi3")
    
    var charleft = Number(char.style.left.slice(0,-2))
    console.log("hi4")
    idf4  = setInterval(function() {
        if (goo4 == false) {
            if (charleft >= 0) {
               
                if (charleft < 520) {charleft += 20
                    char.style.left = charleft + 'px'
                    console.log("hi3")}
                else if (charleft >= 520) {
                    var tff = 
                    document.querySelector(".gameScreen2").style.backgroundPosition.split(" ")
                    var e = Number(tff[0].slice(0,-2))
                    if (e <= 0 && e >= -1960 ) {
                    e -= 20
                    if (e <= -1960) { e = -1960}
                    document.querySelector(".gameScreen2").style.backgroundPosition = 
                    e + "px " + tff[1]} 
                if (e  <= -1960 && charleft >= 520 && charleft <= 820) {
                        charleft += 20
              
                    if (charleft >= 820)  {charleft = 820
                    
                    }
                    char.style.left = charleft + 'px'
                    }


                } 

              
             

                right.addEventListener("click", g1)
                function g1() {
                    clearInterval(idf4)
                    goo4 = true 
                    right.removeEventListener("click", g1)
                    
                }
            }
            else {clearInterval(idf4)}
        }
        else {
            right.removeEventListener("click", g1)
            clearInterval(idf4)}
       
    },100) 
}




}


var abc = true
var abd = 0
var amc = true
var b = 0
function clickabc() {
// if (abce == true) {
console.log("haha")
if (abc == true) {
    abc = false
    amc = false
    currTile = this; 
    abd = true
    console.log(currTile)
    b = currTile.id 
    document.getElementById(b).classList.add('focus')

    
}}


function clickabd() {

if (amc == false ) {
    otherTile = this;
    otherTile.width = 117
    setTimeout(function(){abc = true},5)
    abd = 0
    amc = true
    console.log(otherTile)
    document.getElementById(b).classList.remove('focus')
    dragEnd()
}

}



function dragEnd() {

if (currTile.src.includes(blank) || otherTile.src.includes(blank)) {
    return;
}

let currCoords = currTile.id.split("-"); // id="0-0" -> ["0", "0"]
let r = parseInt(currCoords[0]);
let c = parseInt(currCoords[1]);

let otherCoords = otherTile.id.split("-");
let r2 = parseInt(otherCoords[0]);
let c2 = parseInt(otherCoords[1]);

let moveLeft = c2 == c-1 && r == r2;
let moveRight = c2 == c+1 && r == r2;

let moveUp = r2 == r-1 && c == c2;
let moveDown = r2 == r+1 && c == c2;

let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

if (isAdjacent) {
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;
    abce = false
   

    let validMove = checkValid();
    if (!validMove) {
       setTimeout(function() {
         let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;   
        abce = true 
       },400)
    }
}
crushThree()
}



function checkValid() {
//check rows
for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns-2; c++) {
        let candy1 = board[r][c];
        let candy2 = board[r][c+1];
        let candy3 = board[r][c+2];
        if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
            return true;
        }
    }
}

//check columns
for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows-2; r++) {
        let candy1 = board[r][c];
        let candy2 = board[r+1][c];
        let candy3 = board[r+2][c];
        if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
            return true;
        }
    }
}

return false;
}
// var timee = 9
// var nt = true
// function time() {
// if (timm == false) {
// dtt = 1

// document.querySelector(".timeMe").classList.remove("nonee")
// document.querySelector(".timeMe").innerHTML = timee + "s"
//  setTimeout(function(){
//     if ( nt == true) {
//         document.querySelector(".timeMe").innerHTML = (timee--)+ "s"
//         if (timee == -1) {
//             document.querySelector(".timeMe").classList.add("nonee")

//                nt = false
//                 timee = 2
//     abce = false

//                 time2()
        
//         } else { time()}

//     }
   
   
// },1000)}
// }

// function time2() {
// if (timm == false) {

// document.querySelector(".timeEnemy").classList.remove("nonee")
// document.querySelector(".timeEnemy").innerHTML = timee + "s"
//  setTimeout(function(){
//     if ( nt == false) {
//         document.querySelector(".timeEnemy").innerHTML = (timee--)+ "s"
//         if (timee == -1) {
            
//             document.querySelector(".timeEnemy").classList.add("nonee")

//                nt = true
//                 timee = 9
//                 abce = true
//                 time()
        
//         } else { time2()}
       

//     }
// },1000)}
// }

// document.querySelector(".gameScreen2").style.backgroundImage = world1
// document.querySelector(".gameScreen2").classList.add("world1")



// đăng nhập
// document.querySelector(".lg").addEventListener("click", function() {
//     if(document.querySelector(".idtk").value.indexOf("cvg") != -1) {
//         document.querySelector(".form").classList.add("nonee")
//         document.querySelector(".lg").classList.add("nonee")
//         document.querySelector(".login").classList.add("nonee")
//         document.querySelector(".tk").classList.add("nonee")
//         document.querySelector(".matkhau").classList.add("nonee")
//         document.querySelector(".mk").classList.add("nonee")
//         document.querySelector(".id").classList.add("nonee")
//         document.querySelector(".idtk").classList.add("nonee")
//         document.querySelector(".layoutBlack").classList.add("nonee")
        
      
        

//         // savetd()
//         // document.querySelector(".nameMe").innerHTML = td[1]
//         // document.querySelector(".LvMe").innerHTML = "Cấp: " + td[2]
//         // document.querySelector(".docMe").innerHTML = "+ " + td[3] +"%"
//         // document.querySelector(".goldMe").innerHTML = "Vàng: " + td[4] 
      
        
//     } else {
//         setTimeout(function() {
//             document.querySelector(".htro").classList.add("nonee")
//         }, 2000)
//         document.querySelector(".htro").classList.remove("nonee")
//     }
// })
