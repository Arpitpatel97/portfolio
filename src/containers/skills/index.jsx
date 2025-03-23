import React from 'react'
import PageHeader from '../../components/pageHeader'
import {BsInfoCircleFill} from 'react-icons/bs'

import { AnimateKeyframes } from 'react-simple-animate'
import { Animate } from "react-simple-animate";
import { Line } from 'rc-progress';
import "./style.scss"

const skillData = [
  {
    label: "FRONT END",
    data: [
      {
        skillName: "HTML",
        percentage: "90",
      },
      {
        skillName: "CSS",
        percentage: "50",
      },
      {
        skillName: "JAVASCRIPT",
        percentage: "80",
      },
      {
        skillName: "REACT",
        percentage: "70",
      },
      {
        skillName: "THREE JS",
        percentage: "40",
      },
    ],
  },
  {
    label: "BACK END",
    data: [
      {
        skillName: "NODE JS",
        percentage: "70",
      },
      {
        skillName: "EXPRESS",
        percentage: "60",
      }
    ],
  },
  {
    label: "DATABASE",
    data: [
      {
        skillName: "MONGODB",
        percentage: "70",
      },
      {
        skillName: "MYSQL",
        percentage: "60",
      },
      {
        skillName: "POSTGRESQL",
        percentage: "50",
      },
      {
        skillName: "SQLITE",
        percentage: "40",
      },
    ],
  }
];


const Skills = () => {
  return (
    <section id="skills" className='skills'>
    <PageHeader 

    headerText="My skills"
    icon={<BsInfoCircleFill  size={40}/>}
    />
    <div className='skills__content-wrapper'>
      {
           skillData.map((item, i) => (
             <div key={i} className='skills__content-wrapper__inner-content'>
              <Animate 
              play
              duration={1.5}
              delay={0.3}
              start={{
                transform :'translateX(-200px)',

              }}
              end={{
                transform :'translateX(0px)',
              }
            
            }
              
              >
             <h3 className='skills__content-wrapper__inner-content__category-text'>{item.label}</h3>
             <div className='skills__content-wrapper__inner-content-progressbar-container'>
              {
                item.data.map((skillData,j)=>(
                  <AnimateKeyframes
                  play
                  duration={1}
                  keyframes={["opacity:1", "opaity:0"]}
                  iterationCount="1"
                  >
                  <div className='progressbar-wrapper'  key={j}>
                    <p >{skillData.skillName}</p>
                    <Line
                    percent={skillData.percentage}
                    strokeWidth="2"
                    strokeColor="var(--yellow-theme-main-color)"
                    trailWidth={"2"}
                    strokeLinecap='square'
                    />
                  </div>

                  </AnimateKeyframes>
                ))
              }
             </div>
              </Animate>
               {item.name}
             </div>
           ))
      }
    </div>

</section>
  )
}

export default Skills
