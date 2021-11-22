import React from 'react'
import SkillItem from '../components/SkillItem';

const Skills = () => {
  return (
    <section id="skills" className="shadow-blue white-bg padding">
      <h3 className="section-title">My skills</h3>
      <div className="spacer" data-height="80"></div>

      <div className="row mt-5">

      <div className="col-md-6">
          <SkillItem skillName="WordPress" percentage="90" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="Magento" percentage="80" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="Saleon" percentage="80" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="Presta shop" percentage="40" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="WooCommerce" percentage="90" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="RestAPI" percentage="90" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="FastAPI" percentage="90" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="GraphQL" percentage="90" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="HTML & CSS" percentage="100" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="PHP" percentage="90" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="JavaScript" percentage="70" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="Python" percentage="40" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="React" percentage="70" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="TypeScript" percentage="55" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="Go" percentage="20" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="Docker" percentage="75" />
        </div>
        
        <div className="col-md-6">
          <SkillItem skillName="Android app" percentage="55" />
        </div>      

        <div className="col-md-6">
          <SkillItem skillName="Android app" percentage="70" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="MySQL & MariaDB" percentage="90" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="PostgreSQL" percentage="45" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="MongoDB" percentage="40" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="Laravel" percentage="75" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="Angular" percentage="55" />
        </div>

        <div className="col-md-6">
          <SkillItem skillName="Linux user" percentage="100" />
        </div>

      </div>
    </section>
  )
}

export default Skills
