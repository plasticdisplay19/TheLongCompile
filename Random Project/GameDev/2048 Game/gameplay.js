// Start point of game
var board,score=0,rows=4,columns=4;


// Start Game
function startGame(size) {
    rows=size;
    columns=size;

    score=0;
    document.getElementById("score").innerText=score;
    document.getElementById("game-over").style.display="none";

    let boardDiv=document.getElementById("board");

    // Board size
    if (size===4) boardDiv.style.width="600px";
    else if (size===5) boardDiv.style.width="500px";
    else if (size===6) boardDiv.style.width="700px";
    else if (size===8) boardDiv.style.width="800px";

    // Gap between tiles
    if (size>=8)boardDiv.style.gap = "2px";
    else if (size>=6) boardDiv.style.gap = "3px";
    else boardDiv.style.gap ="5px";
    
    boardDiv.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    boardDiv.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    setGame();
}

// Game Loader
window.onload=function() {
    startGame(4);
}

// Initial condition of game
function setGame() {

    let boardDiv = document.getElementById("board");
    boardDiv.innerHTML = "";   // IMPORTANT
    board = [];
    for (let r=0;r<rows;r++) {
        let row=[];
        for (let c=0;c<columns;c++) row.push(0);
        board.push(row);
    }

    for (let r=0;r<rows;r++) {
        for (let c=0;c<columns;c++) {
            let tile=document.createElement("div");
            tile.id=r.toString()+"-"+c.toString();
            let num=board[r][c];

            updateTile(tile,num); 

            document.getElementById("board").append(tile);
        }
    }

    setTwo(); setTwo();
}

//Checks if an empty tile exists
function hasEmptyTile() {
    for (let r=0;r<rows;r++) {
        for (let c=0;c<columns;c++) {
            if (board[r][c]==0) return true;
        }
    }
    return false;
}

function setTwo() {
    if (!hasEmptyTile()) {
        return; 
    }
    let found=false;
    while (!found) {
        let r=Math.floor(Math.random()*rows);
        let c=Math.floor(Math.random()*columns);

        if (board[r][c]===0) {
            board[r][c]=Math.random() <0.9 ?2:4;
            let tile=document.getElementById(r.toString()+"-"+c.toString());
            updateTile(tile,board[r][c]);
            
            found=true;
        } 
    }
}

function updateTile(tile,num) {
    tile.innerText="";
    tile.classList.value="";
    tile.classList.add("tile");

    if (num>0) {
        tile.innerText=num;
        tile.classList.add("x"+num.toString());
    }
}

// Input of User
document.addEventListener("keyup",(e)=>{
    let moved=false;
    if (e.code==="ArrowLeft") {moved=slideLeft();}
    else if (e.code==="ArrowRight") {moved=slideRight();}
    else if (e.code==="ArrowUp") {moved=slideUp();}
    else if (e.code==="ArrowDown") {moved=slideDown();}

    if (moved) {
        setTwo();
        document.getElementById("score").innerText = score;
    }
    
    if (checkGameOver()) {
        document.getElementById("game-over").style.display = "flex";
        }
})

function filterZero(row) {return row.filter(num => num!=0);}

function slide(row) {
    row=filterZero(row);                // Get rid of zero
    
    // Slide
    for (let i=0;i<row.length-1;i++) {
        if (row[i]==row[i+1]) {row[i]*=2;row[i+1]=0;score+=row[i]}
    }

    row=filterZero(row);
    
    while(row.length<columns) {row.push(0);}
    return row;
}

function slideLeft() {
    let oldBoard = JSON.stringify(board);
    for (let r=0;r<rows;r++) {
        let row=board[r];
        row=slide(row);
        board[r]=row;

        for (let c=0;c<columns;c++) {
            let tile=document.getElementById(r.toString()+"-"+c.toString());
            let num=board[r][c];
            updateTile(tile,num);
        }
    }
    return oldBoard !== JSON.stringify(board);
}

function slideRight() {
    let oldBoard = JSON.stringify(board);
    for (let r=0;r<rows;r++) {
        let row=board[r];

        row.reverse();
        row=slide(row);
        row.reverse();
        board[r]=row;

        for (let c=0;c<columns;c++) {
            let tile=document.getElementById(r.toString()+"-"+c.toString());
            let num=board[r][c];
            updateTile(tile,num);
        }
    }
    return oldBoard !== JSON.stringify(board);
}

function slideUp() {
    let oldBoard = JSON.stringify(board);
    for (let c=0;c<columns;c++) {
        let row=[];

        for (let r=0;r<rows;r++) row.push(board[r][c]);
        row=slide(row);
        for (let r=0;r<rows;r++) {
            board[r][c]=row[r];
            let tile=document.getElementById(r.toString()+"-"+c.toString());
            let num=board[r][c];
            updateTile(tile,num);
        }
    }
    return oldBoard !== JSON.stringify(board);
}

function slideDown() {
    let oldBoard = JSON.stringify(board);
    for (let c=0;c<columns;c++) {
        let row=[];

        for (let r=0;r<rows;r++) row.push(board[r][c]);
        row.reverse();
        row= slide(row);
        row.reverse();

        for (let r=0;r<rows;r++) {
            board[r][c]=row[r];
            let tile=document.getElementById(r.toString()+"-"+c.toString());
            let num=board[r][c];
            updateTile(tile,num);
        }
    }
    return oldBoard !== JSON.stringify(board);
}



// Check game over
function checkGameOver() {

    if (hasEmptyTile()) return false;
    for (let r=0;r<rows;r++) {
        for (let c=0;c<columns-1;c++) {
            if (board[r][c]===board[r][c+1]) return false;
        }
    }

    for (let c=0;c<columns;c++) {
        for (let r=0;r<rows-1;r++) {
            if (board[r][c]===board[r+1][c]) return false;
        }
    }
    return true;
}