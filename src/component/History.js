import React from "react";
import { useSelector, useDispatch } from "react-redux";
const History = () => {
  const data = useSelector((state) => state);
function showResult(){

}
  return (
    <div className="history">
      <h1>History Of Search</h1>
      <div>
        <ol>
          {data.map((word,index) => (
            <li className="history-list" key={index} onClick={showResult}>{word}</li>
          ))}
        </ol>
      </div>
     
    </div>
  );
};

export default History;
