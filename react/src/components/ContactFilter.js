// React Imports
import React from 'react';

const ContactFilter = (props) => {
  let filterClass = ''
  props.filter ? filterClass = 'active' : null
  let sortClass = ''
  props.sort ? sortClass = 'active' : null
  return(
    <div className='cell' id='contact-filter'>
      <div id='filter-button' className={`button ${filterClass}`} onClick={props.filterFunction}>
        Show .com emails
      </div>
      <div id='sort-button' className={`button ${sortClass}`} onClick={props.sortFunction}>
        Sort By Email
      </div>
    </div>
  )
}

export default ContactFilter;
