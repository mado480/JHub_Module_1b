import { useState, useEffect } from "react";

export default function GetData() {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('http://environment.data.gov.uk/flood-monitoring/id/floods')
        .then((response) => response.json())
        .then((data) => {
            setData(data.items[0].description);
            console.log(data.items[0].description);
        })
    }, []);

    return (
        <>
            {data} 
        </>
    )
}
    