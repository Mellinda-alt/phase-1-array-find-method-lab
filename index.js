// code your solution here

function superbowlWin(recordArray) {
    const winGame = recordArray.find(record => record.result === "W");
    return winGame ? winGame.year : undefined;
}
