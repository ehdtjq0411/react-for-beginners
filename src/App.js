import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
import CleanUp from "./CleanUp";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    return setValue((prev) => {
      return prev+1;
    });
  }
  const onChange = (event) => {
    return setKeyword(event.target.value);
  }


  // only once
  useEffect(()=>{
    console.log("i run only once");
  }, []);
  // change keyword
  useEffect(()=>{
    if(keyword !== "" && keyword.length > 5){
      console.log("i run when 'keyword' changes and 'keyword' length more 5");
    }
  }, [keyword]);
  // change counter
  useEffect(()=>{
    console.log("i run when 'counter' changes");
  }, [counter]);


  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />

      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here....">
      </input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>

      <CleanUp/>
    </div>
  );

  
}

export default App;
