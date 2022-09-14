import React, { useEffect, useState } from "react";
import axios from "axios";

const AmericaStates = () => {
  const [countries, setCountries] = useState(null);
  const [t, setToken] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  async function getData() {
    const token = await axios.get(
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
    setToken(token.data.auth_token);

    const countriesList = await axios.get(
      "https://www.universal-tutorial.com/api/countries/",
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token.data.auth_token,
        },
      }
    );
    /*const stateList = await axios.get(
      " https://www.universal-tutorial.com/api/states/",
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token.data.auth_token,
        },
      }
    );*/

    setCountries(countriesList.data);
    //console.log(selectedCountry);
    // console.log(countriesList);
  }
  useEffect(() => {
    if (!countries) {
      getData();
    }
  }, []);
  const countrySelectHandler = (event) => {
    console.log(event);
  };

  return (
    <div>
      <select onChange={countrySelectHandler()}>
        <option>---select---</option>
        {countries &&
          countries.map((c, i) => (
            <option key={i} value={c.country_short_name}>
              {c.country_name}
            </option>
          ))}
      </select>
    </div>
  );
};
export default AmericaStates;
