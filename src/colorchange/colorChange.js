function colorChange(event)
{
const color=event.target.textContent.trim();
 document.body.style.backgroundColor=color;
}
// function colorChange(event) {
//     const clickedButton = event.target;
//     const color = clickedButton.textContent.trim(); // Get the text content (color name)
//     const mainDiv = document.getElementById('mainDiv');
//     mainDiv.style.backgroundColor = color;
// }