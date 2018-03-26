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
        
        <Button id='spacer' color="primary" size="lg" disabled="True" >F</Button>
        <Button id='spacer' color="primary" size="lg" disabled="True" >J</Button>
        <Button id='spacer' color="primary" size="lg" disabled="True" >Space</Button>
        </p>
        <p id='feedback'></p>
        <p id="save-p" onClick={viewResults}>Results</p>
        <div id="log" style={{display:"none"}}></div>
      </Jumbotron>

    </div>
  );
  
};

// handle F J Space actions
handlePress(event) {
  // F is pressed
  if(event.keyCode === 70) {
    var imageURL=urls[0].split('/')[3];
    logCategory(1, imageURL);
    }
    // J is pressed
  if(event.keyCode === 74) {
    var imageURL=urls[0];
    logCategory(2, imageURL);
  }
  if(event.keyCode === 32) {
    var imageURL=urls[0];
    logCategory(3, imageURL);
  }
}}

//Function to write categories to file. 
function logCategory (category, imageURL) {
  var content = imageURL + "," + category;
  
  console.log(content);
  
  $("#log").html = ":hi:" + category;	
  var log = document.getElementById("log");
  log.innerHTML = log.innerHTML + content + "<br />";

  var str = "Assigned category: " + category + " to image: " + imageURL;
  $("#feedback").text(str);
}

function viewResults(){
    var x = document.getElementById("log");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  	console.log('button press. log display: ' + x.style.display);
}


// map images
function importAll(r) {
  return r.keys().map(r);
}


// urls is now set to all images
const urls = importAll(require.context('../../public/photos', false, /\.(png|jpe?g|svg)$/));
export default Runner;