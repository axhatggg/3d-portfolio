import React from 'react'
import { skills,experiences } from '../constants'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TypeAnimation } from 'react-type-animation'


const About = () => {
  return (
    <section className='max-container h-auto relative z-[9]'>
      <h1 className='head-text '>
        Hello I'm <span className='blue-gradient_text font-semibold opacity-35-'>Akshat</span>
      </h1>

      <TypeAnimation
          sequence={[
            'I am a web-developer',
            1000,
            'I am a front-end-developer',
            1000,
            'I am a Competitive programmer',
            1000,
            'I am a tech-enthusiast',
            1000
          ]}
          wrapper="span"
          speed={50}
          className="text-xl md:text-5xl sm:text-lg mb-4 font-bold"
          style={{ display: 'inline-block' }}
          repeat={Infinity}
        />

      <div className='mt-5 flex flex-col gap-3 '>
        <p className='font-poppins font-medium '>
        Hello! I'm Akshat Gupta, a passionate Computer Science student at BIT Mesra, specializing in software development.With a knack for problem-solving and a love for competitive programming, I thrive on tackling complex challenges through innovative solutions.Outside of coding, I enjoy videography and exploring new ways to blend creativity with technology. I'm excited to share my journey and showcase my work—welcome to my portfolio!
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text ' >
          My skills
        </h3>
        <div className='mt-16 flex flex-wrap gap-16'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text ' id='skills'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience)=>(
              <VerticalTimelineElement className='' key={experience.company_name}
              date={experience.date}
              contentStyle={{
                borderBottom:'8px',
                borderStyle: 'solid',
                borderBottomColor:experience.iconBg,
                boxShadow: 'none'
              }}
              >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{margin: 0}}>
                      {experience.company_name}
                    </p>
                  </div>

                  

              </VerticalTimelineElement>
    
            ))}
          </VerticalTimeline>
        </div>

        
      </div>

    </section>
  )
}

export default About
