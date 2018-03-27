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
        <div className="lead">
        <img id="Image" src={process.env.PUBLIC_URL + urls[idx]} alt="image" onClick={imgZoom} />
        <p> Click on the Image to enlarge. </p>
        <strong id='tspacer'>Category 1</strong>
        <strong id='tspacer'>Category 2</strong>
        <strong id='tspacer'>Category 3</strong>
        </div>
        <p>
        
        <Button id='spacer' color="primary" size="lg" disabled={true} >F</Button>
        <Button id='spacer' color="primary" size="lg" disabled={true} >J</Button>
        <Button id='spacer' color="primary" size="lg" disabled={true} >Space</Button>
        </p>
        <p id='feedback'></p>
        <p id="save-p" style={{color:'white'}} onClick={viewResults}>Results</p>
        <div id="log" style={{display:"none"}}></div>
      </Jumbotron>

    </div>
  );
  
};

// handle F J Space actions
handlePress(event) {
  if (count < n) {
	  // F is pressed
	  if(event.keyCode === 70) {
	    logCategory(1);
	    updateImg();
	    }
	    // J is pressed
	  if(event.keyCode === 74) {
	    logCategory(2);
	    updateImg();
	  }
	  if(event.keyCode === 32) {
	    logCategory(3);
	    updateImg();
	  }
  }
}}


//Function to write categories to file. 
function logCategory (category) {
  var imageURL=urls[idx].split('/')[3];

  var content = imageURL + "," + category + "," + new Date().getTime();
  
  console.log(content);
  
  $("#log").html = ":hi:" + category;	
  var log = document.getElementById("log");
  log.innerHTML = log.innerHTML + content + "<br />";

  var str = "Assigned category: " + category + " to image: " + imageURL;
  $("#feedback").text(str);
}

function updateImg(){
	idx = idxAdd();
	$("#Image").attr("src", process.env.PUBLIC_URL + urls[idx]);
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

function imgZoom() {
	var img = document.getElementById("Image");
	if (img.height === 400) {
		console.log("found400");
		$('#Image').height(800);
	} else {
		$('#Image').height(400);

	}


	console.log("Image click " + img.height)
}

function idxAdd() {
	var i = idx + 1;
	count ++;
	if (count >= n) {
		$( "#Image" ).replaceWith( "<h2 style={{color:'green'}}>All Done.</h2>" );
	}
 	if (i === n) {
		i = 0;
	}

	return i;
}

function idxRnd() {
	return Math.floor(Math.random() * (n - 0 + 1)) + 0;
}

// map images
function importAll(r) {
  return r.keys().map(r);
}


// urls is now set to all images
const urls = importAll(require.context('../../public/photos', false, /\.(png|jpe?g|svg)$/));
console.log(urls);
// var idx = 0;
var n = urls.length;
var count = 0;
var idx = idxRnd();
export default Runner;