import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Apicall = () => {
  const [data, setdata] = useState(null);
  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      
      })
      .catch((error) => {
        console.error("Error fetching cat fact:", error);
      
      });
  }, []);

  return (
    <>
    <div>
    <h1>this is basic api call</h1>
      <h1>Random Cat Fact</h1>
      {data ? <p>{data.fact} the statement  length is {data.length}</p>:<p>loading</p>}
     </div>

     <button > <Link to="/axioscall"> jump to axios api</Link></button>
     </>
  );
};

export default Apicall;
