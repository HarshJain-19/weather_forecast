import React from 'react';
import PrimaryDetail from './PrimaryDetail';
import SecondaryDetail from './SecondaryDetail';

const Details = ({wInfo}) => {
  return (
    <div className='detCon'>
      <PrimaryDetail wInfo={wInfo}/>
      <SecondaryDetail wInfo={wInfo}/>
    </div>
  )
}

export default Details
