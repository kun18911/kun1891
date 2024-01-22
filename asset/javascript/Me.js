
// impo?
//map
var map1 = 'url("https://scontent.xx.fbcdn.net/v/t1.15752-9/413277042_1022871112139469_373413145584351557_n.png?stp=dst-png_s206x206&_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=QVCx5iVS7yMAX-VhXXq&_nc_oc=AQkne2E3u8u16PTnDOo_bok1ZVAVznpR3N9mwVUzEUHKGtatafXi2qi7l5zZ88UrQ0hOCBPfkP57U_A-clNrKLFF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSXe8U11-fQ3KMxQ8U1LWWydWqm5MMrA5mwnuArRS1Ebg&oe=65D4A5EA")'
// Nhân vật của tôi
var world1 = 'url("https://scontent.xx.fbcdn.net/v/t1.15752-9/416137435_919536276429290_2056426126391081955_n.png?stp=dst-png_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=510075&_nc_ohc=tBbNhB2hihkAX8LQkTr&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTLQAslMb8Gq-zl9Adu0jjB0GZpFcLYHc3pxR1RYwRESw&oe=65D49797")'
var Me = 'url("https://scontent.xx.fbcdn.net/v/t1.15752-9/415736587_754339319384647_5030219501129618554_n.png?stp=dst-png_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=WJu21BRnI7kAX-RBUHg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQNZKXPLNIu2lKT3HKUwugxX75M52ndpKQnQQcbj8bhhA&oe=65CECDAB")'
var Enemy1 = 'url("https://scontent.xx.fbcdn.net/v/t1.15752-9/415974450_1546745376101500_8861687559608820127_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=nVPtgZQjO_8AX9BC0mh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS820IvvU9jUo-9KJ9m2O4bo0QMgjuwRP28i51xK_Fqqg&oe=65CEF43C")'
var Enemy2 = 'url("https://scontent.xx.fbcdn.net/v/t1.15752-9/415974450_1546745376101500_8861687559608820127_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=nVPtgZQjO_8AX9BC0mh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS820IvvU9jUo-9KJ9m2O4bo0QMgjuwRP28i51xK_Fqqg&oe=65CEF43C")'
var Enemy3 = 'url("https://scontent.xx.fbcdn.net/v/t1.15752-9/415974450_1546745376101500_8861687559608820127_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=nVPtgZQjO_8AX9BC0mh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS820IvvU9jUo-9KJ9m2O4bo0QMgjuwRP28i51xK_Fqqg&oe=65CEF43C")'
// Tạo biến cho nhân vật và quái
var monster1 = document.querySelector(".monsterChar1a")
var monster2 = document.querySelector(".monsterChar2a")
var monster3 = document.querySelector(".monsterChar3a")
var meChar = document.querySelector(".meChara")


