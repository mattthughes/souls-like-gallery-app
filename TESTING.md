## Solved Bugs

* Fixed an error where trying to create an account with the sign up form a 400 post error would appear to fix this I imported the axiosDefaults to the app.js file which fixed this issue.
* Fixed an error where the navigation bar was not changing once the admin users logged in to fix this checked to see if the current user was the admin user if they were to render the games icon in the navigation bar otherwise hide it this line of code fixed this error.
* Fixed route error where any user could access the game url, to fix this I created a private route component and placed the game route in the app.js file inside the new private route component. Which was checking to see if the current user has the username admin to allow the user to access the game url otherwise load a page not found message which fixed this issue.
* Fixed private route errors instead of redirecting the user to the games component I redirected them to the home page if they were not the admin user which meant only the admin user could access the games page fixing this error.
* Fixed 404 and 405 errors for game create form initally when clicking create the form could not be submitted after looking at the backend urls there was a spelling mistake adjusting the spelling to match the backend url fixed this issue.
* Fixed private route error originally the admin user could not access the url, as they were being redirected like normal users.To fix this I checked if the current user was the admin user if they were to return the children props otherwise render a not found page which fixed this issue.
* Fixed private route error when trying to access the detail view the create form would not load to fix this I added the use location hook and only triggered the if statement if the user was the admin user and the path name matched otherwise return the not found component which fixed this issue.
* Fixed game post error initally the user could enter negative numbers and random numbers which would load an error stating the id pk does not exist adding a min and max variable to the form control element fixed this issue.
* Fixed Comments bug with a tempoary solution as the comments get request was not recieving the correct data and was being listed as undefined I removed the results array and just mapped over the length of the comments array which fixed this issue.
* Fixed comment refresh bug by adding in window.location.reload(); which would reload the page once the comment was created not forcing the user to reload this is another temporary solution and will look for others If I have time to.
* Fixed like increment issue by changing the setPosts prop to setpost which targeted the correct array fixing this issue.
* Fixed like increment crash bug by adding in a temporary fix which uses window.location.reload to reload the page instead of crashing the application will look for further solutions.
* Fixed Image data bug on the game create form by changing the appended data from a string to the image input current file fixing this issue.

## Known Bugs

* When creating the comment the page refreshes with rather than keeping the user on the same page.
* When clicking the like button more the like button multiple times the like id will show as undefined and refresh the page to stop the application from crashing.
* When deleting a comment the page refreshes rather than keeping the user on the same page.