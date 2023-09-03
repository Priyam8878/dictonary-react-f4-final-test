import React, { useState } from "react";
import Navbar from "./Navbar";
import { store_history } from "../redux/actions/store_historyAction";
import { UseSelector, useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const x = useSelector((state) => state);
  console.log(x);
  const [flag,setFlag]=useState(false)
  const [resultData, setResultData] = useState([]);
  const [searchterm, setSearchterm] = useState("");
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchterm}`;

  function searchData(e) {
    setSearchterm(e.target.value);
    setResultData([])
  }

  function displayOutput() {
    dispatch(store_history(searchterm));
    setSearchterm("");
    
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        // setResultData([])
       
        setResultData([...resultData, result]);
        console.log(result);
      })
      .catch((err) => console.log(err));
  }
  console.log(resultData);
  return (
    <>
      <div className="home">
        <input
          value={searchterm}
          onChange={(e) => searchData(e)}
          placeholder="Search word"
        />
        <button onClick={displayOutput} id="searchButton">
          Search
        </button>
      </div>
      <div className="displayResult">
       
        {resultData.map((data1) =>
          data1.map((data2) => (
            <div>
              <h1>{data2.word}</h1>
              <h3>{data2.phonetic}</h3>
              {data2.phonetics.map((data3=>(
                   <audio controls autoplay>
                   <source src={data3.audio} type="audio/ogg" />
                   <source src={data3.audio} type="audio/mpeg" />
                   Your browser does not support the audio element.
                 </audio>
                  )))}
             {data2.meanings.map(data4=>(
              <div><h3>partOfSpeech:{data4.partOfSpeech}</h3>
                    {data4.definitions.map((data5=>(
                      <p>{data5.definition}</p>
                    )))}
              </div>
        
             ))}
            </div>
          ))

        )}
      </div>
      <div>
       
      </div>
    </>
  );
};

export default Home;
