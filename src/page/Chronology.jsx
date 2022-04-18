import axios from "axios";
import { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules"

export const Chronology=()=> {
    const [elements, setElements] = useState([]);

    useEffect(() => {
      const getElements = async () => {
        const res = await axios.get("https://api.got.show/api/show/characters/");
        console.log(res.data);
        setElements(res.data);
      };
      getElements();
    }, []);
  
    return (
      <div>
        <h1 className="title">Timeline</h1>
        <VerticalTimeline>
          {elements.map(element => {
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>
      </div>
    )
  }
