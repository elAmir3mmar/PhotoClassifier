import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import $ from 'jquery'; 


class Runner extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.addEventListener('keydown', this.handlePress);
  }

  render() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Photo Classifier</h1>
        <p className="lead">Please classify the photos using the keyboard shortcuts.</p>
        <hr className="my-2" />
        <p></p>
        <p className="lead">
        <img src={process.env.PUBLIC_URL + urls[0]} alt="image" />
        <p> </p>
        <strong id='tspacer'>Category 1</strong>
        <strong id='tspacer'>Category 2</strong>
        <strong id='tspacer'>Category 3</strong>
        <p></p>
        
        <Button id='spacer' color="primary" size="lg" >F</Button>
        <Button id='spacer' color="primary" size="lg" >J</Button>
        <Button id='spacer' color="primary" size="lg" >Space</Button>
        </p>
      </Jumbotron>
    </div>
  );
  
};

// handle F J Space actions
handlePress(event) {
  // F is pressed
  if(event.keyCode === 70) {
    alert('Call function to Record Category 1 and load next photo');
    }
    // J is pressed
  if(event.keyCode === 74) {
    alert('Call function to Record Category 2 and load next photo');
  }
  if(event.keyCode === 32) {
    alert('Call function to Record Category 3 and load next photo');
  }
}}

// map images
function importAll(r) {
  return r.keys().map(r);
}

// urls is now set to all images
const urls = importAll(require.context('../../public/photos', false, /\.(png|jpe?g|svg)$/));
export default Runner;