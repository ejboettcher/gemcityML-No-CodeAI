// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = "./static/tm-my-image-model/";

let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {
    
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    //const devices = await navigator.mediaDevices.enumerateDevices()
    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    await webcam.setup({  facingMode: "environment"  }); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // add class labels
        labelContainer.appendChild(document.createElement("div"));           
    }
    const emoji = document.createElement("div");
    emoji.setAttribute("id", "emoji");
    labelContainer.appendChild(emoji);
}

async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

// run the webcam image through the image model
async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    let myEmoji = "❓";
    let max_i = maxPredictions + 1;
    let max_prob = 0.35;
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
        if (prediction[i].probability > max_prob){
            max_i = i;
            max_prob = prediction[i].probability;
        }

    }
    if (max_i <= maxPredictions ){
        const predicted = prediction[max_i];
        if (predicted.className === 'thumb up'){  //This needs to make YOUR class label
            myEmoji = "😁";
        }
        else if (predicted.className === 'thumb down'){ //This needs to make YOUR class label
            myEmoji = "😱";
        }
        else if (predicted.className === 'peace'){ //This needs to make YOUR class label
            myEmoji = "💕";
        }
        else {
            myEmoji = "❓";
        }
        labelContainer.childNodes[maxPredictions].innerHTML = myEmoji;
    } else {
        labelContainer.childNodes[maxPredictions].innerHTML = "❓";
    }
}

