const boardRow = [1,2,3,4,5,6,7,8]
const boardData = [1,2,3,4,5,6,7,8]

const tdStyles = {
    border: '1px solid black',
    backgroundColor: '', //여기서 정의 안하고 나중에 동적으로 추가도 되나요? color도 마찬가지
    color: '',
    width: '20px',
    height: '20px'
}

//한 행씩 그리기
function ChessApp() {
    return(
        <div className = "App">
            <table>
            {boardRow.map((row,index) => (
                <MakeRow key={row} rowIndex={index}/>
            ))}
            </table>
        </div>
    )
}

//행 하나 안을 셀로 채운다.
const MakeRow = (props) => {
    //var {rowIndex} = props
    return(
        <tr>
            {boardData.map((col,index) => (
                <MakeTd key={col} colIndex={index}/>
            ))}
        </tr>
    )
}

//셀 단위를 만든다.
const MakeTd = (props) => {
    const styles = {...tdStyles};
    const{colIndex} = props;
    //rowIndex가 여기까지 적용될 수 있도록 하려면 어떻게 해야 할까요?
    if(colIndex % 2 ===1){
        styles.backgroundColor = 'black'
        styles.color = "white"
    }

    return <td key={colIndex} style={styles}></td>
}

export default ChessApp;
