import React from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";

const App = () => {
  const [getList, setList] = useState([]);
  const myRef = useRef(null);
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const locationRef = useRef(null);
  const [getError, setError] = useState("");

  const initialDataList = () => {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        console.log(res.data.list);
        setList(res.data.list);
        setError("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    initialDataList();
  }, []);

  const getOneData = (e) => {
    e.preventDefault();
    const index = Number(myRef.current.value);
    // console.log(index);
    axios
      .get(`http://localhost:8080/${index}`)
      .then((res) => {
        console.log(res.data.result);
        const result = res.data.result;
        // console.log(result)
        setList([result]);
        setError("");
      })
      .catch((error) => {
        // console.log(error.response.data.massage);
        // alert(error.response.data.massage)
        setError(error.response.data.massage);
      });
  };

  const fetchAll = (e) => {
    e.preventDefault();
    initialDataList();
  };

  const getFilterValue = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:8080?name=${nameRef.current.value}&age=${ageRef.current.value}&location=${locationRef.current.value}`
      )
      .then((res) => {
        console.log(res);
        setList([...res.data.list]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <form>
        <input type="text" ref={myRef} />
        <button onClick={getOneData}>Fetch 1 data</button>
        <button onClick={fetchAll}>Fetch all</button>
        <br />
        <div>
          Name: <input type="text" ref={nameRef} />
          <br />
          Age: <input type="text" ref={ageRef} />
          <br />
          Location: <input type="text" ref={locationRef} />
          <br />
          <button onClick={getFilterValue}>Filter</button>
        </div>
      </form>
      {getError ? (
        <h3>{getError}</h3>
      ) : (
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
          </tr>
          <tbody>
            {getList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.location}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
