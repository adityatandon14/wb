import React from 'react';
import Card from './common/Card';
import { robotsss } from './mockData/contactData';

const Contact = () => (
  <>
    <Card id={robotsss[0].id} name={robotsss[0].name} email={robotsss[0].email} phone={robotsss[0].phone} />
    <Card id={robotsss[1].id} name={robotsss[1].name} email={robotsss[1].email} phone={robotsss[1].phone} />
    <Card id={robotsss[2].id} name={robotsss[2].name} email={robotsss[2].email} phone={robotsss[2].phone} />
  </>
);

export default Contact;
