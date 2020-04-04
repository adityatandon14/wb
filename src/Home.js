import React from 'react';
import Map from './utilities/Map';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

export const Home = props => (
  <div>
    <h1>KMC INNOVATION CENTER</h1>
    
    <img style={{width: '70%', height: '40%'}}src={'https://www.ship-technology.com/wp-content/uploads/sites/16/2019/08/RD-Center.jpg'} alt="pic.jpg" />
    <p>


    <h6>



      KMC innovate is an initiative of KMC Manipal for nurturing and developing innovation and entrepreneurial skills
      among its faculty and students. It is also a common platform for like minded people to join hands to help solve
      the burning problems in healthcare, also to seek out people with other skill sets to have a meaningful
      collaboration across departmental and institutional lines to have a true holistic approach, define actionable and
      intelligent solutions that can provide a positive impact on the way modern healthcare works .


    </h6>


    </p>
    <Map />

   
      <MDBBtn size="lg" tag="a" floating social="fb">
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="tw">
        <MDBIcon fab icon="twitter" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="gplus">
        <MDBIcon fab icon="google-plus-g" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="li">
        <MDBIcon fab icon="linkedin-in" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="ins">
        <MDBIcon fab icon="instagram" />
        </MDBBtn>
      
    
  </div>
);
