import React, { useEffect, useState } from "react";
import axios from "axios";

const AmericaStates = () => {
  const [states, setStates] = useState([]);
  let url = "https://us-counties.p.rapidapi.com/states";
  async function getData() {
    const stateList = await axios.get(url);
    console.log(stateList);
  }
  useEffect(() => {
    if (!states) {
      getData();
    }
  }, []);

  return <div></div>;
};
export default AmericaStates;
