import React, { useState, useEffect } from 'react';

export const Features = (props) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 500px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 500px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          {matches && (<h1>Innovation</h1>)}
          {!matches && (<h1>CCR Abogados</h1>)}
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
