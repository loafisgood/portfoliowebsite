import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import TimeLineData from './TimelineData.json'
import 'react-vertical-timeline-component/style.min.css';
import {ReactComponent as WorkIcon} from './icons/work.svg'
import {ReactComponent as SchoolIcon} from './icons/school.svg'

import { Heading } from "@chakra-ui/react";
import './Home.css'

const Timeline = () => {
    let workIconStyles = { background: "#06D6A0"};
    let schoolIconStyles = {background: " #f9c74f"};





  return (
    <div>
        <Heading className="Heading" fontSize={"3.5rem"} color={"black"} backgroundColor={"white"} display={"flex"} justifyContent={"center"} padding={"0"}> 
            Timeline
        </Heading>
        <VerticalTimeline>
            
            {TimeLineData.map((element)=>{
                let isWorkIcon = element.icon == "work";
                let showButton =
                element.buttonText !== undefined &&
                element.buttonText !== null &&
                element.buttonText !== "";
                return(
                    <VerticalTimelineElement 
                        key={element.key}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={isWorkIcon ? workIconStyles: schoolIconStyles}
                        icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}>
                        
                        <h3 className="vertical-timeline-element-title">
                            {element.title}
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">
                            {element.location}
                        </h5>
                        <p id="description">{element.description}</p>

                        {showButton && (
                            <a
                                className={`button ${
                                    isWorkIcon ? "workButton" : "schoolButton"
                                }`}
                                href="/"
                            >
                                {element.buttonText}
                            </a>

                        
                        )}
                        
            
                </VerticalTimelineElement>


                )
            })}

        </VerticalTimeline> 


    </div>

  )
}

export default Timeline;
