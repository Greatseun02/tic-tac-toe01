//after each button is being clicked I should check if they someone has won, if they have won the game should end, if they have not the game should continue
//if the game should end, a button with restart button would show and you can start, winner would also be displayed.
//if not ended, then that position should not take any position again. and alert that it is taking

//first set a eventlisteners on all the rows.
let gameFlow = 1
let blockTaken = 0
let player1_score = 0
let player2_score = 0
let table1Clicked = false
let table2Clicked = false
let table3Clicked = false
let table4Clicked = false
let table5Clicked = false
let table6Clicked = false
let table7Clicked = false
let table8Clicked = false
let table9Clicked = false

const reset = document.getElementById("reset")
const table1 = document.getElementById("row1_col1")
const table2 = document.getElementById("row1_col2")
const table3 = document.getElementById("row1_col3")
const table4 = document.getElementById("row2_col1")
const table5 = document.getElementById("row2_col2")
const table6 = document.getElementById("row2_col3")
const table7 = document.getElementById("row3_col1")
const table8 = document.getElementById("row3_col2")
const table9 = document.getElementById("row3_col3")


table1.addEventListener("click", function() {
    ifClicked(table1Clicked,this)
    table1Clicked = true
})

table2.addEventListener("click", function() {
    ifClicked(table2Clicked,this)
    table2Clicked = true
})

table3.addEventListener("click", function() {
    ifClicked(table3Clicked,this)
    table3Clicked = true
})

table4.addEventListener("click", function() {
    ifClicked(table4Clicked,this)
    table4Clicked = true
})

table5.addEventListener("click", function() {
    ifClicked(table5Clicked,this)
    table5Clicked = true
})

table6.addEventListener("click", function() {
    ifClicked(table6Clicked,this)
    table6Clicked = true
})

table7.addEventListener("click", function() {
    ifClicked(table7Clicked,this)
    table7Clicked = true
})

table8.addEventListener("click", function() {
    ifClicked(table8Clicked,this)
    table8Clicked = true
})

table9.addEventListener("click", function() {
    ifClicked(table9Clicked,this)
    table9Clicked = true
})

reset.addEventListener("click", reset_entire_table)

function ifClicked(tableClicked, theTable){
    if(!tableClicked){
        XorO(theTable)
        blockTaken++
        gameFlow++
        checkwinner()
    }
}

function checkwinner(){
    if((table3.children[0].innerHTML == "X" & table5.children[0].innerHTML == "X" & table7.children[0].innerHTML== "X")||(table1.children[0].innerHTML == "X" & table5.children[0].innerHTML == "X" & table9.children[0].innerHTML== "X")||(table1.children[0].innerHTML == "X" & table4.children[0].innerHTML == "X" & table7.children[0].innerHTML== "X")||(table2.children[0].innerHTML == "X" & table5.children[0].innerHTML == "X" & table8.children[0].innerHTML== "X")||(table3.children[0].innerHTML == "X" & table6.children[0].innerHTML == "X" & table9.children[0].innerHTML== "X")||(table1.children[0].innerHTML == "X" & table2.children[0].innerHTML == "X" & table3.children[0].innerHTML== "X") || (table4.children[0].innerHTML == "X" & table5.children[0].innerHTML == "X" & table6.children[0].innerHTML== "X") || (table7.children[0].innerHTML == "X" & table8.children[0].innerHTML == "X" & table9.children[0].innerHTML== "X")){
        player1_score++
        displayScore("X_won")
    }
    else if((table3.children[0].innerHTML == "O" & table5.children[0].innerHTML == "O" & table7.children[0].innerHTML== "O")||(table1.children[0].innerHTML == "O" & table5.children[0].innerHTML == "O" & table9.children[0].innerHTML== "O")||(table1.children[0].innerHTML == "O" & table4.children[0].innerHTML == "O" & table7.children[0].innerHTML== "O")||(table2.children[0].innerHTML == "O" & table5.children[0].innerHTML == "O" & table8.children[0].innerHTML== "O")||(table3.children[0].innerHTML == "O" & table6.children[0].innerHTML == "O" & table9.children[0].innerHTML== "O")||(table1.children[0].innerHTML == "O" & table2.children[0].innerHTML == "O" & table3.children[0].innerHTML== "O") || (table4.children[0].innerHTML == "O" & table5.children[0].innerHTML == "O" & table6.children[0].innerHTML== "O") || (table7.children[0].innerHTML == "O" & table8.children[0].innerHTML == "O" & table9.children[0].innerHTML== "O")){
        player2_score++
        displayScore("O_won")
    }
    else if(blockTaken == 9){
        document.getElementById("game_info1").style.display = "none"
        document.getElementById("game_info2").style.display = "block"
        document.getElementById("game_info2").innerHTML = "Draw"
        document.getElementById("table").style.display="none"
        reset.style.display="block"
    }
}

function XorO(self){
    if(gameFlow % 2 != 0){
        self.children[0].innerHTML = "X"
    }else{
        self.children[0].innerHTML = "O"
    }
}

function displayScore(who_won){
    if(who_won=="X_won"){
        document.getElementById("game_info1").style.display = "none"
        document.getElementById("game_info2").style.display = "block"
        document.getElementById("game_info2").innerHTML = "X won the game"
        document.getElementById("table").style.display="none"
        reset.style.display="block"
    }
    else if(who_won=="O_won"){
        document.getElementById("game_info1").style.display = "none"
        document.getElementById("game_info2").style.display = "block"
        document.getElementById("game_info2").innerHTML = "O won the game"
        document.getElementById("table").style.display="none"
        reset.style.display="block"
    }
}
function reset_entire_table(){
    table1Clicked = false
    table1.children[0].innerHTML = ""
    table2Clicked = false
    table2.children[0].innerHTML = ""
    table3Clicked = false
    table3.children[0].innerHTML = ""
    table4Clicked = false
    table4.children[0].innerHTML = ""
    table5Clicked = false
    table5.children[0].innerHTML = ""
    table6Clicked = false
    table6.children[0].innerHTML = ""
    table7Clicked = false
    table7.children[0].innerHTML = ""
    table8Clicked = false
    table8.children[0].innerHTML = ""
    table9Clicked = false
    table9.children[0].innerHTML = ""
    document.getElementById("table").style.display="table"
    reset.style.display="none"
    document.getElementById("game_info1").style.display="table"
    document.getElementById("game_info2").style.display="none"
    document.getElementById("X_score_text").innerHTML = player1_score
    document.getElementById("O_score_text").innerHTML = player2_score
    blockTaken = 0
}
//each time a row is clicked it should not be clicked again. 
//dynamic flow of X and O, we always start with X, so if X is clicked O should be next
//create a variable that monitors the inputs. If the number is even it shoould change innertext to X else change to O

//endgoal 
//play with friends and computer
//play with friends would involve 2 players
//play with computer would involve computer