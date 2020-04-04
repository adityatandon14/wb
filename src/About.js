import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const About = () => (
  <div>
    <h1>About Page</h1>

    <img style={{width: '70%', height: '500px'}} src={'https://payload.cargocollective.com/1/0/275/5299665/zone1-people_930.jpg'} />
    <h2>Facilities Offer by KMCIC</h2>
    <p>
       <ul>Mentoring for innovations, patent filing, medi-tech projects, statistical analysis.</ul>
       <ul>Conducting Hackathons, Expert Talks, Idea Challenge, Workshops</ul>
       <ul>Idea café- space for conducting events, meetings and talks</ul>
       <ul>Funding for innovative projects</ul>
       <ul>Manipal Gok incubator- wet labs, instrumentation facilities, workstation, office space.</ul>
       <ul>Information and link to External Events/ competitions </ul>

   </p>
  <img style={{width: '66%', height: '500px'}} src={'https://consortme.com/wp-content/uploads/2016/07/list-8.jpg'} />
  
   <h2>Problem Statement</h2>
   <p>Posted
      5 by the IC members 
      problem statements from different KMC departments
      EXAMPLE
      1. Design and clinical evaluation of 3D printed Myoelectric prosthesis in upper limb amputees
      2. Design and clinical evaluation of 3D printed upper limb
      3. Designing a myoelectric foot drop orthosis


Provision/ link for students/ faculty to post problem statements/ requirements – contact by email/ phone no of IC ( via a google form)
</p>

<h2>Links to other webistes</h2>
<p><ul>
manipal.edu
kmc manipal
mutportal
manipal gok
</ul></p>
    
</div>
)