//import './App.css';

//반복할 행과 열의 수
const boardRow = [1,2,3,4,5,6,7,8]
const boardData = [1,2,3,4,5,6,7,8]

//칸 스타일
const tdStyles = {
    border: '1px solid black',
    backgroundColor: '', //여기서 정의 안하고 나중에 동적으로 추가도 되나요? color도 마찬가지
    color: '',
    width: '20px',
    height: '20px'
}

//스타일을 넣어서 td를 만들자
const MakeTd = boardData.map((cell) => 
    <td key={cell} style={tdStyles}></td>
    )

//행을 만들자 (td배열을 행 개수 만큼 찍어내자)
//Q. table 행(row)로 어떻게 만들지.... 여기서 계속 에러가 난다ㅠㅠ
const MakeRow = () => {
    return(
        boardRow.map((row) => <MakeTd key={row}/>)
    )
}

//화면에 찍어내자
const ChessApp = () => {
    return (
        <div className="board">
         <table>
             <MakeRow/>
         </table>
        </div>
    )
}

export default ChessApp;