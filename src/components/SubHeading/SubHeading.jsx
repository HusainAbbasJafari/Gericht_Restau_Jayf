import React from 'react';
import { images } from '../../constants';

const SubHeading = ({ Title }) => (
  <div style={{marginTop: '1rem'}}>
    <p className="p__cormorant">{ Title }</p>
    <img src={images.spoon} alt="spoon" className="spoon__img"/>
  </div>
);

export default SubHeading;