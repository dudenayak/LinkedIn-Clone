import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>

      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        'I have made a LinkedIn Clone',
        'I have used ReactJS and Firebase in this clone'
      )}
      {newsArticle('COVID-19 India updates', 'TOP News - 880 readers')}
      {newsArticle('Elon Musk drops twitter deal', 'Read full story here')}
      {newsArticle('Stock Market crashes', 'Loss for many read more here')}
      {newsArticle('New openings for 2023 batch', 'Apply soon')}
    </div>
  );
}

export default Widgets;
