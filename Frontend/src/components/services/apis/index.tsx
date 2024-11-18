import { useState, useEffect } from "react";

const BASE_URL:string = 'http://environment.data.gov.uk/flood-monitoring/id/floods'


export default function GetData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
                const response = await fetch(`${BASE_URL}`);
                const result = await response.json() ;
                setData(result.items[0].description);
                console.log(result, "This is result")
        }
        fetchData();
    }, []);

    return (
        <>
            <div>
                <p>
                    {data}
                </p>
            </div>
        </>
    )
}