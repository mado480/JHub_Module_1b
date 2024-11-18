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
            <div>
                {displayData.map((object) => (
                    <p>{object.description}</p>
                )    
                )}
                
            </div>
            </>
        )

}



