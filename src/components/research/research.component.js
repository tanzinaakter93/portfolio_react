import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import data from './researchdata';

function ResearchComponent() {
  const [jobs, setJobs] = useState(data);
  const [value, setValue] = useState(0)
  const { company, dept, thesistitle, thesisdescription} = jobs[value]
  return (
    <div id="education">
    <section className='section'>
      <div className='title'>
        <h2>Education</h2>
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
                {item.degree}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <div className='job-info'>
          <h3>{company}</h3>
          <h4>{dept}</h4>
          <p className='job-date'>{thesistitle}</p>
          <div className='job-desc'>
                <p>{thesisdescription}</p>
              </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ResearchComponent
