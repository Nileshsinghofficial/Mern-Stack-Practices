import { useEffect, useState } from "react";
import { data } from "../utils/data.js";
import { Link, Links } from "react-router-dom";


function Home() {
  const [matchesData, setMatchesData] = useState([]);

    console.log(matchesData)

  let filterData = data.matchDetails.filter(
    (singleMatch) => singleMatch["matchDetailsMap"]
  );

  async function FetchMatchData() {
    const url = "https://cricbuzz-cricket.p.rapidapi.com/series/v1/9237";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key":  import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("result", result);
      let filterData = result.matchDetails.filter(
        (singleMatch) => singleMatch["matchDetailsMap"]
      );
      setMatchesData(filterData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // FetchMatchData()
    setMatchesData(filterData); // for static
  }, []);

  return (
    <div className="flex flex-wrap w-full">
      {matchesData.map(({ matchDetailsMap: { match, key : date } }, i) =>
        match.map(
          (
            {
              matchInfo: {
                matchId,
                team1: {
                  teamId: team1Id,
                  teamSName: team1SName,
                  teamName: team1LongName,
                  imageId: team1Img,
                },
                team2:{
                  teamId: team2Id,
                  teamSName:team2SName,
                  teamName: team2LongName,
                  imageId: team2Img,
                },
                status,
                matchDesc,
                state,
                matchFormat,
              },
              matchScore  ,
            },
            
            j
          ) => (
            
            (
              <Link
                to={`/matchDetail/${matchId}`} className="w-[50%] h-[150px]"
                state={{
                  team1: team1Id,
                  team2: team2Id,
                  teamsortname1: team1SName,
                  teamsortname2: team2SName,
                }}
                key={`${i}-${j}-${matchId}`}
              >
                {/* <h1>
                  {team1SName} vs{""} {team2.teamSName} {date} {""} {status}
                </h1> */}

                <div className="bg-gray-700 border p-3 flex flex-col gap-5">
                                <div className="flex justify-between">
                                    <p>{matchDesc}</p>
                                    <p>{date.split(" 2025")[0]}</p>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <div className="flex gap-6">
                                            <img
                                                className="w-4 object-contain"
                                                src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267650/iplTeamLogo/${team1Img}`}
                                                alt=""
                                            />
                                            <p>{team1SName}</p>
                                        </div>
                                        {matchScore?.team1Score ? (
                                           
                                            <p>
                                                {
                                                    matchScore?.team1Score
                                                        ?.inngs1?.runs
                                                }
                                                /
                                                {
                                                    matchScore?.team1Score
                                                        ?.inngs1?.wickets
                                                }{" "}
                                                (
                                                {
                                                    matchScore?.team1Score
                                                        ?.inngs1?.overs
                                                }
                                                )
                                            </p>
                                        ) : (
                                            " "
                                        )}
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex gap-6">
                                            <img
                                                className="w-4 object-contain"
                                                src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267650/iplTeamLogo/${team2Img}`}
                                                alt=""
                                            />
                                            <p>{team2SName}</p>
                                        </div>
                                        {matchScore?.team2Score ? (
                                            <p>
                                                {
                                                    matchScore?.team2Score
                                                        ?.inngs1?.runs
                                                }
                                                /
                                                {
                                                    matchScore?.team2Score
                                                        ?.inngs1?.wickets
                                                }{" "}
                                                (
                                                {
                                                    matchScore?.team2Score
                                                        ?.inngs1?.overs
                                                }
                                                )
                                            </p>
                                        ) : (
                                            " "
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm">
                                    {state === "Complete"
                                        ? status.split(" won")[0] ===
                                          team1LongName
                                            ? team1SName +
                                              " won " +
                                              status.split("won ")[1]
                                            : team2SName +
                                              " won " +
                                              status.split("won ")[1]
                                        : status}
                                </p>
                            </div>
              </Link>
            )
          )
        )
      )}
    </div>
  );
}

export default Home;
