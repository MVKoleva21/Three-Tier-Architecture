function attemptLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Simulate fetching user data from a text file
  fetch("../DataStorageTier/data.txt")
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to fetch user data');
          }
          return response.text();
      })
      .then(data => {
          var lines = data.split('\n');
          var found = false;

          for (var i = 0; i < lines.length; i++) {
              var [storedUsername, storedPassword] = lines[i].split(',');

              if (username === storedUsername && password === storedPassword) {
                  found = true;
                  break;
              }
          }

          if (found) {
              alert('Login successful!');
          } else {
              alert('Invalid username or password. Please try again.');
          }
      })
      .catch(error => {
          console.error('Error:', error.message);
          alert('Error: Unable to fetch user data. Please try again.');
      });
}
