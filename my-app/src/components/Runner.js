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
        <div id='feedback'></div>
      </Jumbotron>
    </div>
  );
  
};

// handle F J Space actions
handlePress(event) {
  // F is pressed
  if(event.keyCode === 70) {
    var category = 1;
    var imageURL=urls[0];
    logCategory(category, imageURL, fileName);
    feedback("Assigned category: " + category + " to image: " + imageURL);
    // alert('Call function to Record Category 1 and load next photo');
    }
    // J is pressed
  if(event.keyCode === 74) {
    var category = 2;
    var imageURL=urls[0];
    logCategory(category, imageURL, fileName);
    // alert('Call function to Record Category 2 and load next photo');
  }
  if(event.keyCode === 32) {
    var category = 3;
    var imageURL=urls[0];
    logCategory(category, imageURL, fileName);
    // alert('Call function to Record Category 3 and load next photo');
  }
}}

//Trying to update feedback
function feedback(str) {
  var container = document.getElementById("feedback");
  var s = React.createClass({
      render: function() {
          return <p id="feedbackString">HERE</p>;
      }
  });
  container.replaceChild(s);
}


// map images
function importAll(r) {
  return r.keys().map(r);
}

//Should check if log file exists or create it.
function initLog() {
  var fs = require('fs');
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var day = date.getDay();
  var filename = "" + day + "_" + hour + ":" + minute + ".log";
  
  console.log(filename);

      console.log(filename + ' does not exist');
      var createFile = require('create-file');
      createFile('../../public/logs/'+fileName, Date(), function (err) {
        // file either already exists or is now created (including non existing directories)
        if(err){
          console.log("Failed to create file " + filename + " in ../../public/logs/");
        } 
      return filename;
      });

      console.log(filename + "already exists");
      return filename;
}

//Function to write categories to file. 
function logCategory (category, imageURL, fileName) {
  var content = imageURL + "," + category
  var writeFile = require('write');
  writeFile('../../public/logs/'+fileName, content, function(err) {
    if (err) console.log(err);
  });
  
  // var fs = require('fs');
  // const writeFileP = require("write-file-p");


  // writeFileP('../../public/logs/'+fileName, content, (err, data) => {
  //     console.log(err || data);
  // });

}

// urls is now set to all images
const urls = importAll(require.context('../../public/photos', false, /\.(png|jpe?g|svg)$/));
// const fileName = initLog();
const fileName = "log.log";
export default Runner;