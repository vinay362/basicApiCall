import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const AxiosCall = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://catfact.ninja/fact")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cat fact:", error);
      });
  }, []);

  return (
    <div>
      <h1>This is an Axios API call</h1>
      <h1>Random Cat Fact</h1>
      {data ? <p>{data.fact} (Length: {data.length})</p> : <p>Loading...</p>}
      <button > <Link to="/apicall"> jump to basic api</Link></button>
    </div>
  );
};

export default AxiosCall;
