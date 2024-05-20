import React, { useEffect, useState } from "react";
import languages from "../../../assets/data/language.js";
import i18next from "i18next";
import './SwitchLang.css'

function SwitchLang(props) {
    const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);

    useEffect(() => {
      setSelectedLanguage(i18next.language);
    }, []);
  
    const handleChange = (event) => {
      const selectedLanguage = event.target.value;
      i18next.changeLanguage(selectedLanguage);
      setSelectedLanguage(selectedLanguage);
    };

  return (
    <select class="ui dropdown" value={selectedLanguage} onChange={handleChange}>
      {languages.map(({ code, name, country_code }) => (
        <option key={country_code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
}

export default SwitchLang;
