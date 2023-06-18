import React, { useState, useEffect, useContext } from "react";
import NewRunnerCard from "./NewRunnerCard";
import { AreaContext } from "./AreaContext";
import { GenderContext } from "./GenderContext";

const NewRunnerList = () => {
  const { selectedValue } = useContext(AreaContext);
  const { selectedGender } = useContext(GenderContext);
  const [runners, setRunners] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((json) => {
        !ignore && setRunners(json);
      })
      .catch((error) => console.error("Error fetching posts:", error));

    return () => {
      ignore = true;
    };
  }, []);

  let filteredRunners = runners;

  if (selectedValue && selectedValue.label !== "Show all areas") {
    filteredRunners = filteredRunners.filter((runner) => {
      return runner.suburb === selectedValue.label;
    });
  }

  if (selectedGender) {
    filteredRunners = filteredRunners.filter((runner) => {
      return runner.gender === selectedGender;
    });
  }

  console.log("runners:", runners);
  console.log("filteredRunners:", filteredRunners);
  console.log(filteredRunners.length);
  console.log("selectedValue:", selectedValue);

  return (
    <div className="runner-card-container">
      {filteredRunners.map((runner) => (
        <div className="runner-card" key={runner.id}>
          <NewRunnerCard runner={runner} />
        </div>
      ))}
    </div>
  );
};

export default NewRunnerList;
