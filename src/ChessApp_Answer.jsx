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

//행을 반복해서 그린다.
//[Point] 큰 단위에서 작은 단위로 써내려져 오는구나
function App() {
    <div className = "App">
        <table>
            {} //이 행의 의미는?
            {boardRow.map((row) => (
                <MakeRow key={row}/>
            ))}
        </table>
    </div>
}

//행 하나는 어떻게 만들어지는가
const MakeRow = (row_n) => {
    const {key} = row_n;

    return (
        <tr>
            {}
            {boardData.map((col,index) => (
                <MakeTd key={col}/>
            ))}
            {} //이건 선생님 코멘트 주석을 위한 장치였나?
        </tr>
    )
}

//스타일을 넣어서 td를 만들자
const MakeTd = (col) => {
    //왜 col이 아니고 colIndex가 담겨있다고 하시지?
    //아, 받을 인수(?)를 지정할 수 있구나
    //그럼 굳이 colIndex=index라고 정의하지 않고 그냥 index를 받아오면 안되나?
    const {key} = col;

    const styles = {...tdStyles};

    if(row % 2 === 0 && col % 2 === 1) { //왜 꼭 인덱스로 받아야 하지? 값으로 받으면 편하게 볼 수 있는데?
        styles.backgroundColor = "black"
    }
    
    return <td key={col} style={styles}></td>
}