//Biến của quân cờ
var star = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/414016480_372189065393833_3133061746980291271_n.png?_nc_cat=100&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGglFvHduDVfp5Bv3b3kFvUyJFhlYdpZ0rIkWGVh2lnSulX-dSPzxxFdSOMNLTfyoWm_ixIMMt6XHkEOUdDBY-2&_nc_ohc=9iHuKK_GswoAX9l7Bmz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS4616XiF6dgmCk9vJEwlJWBc6EVGKu-JphjTkqCau-7Q&oe=65C3B721'
var yingyang = 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/413099066_1073563927293592_4084740531589399392_n.png?_nc_cat=107&ccb=1-7&_nc_sid=510075&_nc_eui2=AeEXxIG0Cuen_hvEB8NHzQHAle23_qb1_2CV7bf-pvX_YCSJtPJiKugLAF5mMNIkP5PH-vDWRunFnJFTbMWmdJs9&_nc_ohc=WxnJWkF-tasAX9M2HFn&_nc_ht=scontent.fsgn2-3.fna&oh=03_AdQRHxRW0zUC2_LX5HPH4xdHwvcfg4FYd6GZs54BCYbIuw&oe=65C39173'
var sword = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/413466115_1362946924340719_5660391729943672205_n.png?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHEiWxKXVd9SW_EUfkts6WyOxW-HxD0qak7Fb4fEPSpqfsQakeLRHSHxN_0lZdS4w86PVkDKuR1eBb1mxc3OtsJ&_nc_ohc=G8U3Rb3lL-0AX-15bUs&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRkeGn56wJPtSxkw0XjVzhyUrnpY3TLblDw60Igm29xQw&oe=65C3A9A0'
var water = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/411019611_815782587019913_6541505757016858131_n.png?_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFyAt4juRnbweOjSyd9ivQCyGhgOjmkcPLIaGA6OaRw8t7Z2ArbXJIflqVssXdiLb9yBpPOPklIkjTfxvyX3Rrq&_nc_ohc=kFfABs56aisAX_47PPR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQJSWowquSeXCWt6fb6jchDgMl44nXZaRZBH1rSxdkuTA&oe=65C38326'
var heart = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/411123765_2126178954425450_6024970361687618085_n.png?_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_eui2=AeEZf-AHXm51KqKJom7F1uGSFiVFwQarLloWJUXBBqsuWlGDkB4n2gCD40zNhXs1_SzSI9_Nm0GG5wUpq1OkVtJa&_nc_ohc=ki_gTn4hcTgAX-_bf5m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTxSSSnNhw4Y5QlTV7pMyiByc6VtBo7qKebyp0xXLM8qQ&oe=65C388B5'
var melon = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/411115202_1093865118414101_2848535251316015944_n.png?_nc_cat=107&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFJkE4r9uN9EiwFFT1CNEOA1T_6-6Ys0QLVP_r7pizRAryQy9j2zsbyXlvbzwuqu0FYyphbPkRbYyqN47gzzAhH&_nc_ohc=7eSuLHCSB9EAX-cwgjq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQijKji0Kpzufe6KqusF9rfca5llaJ2kcC3WxoXf_vGgA&oe=65CA1360'
var chess = [star, yingyang,sword,water,heart, melon]
var blank = 'https://github.com/ImKennyYip/candy-crush/blob/master/images/blank.png?raw=true'
var board = [];
var rows = 9;
var columns = 7;
var score = 0;

var currTile;
var otherTile;


// Gán hình ảnh cho các nhân vật
meChar.style.backgroundImage = Me
monster1.style.backgroundImage = world1
monster2.style.backgroundImage = world1
monster3.style.backgroundImage = world1


// 1. khi click quái, hiển thị bàn cờ
monster1.addEventListener("click",function() {
    document.querySelector(".boardPointAll").classList.remove("nonee")
    document.querySelector(".pointBoardMe").classList.remove("nonee")
    document.querySelector(".pointBoardEnemy").classList.remove("nonee")
    document.querySelector(".outGame").classList.remove("nonee")
    document.querySelector(".skillButton").classList.remove("nonee")

    
    document.querySelector(".hpitem").classList.remove("nonee")
    document.querySelector(".manaitem").classList.remove("nonee")
    // document.querySelector(".timeMe").classList.remove("nonee")
    // document.querySelector(".timeEnemy").classList.remove("nonee")
    document.querySelector(".bodyy").classList.remove("nonee")

     // khi click vào, nhân vật và quái sẽ ở vị trị này
    document.querySelector(".meChar").style.bottom = '20px'
    document.querySelector(".meChar").style.left = '20px'

    document.querySelector(".monsterChar1").style.bottom = '20px'
    document.querySelector(".monsterChar1").style.left = '811px'
    // đồng thời ẩn quái khác, ẩn infor 
    document.querySelector(".inforBoard").classList.add("nonee")
    document.querySelector(".monsterChar2").classList.add("nonee")
    document.querySelector(".monsterChar3").classList.add("nonee")

    
    setTimeout(baby,500)
   
})

monster2.addEventListener("click",function() {
    document.querySelector(".boardPointAll").classList.remove("nonee")
    document.querySelector(".pointBoardMe").classList.remove("nonee")
    document.querySelector(".pointBoardEnemy").classList.remove("nonee")
    document.querySelector(".outGame").classList.remove("nonee")
    document.querySelector(".skillButton").classList.remove("nonee")

    document.querySelector(".hpitem").classList.remove("nonee")
    document.querySelector(".manaitem").classList.remove("nonee")
    // document.querySelector(".timeMe").classList.remove("nonee")
    // document.querySelector(".timeEnemy").classList.remove("nonee")
    document.querySelector(".bodyy").classList.remove("nonee")

     // khi click vào, nhân vật và quái sẽ ở vị trị này
     document.querySelector(".meChar").style.bottom = '20px'
     document.querySelector(".meChar").style.left = '20px'
 
     document.querySelector(".monsterChar2").style.bottom = '20px'
     document.querySelector(".monsterChar2").style.left = '811px'
     // đồng thời ẩn quái khác, ẩn infor 
     document.querySelector(".inforBoard").classList.add("nonee")
     document.querySelector(".monsterChar1").classList.add("nonee")
     document.querySelector(".monsterChar3").classList.add("nonee")

    setTimeout(baby,500)
   
})

