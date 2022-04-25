import axios from "axios";
import { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
import HomeButton from '../components/HomeButton'
import ListLanguage from '../components/ListLanguage'
import Navbar from "../components/Navbar";
import 'react-vertical-timeline-component/style.min.css';
import "./chronology.css";




export const Chronology = () => {
  const [elements, setElements] = useState([]);
  const orderedCharacters =[]
  const [highToLow, setHighToLow]= useState(true)

  useEffect(() => {
    const getElements = async () => {
      const res = await axios.get("https://api.got.show/api/show/characters/");
      console.log(res.data);
      setElements(res.data);
    };
    getElements();
  }, []);

  for (const element of elements) {
    if (element.age){
      if (element.age.age){
  orderedCharacters.push(element)
      }
    }
  }
  const showOrderCharacters = () => {
    if (highToLow) {
      orderedCharacters.sort((a, b) => a.age.age - b.age.age);
    } else {
      orderedCharacters.sort((a, b) => b.age.age - a.age.age);
    }
  }
  const changeOrder=()=>{
    if(highToLow){
      setHighToLow(false)
      showOrderCharacters()
    }else{
      setHighToLow(true)
      showOrderCharacters()
    }
  }
  showOrderCharacters()
  
  return (
    <div className="box, timeline-container">
      
      <VerticalTimeline>
        <div className="c-container__btn">
      <button className="c-chronology__btn" onClick={changeOrder}>{orderedCharacters[0].age.age}</button>
      </div>
        {orderedCharacters.map(element => {
          return (
            <>
              
                <VerticalTimelineElement 
                  key={element.id}
                  dateClassName="date"
                  contentStyle= {{ background: 'black', color: '#fff' }}

                >
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.age.age}
                  </h5>
                  <h3 className="vertical-timeline-element-title">
                    {element.name}
                  </h3>
                  
                  <img className="timeline_img" src={element.image} alt="logo"/>
                </VerticalTimelineElement>

              </>)

        })}

      </VerticalTimeline>
      <>
        <HomeButton />
        <ListLanguage />
        <Navbar />
      </>
    </div>


  )
}
