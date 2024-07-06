// code your solution here

function superbowlWin(recordArray) {
    
    const win = recordArray.find(record => record.result === "W");
    
    return win ? win.year : undefined;
}






