import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Photo Classifier</h1>
        <p className="lead">Please classify the photos using the keyboard shortcuts.</p>
        <hr className="my-2" />
        <p></p>
        <p className="lead">
        <img src={process.env.PUBLIC_URL + '/photos/4KK2_20150823_152106_985.jpg'} alt="logo" />
        <p> </p>
        <strong id='tspacer'>Category 1</strong>
        <strong id='tspacer'>Category 2</strong>
        <strong id='tspacer'>Category 3</strong>
        <p> </p>
        <Button id='spacer' color="primary" size="lg">F</Button>
        <Button id='spacer' color="primary" size="lg">J</Button>
        <Button id='spacer' color="primary" size="lg">Space</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;