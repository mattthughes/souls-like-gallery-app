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
* Fixed profile edit bug, any user could access the edit form via the url to fix this, I added an if statment which checked if the current user did not match the profile id to redirect the user to the home page which fixed this issue.
* Fixed Files url bug by adjusting the value to be either the files variable or an empty string which fixed this issue.
* Fixed null bug with the files variable, to fix this I added an if statement which checked if the files variable was true, or if the files variable was not null and finally checked if the files variable was a string. Which meant the user could submit an empty string as well otherwise an empty div element will be returned

## Known Bugs

* When creating the comment the page refreshes with rather than keeping the user on the same page.
* When clicking the like button more the like button multiple times the like id will show as undefined and refresh the page to stop the application from crashing.
* When deleting, editing a comment the page refreshes rather than keeping the user on the same page.
* When creating and deleting a comment the toast notification does not load due to window.location.reload will look for a solution.


### Manual Testing

#### Aims

* The aim of testing is to make sure all elements work as intended without any console or server errors on the front end and making sure the application works on all screen sizes.

* This will be done by allowing the user to login, logout, register create, edit and delete there own posts and comments, add and remove likes.

* I will make sure each post goes to the correct ID. 

* When the user tries to view content that does not belong to them the user will be redirected to the not found page if the url does not exist or they do not have permissions to access the content or the user will be redirected to the page they were just on making sure users are unable to view content that does not belong to them.



### Testing Steps 

* I will test the responsiveness for all screen sizes by firstly clicking on the application and using the inspect tool to open the google chrome developer tools.
* After this I will click on the laptop display and change the aspect ration to 280px which is the lowest screen size, after this I will begin adjusting the screen sizes to make sure all elements are displaying correctly on all screen sizes.
* I will make sure all posts go to the correct ID, if a user is logged in they can create posts, comments, if they are the post or comment author they can edit and delete this comment otherwise redirect the user.
* I will make sure all links open in seperate tabs not taking the user from the pain page.
* I will make sure the not found page is loaded if the page does not exist or the user does not have the correct permissions to access the page otherwise redirect the user to the previous page they were on.
* All testing will be completed using Google Chrome, Internet Explorer.


`Responsive Tests`

**Responsiveness**|**Home**|**Gallery**|**Liked**|**Trending**|**Login Page**|**Register Page**|**Post Detail**|**Create Form**|**Edit Form**|**Game Detail**
:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:
Home text|Pass|N/A|N/A|N/A|N/A|N/A|NA|N/A|N/A|N/A
Navigation Bar|Pass|Pass|Pass|Pass|Pass|Pass|Pass|Pass|Pass|Pass
Gallery Images|N/A|Pass|N/A|N/A|N/A|N/A|N/A|N/A|N/A|N/A
Post Create|N/A|N/A|N/A|N/A|N/A|N/A|N/A|Pass|N/A|N/A
Post Edit|N/A|N/A|N/A|N/A|N/A|N/A|N/A|N/A|Pass|N/A
Game Create|N/A|N/A|N/A|N/A|N/A|N/A|N/A|Pass|N/A|N/A
Game Edit|N/A|N/A|N/A|N/A|N/A|N/A|N/A|Pass|N/A|N/A
Drop Down Menu|N/A|N/A|N/A|N/A|N/A|N/A|Pass|N/A|N/A|Pass
Liked Posts|N/A|N/A|Pass|N/A|N/A|N/A|N/A|N/A|N/A|N/A
Trending Posts|N/A|N/A|N/A|Pass|N/A|N/A|N/A|N/A|N/A|N/A
Login Form|N/A|N/A|N/A|N/A|Pass|N/A|N/A|N/A|N/A|N/A
Register Form|N/A|N/A|N/A|N/A|N/A|Pass|N/A|N/A|N/A|N/A
Comment Create|N/A|N/A|N/A|N/A|N/A|N/A|Pass|N/A|N/A|N/A
Comment Edit|N/A|N/A|N/A|N/A|N/A|N/A|Pass|N/A|N/A|N/A


`Home Testing`

**Element**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass/Fail**
:-----:|:-----:|:-----:|:-----:|:-----:
Home sign up link (not logged in)|Load sign up page|Clicked sign up link|Loaded sign up page|Pass
Home sign up link (logged in)|redirect user to home page|Clicked sign up link|Redirected user to home page|Pass
Home sign in link (not logged in)|Load sign in page|Clicked sign in link|Loaded sign in page|Pass
Home sign in link (logged in)|redirect user to home page|Clicked sign in link|Redirected user to home page|Pass
Home sign in (via url not logged in)|Load sign in page|Tried to access sign in page via url|Loaded sign in page|Pass
Home sign in (via url logged in)|redirect user to home page|Tried to access sign in page via url|Redirected user to home page|Pass
Home sign up (via url not logged in)|Load sign up page|Tried to access sign up page via url|Loaded sign up page|Pass
Home sign up (via url logged in)|redirect user to home page|Tried to access sign up page via url|Redirected user to home page|Pass
Not found|Load not found page if url incorrect|Typed URL did not exist|Loaded not found page|Pass

