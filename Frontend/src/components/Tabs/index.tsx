import { useState } from "react";

const content = [
    [
      "A flood is an overflow of water (or rarely other fluids) that submerges land that is usually dry. - Wikipedia"
    ],
    [
      "There a many causes for a flood these include, but not limited to: prolonged heavy rainfall, highly accelerated snowmelt,severe winds over water and unusual high tibes."
    ],
    [
      "The Johnstown Flood 1889, was so massive that it equaled the flow of the Mississippi river.",
      "In 1931, there was the central China flood with a potential death count of 3.7 million.",
      "The Arno river flooded in 1966 and sent 18 billion gallons of mub and sludge through the strrets of Florence, destroying many homes, business and art galleries."
    ]
  ];

  export default function Tabs() {
    const [activeContentIndex, setActiveContentIndex] = useState(0);

    return(
        <>
            <div>
                <button onClick={() => setActiveContentIndex(0)}>What is a flood?</button>
                <button onClick={() => setActiveContentIndex(1)}>Causes of a flood</button>
                <button onClick={() => setActiveContentIndex(2)}>Famous Floods</button>
            </div>
            <div id="tab-content">
                    {content[activeContentIndex].map((item) => (
                    <p>{item}</p>
                    ))}
            </div>
        </>
    
    )}