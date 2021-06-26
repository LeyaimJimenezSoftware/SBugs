import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const ShowIssues = () => {
  const { result } = useFetch();
  const [filterData, setFilterData] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    const resultData = result?.data.filter((data) => {
      if (data.title.includes(value)) {
        return data;
      }
    });

    setFilterData(resultData);
  }, [value]);

  return (
    <div
      style={{
        width: "50rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'column',
      }}
    >
      <input
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search"
        style={{
          width: "100%",
          height: "40px",
          margin: "20px 0px",
          fontWeight: "bold",
          fontSize: "20px",
          padding: "10px 10px",
        }}
      ></input>

      {filterData &&
        filterData.map((data, index) => (
          <a key={index} style={{width: '100%', textDecoration: 'none'}} href={data.html_url}>
            <div
              style={{ margin: "10px", border: "2px solid blueviolet" }}
              key={index}
            >
              <p style={{ margin: "20px", color: 'black' }}>{data.title}</p>
            </div>
          </a>
        ))}
    </div>
  );
};
