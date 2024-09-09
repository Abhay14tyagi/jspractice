function timeShow() {
    var now = new Date();
    var timeString = now.toTimeString();
    
    // Clear previous content before adding the new time string
    var timeResultElement = document.querySelector('#timeResult');
    timeResultElement.textContent = '';  // Clear previous content

    // Append the new time string
    timeResultElement.appendChild(document.createTextNode(timeString));
}