import React, { useEffect, useState } from "react";
import { pointsTableData } from "../utils/pointTable.js";
function PointTable() {
  const [tableData, setTableData] = useState([]
  );
  // console.log(tableData)

  async function fetchPointsTable() {
    const url =
      "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/series/9237/points-table";
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
      setTableData(result.pointsTable[0].pointsTableInfo)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
        // fetchPointsTable()
        setTableData(pointsTableData.pointsTable[0].pointsTableInfo)
  }, [])

    return (
        <div className="w-full p-3">

            <table className="w-full">
                <tr className="text-center w-full h-[50px]">
                    <td className="text-left w-[20%] sm:w-[40%]">Team</td>
                    <td>M</td>
                    <td>W</td>
                    <td>L</td>
                    <td>NRR</td>
                    <td>Pts</td>
                    <td>Last 5</td>
                </tr>
            



            { tableData.length <= 0 ? <h1>Loading...</h1> : tableData.map(
                (
                    {
                        form,
                        matchesLost,
                        matchesPlayed,
                        matchesWon,
                        teamName,
                        nrr,
                        points,
                        teamImageId
                    },
                    i
                ) => (
                    <tr className="text-center w-full border-t border-gray-100/30 h-[50px] ">
                        <div className="flex gap-2 sm:gap-6 mt-3">
                            <td className="w-5">{i + 1}</td>
                            <img className="w-4 object-contain" src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267650/iplTeamLogo/${teamImageId}`} alt="" />
                            <td>{teamName}</td>
                        </div>
                        <td>{matchesPlayed}</td>
                        <td>{matchesWon}</td>
                        <td>{matchesLost}</td>
                        <td>{nrr}</td>
                        <td>{points}</td>
                        <td className="flex gap-1 lg:gap-2 justify-center">
                            {form
                                .reverse()
                                .map((data) =>
                                    data === "W" ? (
                                        <i className="fi fi-ss-check-circle text-green-500 text-sm"></i>
                                    ) : (
                                        <i className="fi fi-sr-cross-circle text-red-500 text-sm"></i>
                                    )
                                )}
                        </td>
                    </tr>
                )
            )}
            </table>
        </div>
    );
}


export default PointTable;
