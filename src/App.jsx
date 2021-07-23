import './App.css';

const TR = () => {
  return (
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
    </tr>
  )
}

const App = () => {
  return (
    <div className="App">
     <table>
       {[1,2,3,4,5].map((item) => {
         return <TR key={item} />;
       })}
     </table>
    </div>
  );
}

export default App;
