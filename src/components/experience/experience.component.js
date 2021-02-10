import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import data from './experiencedata';

function ExperienceComponent() {
  const [jobs, setJobs] = useState(data);
  const [value, setValue] = useState(0)
  const { company, dates, duties, title,dept } = jobs[value]
  return (
    <div id="experience">
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.dates}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <div className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dept}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    </div>
  )
}

export default ExperienceComponent
