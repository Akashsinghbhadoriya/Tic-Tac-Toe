let turn=true;
let table=new Array(3);
for(let i=0;i<3;i++)
    table[i]=new Array(3);
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++)
    {
        table[i][j]=0;
    }
}

function message(player_turn){
    if(player_turn===1)
        document.getElementById("display").innerHTML="Player 1's Turn";
    else
        document.getElementById("display").innerHTML="Player 2's Turn";
}

function checkresult(row,column,played_by){
    let count=0;
    if(row===1&&column===1)
    {
        for(let x=0;x<3;x++)
        {
            if(table[x][column]!==played_by)
                break;
            else
                count++;
        }
        if(count===3)
            return true;
        count=0;
        for(let y=0;y<3;y++)
        {
            if(table[row][y]!==played_by)
                break;
            else
                count++;
        }
        if(count===3)
            return true;
        count=0;
        for(let x=0,y=0;x<3&&y<3;x++,y++)
        {
            if(table[x][y]!=played_by)
                break;
            else
                count++;
        }
        if(count===3)
            return true;
        count=0;
        for(let x=2,y=3;x>=0&&y>=0;x--,y--)
        {
            if(table[x][y]!=played_by)
                break;
            else
                count++;
        }
        if(count===3)
            return true;
    }
    else
    {
        for(let x=0;x<3;x++)
        {
            if(table[x][column]!==played_by)
                break;
            else
                count++;
        }
        if(count===3)
            return true;
        count=0;
        for(let y=0;y<3;y++)
        {
            if(table[row][y]!==played_by)
                break;
            else
                count++;
        }
        if(count===3)
            return true;
    }
    return false;
}

function mark(row,column,id){
    let s="box"+id;
    if(turn)
    {
        turn=false;
        table[row][column]=1;
        document.getElementById(s).innerHTML="X";
        let result=checkresult(row,column,1);
        if(result)
        {
            document.getElementById("display").innerHTML="Player 1 Wins";
        }
        else
            message(2);
    }
    else
    {
        turn=true;
        table[row][column]=2;
        document.getElementById(s).innerHTML="O";
        let result=checkresult(row,column,2);
        if(result)
        {
            document.getElementById("display").innerHTML="Player 2 Wins";
        }
        else
            message(1);
    }
}

function reset(){
    for(let x=0;x<3;x++)
    {
        for(let y=0;y<3;y++)
            table[x][y]=0;
    }
    for(let x=1;x<=9;x++)
    {
        let s="box"+x;
        document.getElementById(s).innerHTML="";
    }
    document.getElementById("display").innerHTML="Start playing by pressing the play button";
}