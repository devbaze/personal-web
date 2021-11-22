import React, {useEffect} from 'react'
import TimelineEntry from '../components/TimelineEntry'
import { backgroundImageDataAttribute, spacerDataAttribute } from '../custom';

function Experience() {

  useEffect(() => {
    spacerDataAttribute();
  }, [])

  return (
    <section className="shadow-blue white-bg padding">
      <span class="hash-anchor" id="experience"></span>
			<h3 className="section-title">Education</h3>
			<div className="spacer" data-height="80"></div>
      
			<div className="timeline">
      <TimelineEntry 
          entryFrom="2017" 
          entryTo="2018"
          title="iOS Developer" 
          description="IT Academy" 
        />

        <TimelineEntry 
          entryFrom="2015" 
          entryTo="2016"
          title="PHP Developer" 
          description="IT Academy" 
        />
				<span className="timeline-line"></span>
			</div>
		</section>
  )
}

export default Experience
