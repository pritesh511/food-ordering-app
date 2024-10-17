import React, { useEffect, useState } from "react";
import "./setting.css";
import { GOOGLE_SEARCH_API } from "../../utils/constant";

const Setting = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const [isOpenSuggestionList, setIsOpenSuggestionList] = useState(false);

  useEffect(() => {
    // call API
    const timer = setTimeout(() => handleFetchSearchResult(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // API call function
  handleFetchSearchResult = async () => {
    const response = await fetch(GOOGLE_SEARCH_API + searchQuery);
    const json = await response.json();
    setSuggestionList(json[1]);
  };

  return (
    <div className="setting-wrapper">
      <input
        placeholder="Debounce search here"
        className="setting-input"
        onChange={(event) => setSearchQuery(event.target.value)}
        onFocus={() => setIsOpenSuggestionList(true)}
        onBlur={() => setIsOpenSuggestionList(false)}
      />
      {isOpenSuggestionList && (
        <div className="suggestion-list">
          <ul>
            {suggestionList.map((suggestion) => {
              return (
                <li key={suggestion} className="suggestion-item">
                  {suggestion}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Setting;
