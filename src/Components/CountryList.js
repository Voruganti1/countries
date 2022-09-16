import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CountryList.css";
import { useCountryContext } from "./GetCountryList";

const AmericaStates = () => {
  const { countries, token } = useCountryContext();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState(null);
  /* const [countries, setCountries] = useState(null);
  const [token, setToken] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const url = "https://www.universal-tutorial.com/api/";
  async function getData() {
    const t = await axios.get(
      "https://www.universal-tutorial.com/api/getaccesstoken",
      {
        headers: {
          Accept: "application/json",
          "api-token":
            "gqBd7hHdap_xivuuXxv6gg-NjnPtTTtHJI0CIVOB2Ora0N-0HYv0jiFsPo_G4d8pp1Y",
          "user-email": "test@testccc.com",
        },
      }
    );
    //Not working
    setToken(t.data.auth_token);

    const countriesList = await axios.get(url + "countries/", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + t.data.auth_token,
      },
    });
    setCountries(countriesList.data);
  }
  async function getStates(countryName) {
    const stateList = await axios.get(
      "https://www.universal-tutorial.com/api/states/" + countryName,

      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(stateList.data);
  }
  //console.log(selectedCountry);
  // console.log(countriesList);

  useEffect(() => {
    if (!countries) {
      getData();
    }
  }, []);
*/
  async function getStates(countryName) {
    const stateList = await axios.get(
      "https://www.universal-tutorial.com/api/states/" + countryName,

      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    setStates(stateList.data);
  }
  const countrySelectHandler = (event) => {
    setSelectedCountry(event.target.value);
    getStates(event.target.value);
    //console.log(selectedCountry);
  };

  return (
    <div>
      <select onChange={countrySelectHandler} className="countryList">
        <option>---select---</option>
        {countries &&
          countries.map((c, i) => (
            <option key={i} value={c.country_name}>
              {c.country_name}
            </option>
          ))}
      </select>
    </div>
  );
};
export default AmericaStates;
