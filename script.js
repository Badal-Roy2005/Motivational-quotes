document.getElementById('get-quote').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
  
    // Set up the request
    xhr.open('GET', 'https://motivation-quotes4.p.rapidapi.com/api');
    xhr.setRequestHeader('x-rapidapi-key', '8074f8bcffmshbe45598f70c3205p1a9cf9jsn240b5dfddb3e');
    xhr.setRequestHeader('x-rapidapi-host', 'motivation-quotes4.p.rapidapi.com');
  
    // Handle the response
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        const response = JSON.parse(this.responseText); // Parse the response JSON
        console.log(response); // For debugging, log the response to the console
  
        // Check if the response contains a valid quote
        if (response && response.quote) {
          // Update the quote text in the 'quote-text' element
          const quoteElement = document.getElementById('quote-text');
          quoteElement.textContent = `"${response.quote}"`;
        } else {
          console.log('No quote found in the response.');
        }
      }
    });
  
    // Send the request
    xhr.send();
  });
  