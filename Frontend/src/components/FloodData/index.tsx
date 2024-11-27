import { useEffect, useState } from "react";

const BASE_URL:string = 'http://environment.data.gov.uk/flood-monitoring/id/floods'


export default function GetFloodData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchFloodData = async () => {
            const response = await fetch(`${BASE_URL}`);
            const results = await response.json();
            setData(results.items)
            console.log(results)
        };
        fetchFloodData()
    }, [])

    const displayData:any = data

    return (
            <>
            <tr>
                <td>Area Name</td>
                <td>Description</td>
                <td>Severity Level</td>
            </tr>
                {displayData.map((object, index) => {
                    return (
                        <>
                            <tr key={index}>
                                <td>{object.eaAreaName}</td>
                                <td>{object.description}</td>
                                <td>{object.severityLevel}</td>
                            </tr>
                        </>
                    )
                }    
                )}
            </>
        )

}



