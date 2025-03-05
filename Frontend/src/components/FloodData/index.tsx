import { useState } from "react";

const BASE_URL:string = 'http://environment.data.gov.uk/flood-monitoring/'


export default function GetFloodData() {
    const [data, setData] = useState([]);

   
        const fetchFloodData = async () => {
            const response = await fetch(`${BASE_URL}id/floods`);
            const results = await response.json();
            setData(results.items)
            console.log(results)
        };
        

    const displayData:any = data

    return (
            <>
            <button onClick={fetchFloodData}>Fetch all flood warnings currently!</button>
            <table>
            <tbody>
            <tr id="tableFloodData">
                <th>Area Name</th>
                <th>Description</th>
                <th>Severity Level</th>
            </tr>
            
            
                {displayData.map((object, index) => {
                    return (
                        <>
                            <tr key={index} id="tableFloodEntry">
                                <td>{object.eaAreaName}</td>
                                <td>{object.description}</td>
                                <td>{object.severityLevel}</td>
                            </tr>
                            
                        </>
                    )
                }    
                )}
                </tbody>
                </table>
            </>
        )

}



