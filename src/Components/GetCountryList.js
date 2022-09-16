import React, { useState, useEffect, createContext } from "react";
export const countryListContext = createContext(undefined);
const GetCountrylist = (props) => {
  const [countries, setCountries] = useState(null);
  const [token, setToken] = useState("");

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

  //console.log(selectedCountry);
  // console.log(countriesList);

  useEffect(() => {
    if (!countries) {
      getData();
    }
  }, []);

  return (
    <countryListContext.Provider value={{ countries, token }}>
      {props.children}
    </countryListContext.Provider>
  );
};
export default GetCountrylist;
export function useCountryContext() {
  const context = useContext(countryListContext);
  if (!context) {
    throw new Error("There is no data in Context");
  }
  return context;
}
