import React from 'react'
import './work_experience.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from "react-icons/fa";

const Work_Experience = () => {
  return (
    <div id = 'work-experience'>
      <h1 className="text-emphasis-color section-title">Work Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(77, 156, 212)', color: 'rgb(255, 255, 255)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(77, 156, 212))' }}
          date="October 2024 - present"
          iconStyle={{ background: 'rgb(77, 156, 212)', color: 'rgb(255, 255, 255)' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Data Analyst</h3>
          <h4 className="vertical-timeline-element-title">Liftango</h4>
          <h5 className="vertical-timeline-element-subtitle">New South Wales, Australia</h5>
          <h6 className="vertical-timeline-element-subtitle">Remote (Philippines)</h6>
          <p className="vertical-timeline-element-subtitle">
            Data Analytics, BI Development, Data Visualization, and Process Improvement
          </p>
          <h5 className="vertical-timeline-element-subtitle">Tools & Skills: Python, PostgreSQL, Tableau, BitBucket, Jira, Confluence</h5>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(77, 156, 212)', color: 'rgb(255, 255, 255)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(77, 156, 212))' }}
          date="April 2024 - October 2024"
          iconStyle={{ background: 'rgb(77, 156, 212)', color: 'rgb(255, 255, 255)' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Sr. Data Analyst</h3>
          <h4 className="vertical-timeline-element-title">Theoria Medical</h4>
          <h5 className="vertical-timeline-element-subtitle">Novi, Michigan, USA</h5>
          <h6 className="vertical-timeline-element-subtitle">Remote (Philippines)</h6>
          <p className="vertical-timeline-element-subtitle">
            Data Analytics, BI Development, Data Visualization, and Team Lead
          </p>
          <h5 className="vertical-timeline-element-subtitle">Tools & Skills: Tableau, BitBucket, Monday, Confluence</h5>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(77, 156, 212)', color: 'rgb(255, 255, 255)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(77, 156, 212))' }}
          date="September 2023 - April 2024"
          iconStyle={{ background: 'rgb(77, 156, 212)', color: 'rgb(255, 255, 255)' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Data Analyst</h3>
          <h4 className="vertical-timeline-element-title">Theoria Medical</h4>
          <h5 className="vertical-timeline-element-subtitle">Novi, Michigan, USA</h5>
          <h6 className="vertical-timeline-element-subtitle">Remote (Philippines)</h6>
          <p className="vertical-timeline-element-subtitle">
            Data Analytics, BI Development, and Data Visualization
          </p>
          <h5 className="vertical-timeline-element-subtitle">Tools & Skills: Tableau, BitBucket, Monday, Confluence</h5>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(77, 156, 212)', color: 'rgb(255, 255, 255)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(77, 156, 212))' }}
          date="May 2020 - August 2023"
          iconStyle={{ background: 'rgb(77, 156, 212)', color: 'rgb(255, 255, 255)' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Data Analyst Controller</h3>
          <h4 className="vertical-timeline-element-title">National Irrigation Administration - CAR</h4>
          <h5 className="vertical-timeline-element-subtitle">La Trinidad, Benguet, CAR, Philippines</h5>
          <h6 className="vertical-timeline-element-subtitle">On-site</h6>
          <p className="vertical-timeline-element-subtitle">
            Web Development, Tech Support, Data Entry, and Data Visualization
          </p>
          <h5 className="vertical-timeline-element-subtitle">Tools & Skills: HTML, JavaScript, PHP, MySQL, Looker Studio, PowerBI</h5>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(77, 156, 212)', color: 'rgb(255, 255, 255)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(77, 156, 212))' }}
          date="July 2019 - May 2020"
          iconStyle={{ background: 'rgb(77, 156, 212)', color: 'rgb(255, 255, 255)' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Engineering Assistant A</h3>
          <h4 className="vertical-timeline-element-title">National Irrigation Administration - CAR</h4>
          <h5 className="vertical-timeline-element-subtitle">La Trinidad, Benguet, CAR, Philippines</h5>
          <h6 className="vertical-timeline-element-subtitle">On-site</h6>
          <p className="vertical-timeline-element-subtitle">
            Web Development, Tech Support, and Data Entry
          </p>
          <h5 className="vertical-timeline-element-subtitle">Tools & Skills: HTML, JavaScript, PHP, MySQL</h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    
  )
}

export default Work_Experience