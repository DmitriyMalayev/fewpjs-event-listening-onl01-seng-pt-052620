const input = document.createElementById("input"); // 1.1  

function addingEventListener() {
    input.addEventListener('click', function(event) {  // 1.2 
        alert("I was clicked");
    })
}

/**
1.1 
    Node that will be doing the listening
    Must be declared outside of a function?? 
1.2  
    Invocating addEventListener on the note that will be doing the listening
    First argument is the event name to listen for. 
    The second argument is the callback function. 
*/