import React from 'react'
import ReactDOM from 'react-dom'
import Card from 'react-bootstrap/Card'
import './styles.css'

const user = {
  firstName: 'Martin',
  Surname: 'Makoni',
   date_of_birth: '07_03_93' ,
         country: 'Zimbabwe' ,
         email: 'makoni250@gmail.com',
         telephone: '0746181175',
         company: 'GG-Holdings', 
        interests: ['music', 'hiking','fishing'] 
};


function formatName(user) {
  return user.firstName + ' ' +
    user.Surname+ ' ' + 
    user.date_of_birth+ ' ' + 
    user.country + ' ' +
    user.email + ' ' +
    user.telephone + ' ' +
    user.company + ' ' + 
    user.interests;
}


const element = (

  <div className="card">  
<Card border="primary" style={{ width: '18rem'}}>
<Card.Header className="title">React assignment</Card.Header>
<Card.Body>
  <Card.Title className="title">Display information</Card.Title>
  <Card.Text>
  The user uses this information: {formatName(user)}! 
  </Card.Text>
</Card.Body>
</Card> 
  </div>
);


ReactDOM.render(
  element,
  document.getElementById('root')
);