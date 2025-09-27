import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
// import {} from "../index.css"

import { basic } from "../utils/basic";
import { team1d } from "../utils/team1d";
import { team2d } from "../utils/team2d";
import InPageNavigation from "./InPageNavigation";

function MatchDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { team1, team2, teamsortname1, teamsortname2 } = location.state || {};

  const [data, setData] = useState({
    basic_Data: null,
    team1: null,
    team2: null,
  });

  async function FatchMatchDetail() {
    const url1 = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
    const url2 = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}/team/${team1}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key":  import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const result = await Promise.allSettled([
        fetch(url1, options).then((res) => res.json()),
        fetch(url2, options).then((res) => res.json()),
      ]);

      const basicData =
        result[0].status === "fulfilled" ? result[0].value : null;
      const team1Data =
        result[1].status === "fulfilled" ? result[1].value : null;

      setData({ basic_Data: basicData, team1: team1Data, team2: null });

      console.log("Basic Data:", basicData);
      console.log("Team1 Data:", team1Data);
    } catch (error) {
      console.error(error);
    }
  }

  async function Team2Fetch() {
    const url3 = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}/team/${team2}`;
    const options = {
      method: "GET",
      headers: {
       "x-rapidapi-key":  import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      let response = await fetch(url3, options);
      const result = await response.json();
      setData((prev) => ({ ...prev, team2: result }));
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (team1) {
      setData({ basic_Data: basic, team1: team1d, team2: null });

      // FatchMatchDetail()
    }
  }, []);

  //   useEffect(() => {
  //   console.log("Team1 Data:", data.team1);
  // }, [data.team1]);

  function Team2Fetch1() {
    setData((prev) => ({ ...prev, team2: team2d }));
  } //realtime remove its and change button fuction name also 1 remove from last

  const playingXI = data.team1?.players?.["playing XI"] || [];
  const bench = data.team1?.players?.["bench"] || [];
  const playingXI2 = data.team2?.players?.["playing XI"] || [];
  const bench2 = data.team2?.players?.["bench"] || [];

  const handleTeamChange = (index) => {
    if (index === 1 && !data.team2) {
      Team2Fetch1();
    }
  };

  return (
    <>
      <div className="text-2xl text-center  pt-5">Match Detail</div>

      {/* Basic data */}

      <InPageNavigation
        teams={[teamsortname1, teamsortname2]}
        onTeamChange={handleTeamChange}
      >
        {/* Team1 */}
        {/* Team1 Playing XI */}
        <div>
          <h2 className="text-xl underline pl-2">{teamsortname1 || "Team1"} Playing XI:</h2>

          {playingXI.map((player) => (
            <div className="text-xl m-5">
              <h1 key={player.id}>{player.fullName}</h1>
              <h3 className="opacity-50">{player.role}</h3>
            </div>
          ))}

          <h2 className="text-xl underline pl-2">{teamsortname1 || "Team1"} Bench-player</h2>

          {bench.map((banchPlayer) => (
            <div className="text-xl m-5 pb-5">
              <h1 key={banchPlayer.id}>{banchPlayer.fullName}</h1>
              <h3 className="opacity-50">{banchPlayer.role}</h3>
            </div>
          ))}
        </div>

        {/* Team2 */}
        <div>
          {/* <h3>Team2 Data:</h3> */}
          {!data.team2 ? (
            <p>Loading...</p>
          ) : (
            <>
              <h2 className="text-xl underline pl-2">{teamsortname2 || "Team2"} Playing-XI</h2>

              {playingXI2.map((players) => (
                <div className="text-xl m-5" key={players.id}>
                  <h1>{players.fullName}
                  </h1>
                  <h3 className="opacity-50">{players.role}</h3>
                </div>
              ))}

              <h2 className="text-xl underline pl-2">{teamsortname2 || "Team2"} Bench-Player</h2>

              {bench2.map((benchPlayer, i) => (
                <div  key={i} className="text-xl m-5">
                  <h1>{benchPlayer.fullName}</h1>
                  <h3 className="opacity-50">{benchPlayer.role}</h3>
                </div>
              ))}
              </>
            
          )}
        </div>
      </InPageNavigation>
    </>
  );
}

export default MatchDetail;
