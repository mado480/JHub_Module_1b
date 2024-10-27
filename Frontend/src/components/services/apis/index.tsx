import { useState, useEffect } from "react";

export default function GetData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://environment.data.gov.uk/flood-monitoring/id/floods')
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            console.log(data);
        })
    }, []);

    

    return (
        <>
            <div>
                <select>
                    <option>
                       
                    </option>
                </select>
            </div>
            
        </>
    )
}
    