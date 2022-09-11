import React from "react";
const CountryList = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="countries">Select a country</label>
        <select name="country" id="">
          <option value="india">India</option>
          <option value="UK">UK</option>
          <option value="America">America</option>
          <option value="Japan">Japan</option>
          <option value="China">China</option>
          <option value="Canada">Canada</option>
        </select>
      </form>
    </div>
  );
};
