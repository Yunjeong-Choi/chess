
(function () {
    const board = document.getElementById('board');

    const pieces = ["Rook", "Knight", "Bishop", "King", "Queen", "Bishop", "Knight", "Rook"]
    
    const makeBoard = function (boardSize = 8) {
        for (let i = 0; i < boardSize; i++) {
            const tr = document.createElement('tr');

            for (let j = 0; j < boardSize; j++) {

                //기본 밑그림 그리기
                const td = document.createElement('td');
                const styles = {
                    border: '1px solid black',
                    backgroundColor: '',
                    color: '',
                    width: '20px',
                    height: '20px'
                };
                for (let e in styles) td.style[e] = styles[e];
                
                // 색 입히기
                const currentNum = i * boardSize + j
                if (currentNum % 2 === 0){
                    td.style[color] = 'black';
                    td.style[backgroundColor] = 'white';
                } else {
                    td.style[color] = 'white';
                    td.style[backgroundColor] = 'black';
                }

                // Pawn 두기
                if (i===1||i===boardSize-2) {
                    td.innerText = 'Pawn'
                }

                // 나머지 말 두기
                if (i===0||i===boardSize-1) {
                    td.innerText = pieces[j]
                }

                tr.appendChild(td);
            }
            board.appendChild(tr);

            }
        }

    return makeBoard();
}());