monster3.addEventListener("click",function() {
    document.querySelector(".boardPointAll").classList.remove("nonee")
    document.querySelector(".pointBoardMe").classList.remove("nonee")
    document.querySelector(".pointBoardEnemy").classList.remove("nonee")
    document.querySelector(".outGame").classList.remove("nonee")
    document.querySelector(".skillButton").classList.remove("nonee")
    // document.querySelector(".timeMe").classList.remove("nonee")
    // document.querySelector(".timeEnemy").classList.remove("nonee")
    document.querySelector(".bodyy").classList.remove("nonee")

    
    document.querySelector(".hpitem").classList.remove("nonee")
    document.querySelector(".manaitem").classList.remove("nonee")


      // khi click vào, nhân vật và quái sẽ ở vị trị này
      document.querySelector(".meChar").style.bottom = '20px'
      document.querySelector(".meChar").style.left = '20px'
  
      document.querySelector(".monsterChar3").style.bottom = '20px'
      document.querySelector(".monsterChar3").style.left = '811px'
      // đồng thời ẩn quái khác, ẩn infor 
      document.querySelector(".inforBoard").classList.add("nonee")
      document.querySelector(".monsterChar2").classList.add("nonee")
      document.querySelector(".monsterChar1").classList.add("nonee")
    setTimeout(baby,500)

   
})
var abce = false
// 2. khi hiển thị, sẽ show ra 63 ô cờ ngẫu nhiên
function startGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // <img id="0-0" src="./images/Red.png">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.className = "ch"
            tile.src = randomCandy() 
            // tile.addEventListener("click", clickabc)
            tile.addEventListener("click", clickabd);
            tile.addEventListener("click", clickabc);
           

            console.log(tile.className)
            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }
    console.log(board);

    
}

function randomCandy() {
    return chess[Math.floor(Math.random() * chess.length)]; //0 - 5.99
}


function baby() {
    startGame();
    
    
    //1/10th of a second
    // window.setTimeout(function(){
    
    //     crushCandy();
    
       
    //     // generateCandy();
    // }, 300);
    
}

// 3. khi ấn đầu hàng:
document.querySelector(".outGame").addEventListener("click", function() {
    document.querySelector(".layoutBlack").classList.remove("nonee")
    document.querySelector(".giveUp").classList.remove("nonee")
})

document.querySelector(".giveUp3").addEventListener("click", function() {
    document.querySelector(".layoutBlack").classList.add("nonee")
    document.querySelector(".giveUp").classList.add("nonee")
})

document.querySelector(".giveUp2").addEventListener("click", mimiGiveUp2)
function mimiGiveUp2() {
    document.querySelector(".layoutBlack").classList.add("nonee")
    document.querySelector(".giveUp").classList.add("nonee")


    timm = true

    
    document.querySelector(".hpitem").classList.add("nonee")
    document.querySelector(".manaitem").classList.add("nonee")
    document.querySelector(".boardPointAll").classList.add("nonee")
    document.querySelector(".pointBoardMe").classList.add("nonee")
    document.querySelector(".pointBoardEnemy").classList.add("nonee")
    document.querySelector(".outGame").classList.add("nonee")
    document.querySelector(".skillButton").classList.add("nonee")
    document.querySelector(".timeMe").classList.add("nonee")
    document.querySelector(".timeEnemy").classList.add("nonee")



    document.querySelector(".bodyy").classList.add("nonee")
}

// làm bản đồ
document.querySelector(".gameScreen2").style.backgroundImage = map1
document.querySelector(".gameScreen2").classList.add("map1size")
document.querySelector(".gameScreen2").style.backgroundPosition = "-0px 0px"