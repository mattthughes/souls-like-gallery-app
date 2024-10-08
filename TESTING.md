# Souls Like Gallery Testing

![Am I responsive souls like gallery](docs/wireframes/am-i-responsive-souls-like-gallery.png)

Welcome to testing results of front end part of the advanced front end application known as Souls like gallery in this document you will find all the testing resuts such as solved bugs, how they were fixed any known bugs, manual and automated testing as well and how they were tested making sure each element worked as intended.

## CONTENTS

- [Souls Like Gallery Testing](#souls-like-gallery-testing)
- [HTML Validation](#html-validation)
- [React Validation](#react-validation)
- [CSS Validation](#css-validation)
- [Solved Bugs](#solved-bugs)
- [Known Bugs](#known-bugs)
- [Lighthouse Testing](#lighthouse-testing)
    - [Mobile lighthouse testing](#mobile-lighthouse-testing)
    - [Desktop lighthouse testing](#desktop-lighthouse-testing)
- [Wave Report](#wave-report)
- [Manual Testing](#manual-testing)
    - [Aims](#aims)
    - [Testing Steps](#testing-steps)
    - [Testing Results](#testing-results)
- [Automated Testing](#automated-testing)
    - [Aims](#automated-testing-aims)
    - [Testing Logic](#testing-logic)
    - [Testing Results](#automated-testing-results)


View API Readme [here](https://github.com/mattthughes/souls-like-api)


## Testing Content

### HTML Validation

![HTML Validation](docs/wireframes/html-souls-like-validation.png)

### React validation

`ESLint`

![ESLint React validation](docs/wireframes/compile-react.png)


`ESLint Playground`

These are the settings I used to validate the react, jsx code every single page has no unused vars errors which is just part of the validation software. 

![ESLint Settings](docs/wireframes/eslint-settings.png)

![ESLint Playground validation](docs/wireframes/eslint-validation-no-unused-vars.png)


### CSS validation

`Asset`

![Asset CSS Validator](docs/wireframes/asset-validator.png)

`Avatar`

![Avatar CSS Validator](docs/wireframes/avatar-validator.png)

`Button`

![Button CSS Validator](docs/wireframes/button-validator.png)

`Comment Create and edit form`

![Comment create and edit CSS Validator](docs/wireframes/comment-create-edit-validator.png)

`Game`

![Game CSS Validator](docs/wireframes/game-css-validator.png)

`Game Create and edit form`

![Game create and edit CSS Validator](docs/wireframes/game-create-edit-css-validator.png)

`Home`

![Home CSS Validator](docs/wireframes/home-validator.png)

`Navbar`

![Navbar CSS Validator](docs/wireframes/navbar-validator.png)

`Post`

![Post CSS Validator](docs/wireframes/post-validator.png)

`Post Detail`

![Post Detail CSS Validator](docs/wireframes/post-detail-validator.png)


`Profile page`

![Profile Page CSS Validator](docs/wireframes/profile-page-validator.png)


`Sign up and sign in`

![Sign up and Sign in CSS Validator](docs/wireframes/sign-up-sign-in-validator.png)

`Trending`

![Trending CSS Validator](docs/wireframes/trending-validator.png)



### Solved Bugs

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
* Fixed Post creation bug originally I could not use a select field to show the games in a list as the data was shown as undefined and null. To fix this I checked if games.length was true if this was to map over the games and place these in the option field. To check this was the correct value I used the game id as the key and value as the game which allowed me to target the correct games fixing this issue.
* Fixed comment creation bug by adjusting the settings py in the backend to target the correct array as this was just targeting an empty object rather than the results array which could then not be mapped over changing the settings fixed this issue for comment creation, edit comment, delete comment
* Fixed like button bug after fixing the pagination results this was also fixed by adjusting post id to data id which fixed this issue.
* Fixed no-constant-binary-expression bug when trying to append the files form data on the profile page I was using the or expression and checking if files was not equal to null. Which I couldnt do as the file did not exist removing the null check fixed this issue.

## Known Bugs

* When submitting the edit profile form a warning is sent to the console regarding an unmounted component with the state not being able to be updated due to this. I tried to create a use effect clean up function to detect the state which did not fix the warning will look for a solution.
* While testing on safari I came across a bug where once a user signs in they were be redirected to the sign in page with the sign in token not being added is a known issue could not find fix.

### Lighthouse testing

From the following results I aimed to improve performance by trying to resize image and change specific colours, this is the resulting performance on the home and gallery page lighthouse tests were performed for all other pages.

#### Mobile lighthouse testing

`Home`

![Home Mobile lighthouse](docs/wireframes/home-lighthouse-mobile.png)

`Gallery`

![Gallery Mobile lighthouse](docs/wireframes/gallery-mobile-lighthouse.png)

#### Desktop lighthouse testing

`Home`

![Home Desktop lighthouse](docs/wireframes/home-lighthouse-desktop.png)

`Gallery`

![Gallery Desktop lighthouse](docs/wireframes/gallery-desktop-lighthouse.png)

### Wave Report

`Home`

![Home wave report](docs/wireframes/wave-home-souls-like.png)

`Gallery`

![Gallery wave report](docs/wireframes/wave-gallery-souls-like.png)

`Create Post`

![Create post wave report](docs/wireframes/wave-create-post.png)

`Add Game`

![Add game wave report](docs/wireframes/wave-add-game.png)

`Trending`

![Trending wave report](docs/wireframes/wave-trending.png)

`Liked`

![Liked wave report](docs/wireframes/wave-liked.png)

`Sign in`

![Sign in wave report](docs/wireframes/wave-sign-in.png)

`Sign up`

![Sign up wave report](docs/wireframes/wave-sign-up.png)

`Profile`

![Profile wave report](docs/wireframes/wave-profile.png)


### Manual Testing

#### Aims

* The aim of testing is to make sure all elements work as intended without any console or server errors on the front end and making sure the application works on all screen sizes.

* This will be done by allowing the user to login, logout, register create, edit and delete there own posts and comments, add and remove likes.

* I will make sure each post goes to the correct ID. 

* When the user tries to view content that does not belong to them the user will be redirected to the not found page if the url does not exist or they do not have permissions to access the content or the user will be redirected to the page they were just on making sure users are unable to view content that does not belong to them.



#### Testing Steps 

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


`Gallery Testing`
**Element**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass/Fail**
:-----:|:-----:|:-----:|:-----:|:-----:
Post A peaceful place|Show post detail when clicked|Clicked post image|Post a peaceful place loaded|Pass
Post Peaceful setting|Show post detail when clicked|Clicked post image|Post peaceful setting loaded|Pass
Post My favourite boss in the whole series|Show post detail when clicked|Clicked post image|Post my favourite boss in the whole series loaded|Pass
Post I finally did it|Show post detail when clicked|Clicked post image|Post I finally did it loaded|Pass
Post Messmer Rune level 1 complete|Show post detail when clicked|Clicked post image|Post Messmer Rune Level 1 complete loaded|Pass
Post Beautiful Location|Show post detail when clicked|Clicked post image|Post Beautiful location loaded|Pass
Post O & S are Legendary|Show post detail when clicked|Clicked post image|Post O & S are legendary loaded|Pass
Post What a beautiful game|Show post detail when clicked|Clicked post image|Post What a beautiful game loaded|Pass
Post I remember where I was when this trailer dropped|Show post detail when clicked|Clicked post image|Post I remember where I was when this trailer dropped loaded|Pass
Post Is this the hardest boss in souls history|Show post detail when clicked|Clicked post image|Post Is this the hardest boss in souls history loaded|Pass
Post Malenia RL1 Complete|Show post detail when clicked|Clicked post image|Post Malenia RL1 Complete|Pass
Posts infinite scroll|Posts to load not refreshing the page|Scrolled down the gallery page|Posts loaded without page refreshing loading new posts as the user scrolls|Pass
Post Search game title|Games from that specific title to show only|Typed game title|Games from specific title showed|Pass
Post Search post title|Posts with specific title to load|Typed post title|Posts from specific title loaded|Pass
Post Search username|Posts from specific users to show|Typed users profile name|Posts from specific user loaded|Pass


`Game Testing`

**Element**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass/Fail**
:-----:|:-----:|:-----:|:-----:|:-----:
Add game button (admin user)|Load Add game form|Clicked add game button|Loaded add game form|Pass
Add game button (user)|Button to not be visible on navbar|Logged in as normal user|Add game button hidden|Pass
Add game button (not logged in)|Button to not be visible on navbar|Loaded the site|Add game button hidden|Pass
Add game (via url admin)|Load Add game form|Tried to access add game via url|Loaded add game form|Pass
Add game (via url not logged in)|Redirect user to not found page|Tried to access add game via url|Redirected user to not found page|Pass
Add game (via url user)|Redirect user to not found page|Tried to access add game via url|Redirected user to not found page|Pass
Submit form empty|Alert user slug, title, image required|Tried to submit form|Alert informing user slug,title,image required|Pass
Submit form  invalid type image|Alert user invalid type for image|Tried to submit form with AIF|Alert informing user invalid image type|Pass
Submit form empty slug|Alert user slug required|Tried to submit form with empty slug|Alert user informing slug required|Pass
Submit form duplicate slug|Alert user slug already exists|Tried to submit form with a duplicate slug|Alert informing user slug already exists|Pass
Submit form empty title|Alert user title required|Tried to submit form with empty title|Alert informing user title required|Pass
Submit form duplicate title|Alert user title already exists|Tried to submit form with a duplicate title|Alert user informing title already exists|Pass
Submit form correct data|Form to be submitted includes a pop up stating game created|Tried to submit form with correct data|Form submit pop up stating game created appeared|Pass
Cancel button|Return user to previous page|Clicked the cancel button|Returned user to previous page|Pass
View existing games dropdown|Show existing games in a list so the user does not try to create an already existing game|Clicked drop down|Loaded existing games in a list|Pass
Game Detail edit button (admin)|Load edit game form with populated fields|Clicked edit game button|Loaded edit game form|Pass
Game Detail edit button (user)|Edit game button to be hidden|Accessed game detail form|Edit game button hidden|Pass
Game Detail (edit via url admin)|Load edit game form with populated fields|Tried to access edit game via url|Loaded edit game form|Pass
Game Detail edit (via url user)|Redirect user to previous page|Tried to access edit game via url|Redirected user to previous page|Pass
Game Detail edit (not logged in user via url)|Redirect user to previous page|Tried to access edit game via url|Redirected user to previous page|Pass
Game Detail edit (invalid image)|Alert user invalid type for image|Tried to save form with invalid type|Alert informing invalid image type|Pass
Game Detail edit empty slug|Alert user slug required|Tried to submit form with empty slug|Alert user informing slug required|Pass
Game Detail edit duplicate slug|Alert user slug already exists|Tried to submit form with a duplicate slug|Alert informing user slug already exists|Pass
Game Detail edit empty title|Alert user title required|Tried to submit form with empty title|Alert informing user title required|Pass
Game Detail edit duplicate title|Alert user title already exists|Tried to submit form with a duplicate title|Alert user informing title already exists|Pass
Game Detail edit  correct data|Form to be submitted includes a pop up stating game edited|Tried to submit form with correct data|Form submit pop up stating game edited appeared|Pass
Game Detail cancel button|Redirect user to previous page|Clicked cancel button|Redirected user to previous page|Pass
Game Detail edit button (admin)|Load edit game form with populated fields|Clicked edit game button|Loaded edit game form|Pass
Game Detail edit button (user)|Edit game button to be hidden|Accessed game detail form|Edit game button hidden|Pass
Game Detail (not logged in via url)|Redirect user to login|Tried to access game detail page via url|Redirected user to login|Pass
Game Detail (admin)|Load game detail list|Tried to access game detail page via url|Loaded game detail list|Pass
Game Detail (user)|Load game detail list|Tried to access game detail page via url|Loaded game detail list|Pass
Game Detail delete button (admin)|Delete game redirect user to previous page informing user of game deletion|Clicked delete button|Game deleted informing user of game deletion|Pass
Game Detail delete button (user)|Delete game button to be hidden|Loaded game detail|Game delete button hidden|Pass

`Post Testing`

**Element**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass/Fail**
:-----:|:-----:|:-----:|:-----:|:-----:
Create post button (logged in)|Load create post form|Clicked create post button|Loaded create posr form|Pass
Create post button (not logged in)|Button to not be visible on navbar|Loaded the site|Create post button hidden|Pass
Create post (via url logged in)|Load create post form|Tried to access create post via url|Loaded create post form|Pass
Create post (via url not logged in)|Redirect user to home page|Tried to access create post via url|Redirected user to home page|Pass
Submit form empty|Alert user , title, image, game required|Tried to submit form|Alert informing user title,image, game required|Pass
Submit form invalid type image|Alert user invalid type for image|Tried to submit form with AIF|Alert informing user invalid image type|Pass
Submit form empty game|Alert user game required|Tried to submit form with empty game|Alert user informing game required|Pass
Submit form duplicate game|Alert user game already exists|Tried to submit form with a duplicate game|Alert informing user game already exists|Pass
Submit form empty title|Alert user title required|Tried to submit form with empty title|Alert informing user title required|Pass
Submit form duplicate title|Alert user title already exists|Tried to submit form with a duplicate title|Alert user informing title already exists|Pass
Submit form correct data|Form to be submitted includes a pop up stating post created|Tried to submit form with correct data|Form submit pop up stating post created appeared|Pass
Cancel button|Return user to previous page|Clicked the cancel button|Returned user to previous page|Pass
View existing games dropdown|Show existing games in a list so the user does not try to add a game that does not exist|Clicked drop down|Loaded existing games in a list|Pass
View games detail button|Show games list in detail when clicked|Clicked games detail button|Loaded games detail page|Pass
Post Detail edit button (post author)|Load edit post form with populated fields|Clicked edit post button|Loaded edit post form|Pass
Post Detail edit button (user)|Edit post button to be hidden|Accessed post detail form|Edit post button hidden|Pass
Post Detail (edit via url post author)|Load edit post form with populated fields|Tried to access edit post via url|Loaded edit post form|Pass
Post Detail edit (via url user)|Redirect user to previous page|Tried to access edit post via url|Redirected user to previous page|Pass
Post Detail edit (not logged in user via url)|Redirect user to previous page|Tried to access edit post via url|Redirected user to previous page|Pass
Post Detail edit (invalid image)|Alert user invalid type for image|Tried to save form with invalid type|Alert informing invalid image type|Pass
Post Detail edit empty game|Alert user game required|Tried to submit form with empty slug|Alert user informing slug required|Pass
Post Detail edit duplicate game|Alert user game already exists|Tried to submit form with a duplicate game|Alert informing user game already exists|Pass
Post Detail edit game does not exist|Alert user game does not exist|Tried to submit form with game that did not exist|Alert informing user game does not exist|Pass
Post Detail edit empty title|Alert user title required|Tried to submit form with empty title|Alert informing user title required|Pass
Post Detail edit duplicate title|Alert user title already exists|Tried to submit form with a duplicate title|Alert user informing title already exists|Pass
Post Detail edit correct data|Form to be submitted includes a pop up stating post edited|Tried to submit form with correct data|Form submit pop up stating post edited appeared|Pass
Post Detail cancel button|Redirect user to previous page|Clicked cancel button|Redirected user to previous page|Pass
Post Detail delete button (post author)|Delete post redirect user to previous page informing user of game deletion|Clicked delete button|Post deleted informing user of post deletion|Pass
Post Detail like button (post author)|Tooltip to appear saying you cant like your own post|Tried to like own post|Tooltip appeared saying you cant like your own post|Pass
Post Detail like button (user)|Like count to increment by 1|Clicked like button|Like count incremented by 1|Pass
Post Detail like button (not logged in)|Tooltip to appear saying you need to log in to like posts|Tried to like post|Tooltip appeared saying you need to login to like posts|Pass
Post Detail unlike (user)|Like count to decrease by 1|Clicked like button again|Like count decreased by 1|Pass
Post Detail Add Comment (user)|Comment to be added without page refreshing|Added post|comment added being showcased via a pop up message|Pass
Post Detail Add Comment (not logged in)|Comment form to be hidden|Viewed post detail and tried to comment|Comment form hidden|Pass
Post Detail Edit Comment (post author)|Comment form to load|Clicked edit comment|Comment edit form loaded|Pass
Post Detail Edit Comment (user)|Comment edit form button to be hidden|Tried to edit comment|Comment edit form hidden|Pass
Post Detail Edit Comment (not logged in)|Comment edit form button to be hidden|Tried to edit comment|Comment edit form hidden|Pass
Post Detail Edit comment save button (comment author)|Comment to be updated without page refreshing showing a pop up message stating comment edited|Clicked save button|Comment edited being showcased via a pop up message|Pass
Post Detail Delete comment (comment author)|Comment deletion button to show upon deletion show pop up message comment deleted without page refreshing|Clicked comment delete button|Comment deleted pop up message appeared page did not refresh|Pass
Post Detail Delete comment (user)|Comment deletion button to be hidden|Loaded comment detail|Comment delete button hidden|Pass
Post Detail Attachments|Post Detail Attachments to open in new window|Clicked Attachments|Attachments opened in new window|Pass

`Trending Testing`

**Element**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass/Fail**
:-----:|:-----:|:-----:|:-----:|:-----:
Trending post (logged in)|Load trending page|Logged in clicked trending button|Loaded trending page|Pass
Trending post (not logged in)|Trending post button to be hidden|Loaded the application|Trending post button to be hidden|Pass
Trending post (via url logged in)|Load trending page|Tried to access trending post via url|Loaded trending page|Pass
Trending post (via url not logged in)|Redirect user to home page|Tried to access trending post via url|Redirected user to home page|Pass
Trending post (order by likes)|Posts to be ordered by posts|Clicked trending page|Posts ordered by likes|Pass
Trending post (limit)|Posts to be limited to 10 on the trending page|Clicked trending page|Posts limited to 10 on trending page|Pass
Trending post (view post button)|Post detail to load showing the correct post|Clicked view post button|Loaded post detail with correct post|Pass

`Liked Testing`

**Element**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass/Fail**
:-----:|:-----:|:-----:|:-----:|:-----:
Liked Post button (user)|Liked post page button to be shown|Clicked Liked post button|Loaded Like Post page|Pass
Liked Post button (not logged in)|Liked post page button hidden|Loaded application|Liked Post page hidden|Pass
Liked Post (via url logged in)|Liked post page to load|Tried to access like post page via url|Loaded Like Post page|Pass
Liked Post (via url not logged in)|Redirect user to home page|Tried to access liked post via url|Redirected user to home page|Pass
Likes to only show users posts|Show only the users liked posts|Logged in two different accounts to checked likes|Liked posts shown on specific account depending on the user|Pass

`Profile Testing`

**Element**|**Expected Outcome**|**Testing Performed**|**Result**|**Pass/Fail**
:-----:|:-----:|:-----:|:-----:|:-----:
Profile page (user)|Profile page for user to show|Logged in clicked profile icon|Profile page shown|Pass
Profile page (not logged in)|Profile page button to be hidden|Accessed profile page|Profile page to be hidden|Pass
Profile page (via url logged in)|Profile page for user to show|Tried to access profile page via url|Profile page shown|Pass
Profile page (via url not logged in)|Redirect user to home page|Tried to access profile page via url|Redirected user to home page|Pass
Profile edit page (profile author)|Profile edit form to show|Clicked edit button|Profile edit form shown|Pass
Profile edit form (user)|Edit button to be hidden|Loaded profile page|Edit buttons hidden|Pass
Profile edit form files field (not a url)|Alert to show that the field must be a url|Typed random words|Alert informing field must be a url|Pass
Profile edit form image (invalid format)|Alert user invalid format|Tried to submit form with AIF|Alert informing user of invalid format|Pass
Profile edit form correct data|Form to submit informing user profile edited|Submitted form|Profile submitted informing user profile edited|Pass
Profile files(desktop)|Profile files to open in new window|Clicked files|Files opened in new window|Pass
Profile files (mobile)|Profile files to show view files to open in new window|Loaded profile clicked files|View files appeared link opened in a new window|Pass


### Automated Testing


#### Automated Testing Aims

* To make sure all components return the correct component as intended.
* To make sure there are not any errors during testing.


#### Testing Logic

`NavBar Tests`

![NavBar tests part 1](docs/wireframes/nav-bar-tests-part-1.png)

![NavBar tests part 2](docs/wireframes/nav-bar-tests-part-2.png)

![NavBar tests part 3](docs/wireframes/nav-bar-tests-part-3.png)

`Posts Tests`

![Posts tests](docs/wireframes/post-tests.png)

`Trending Tests`

![Trending test](docs/wireframes/trending-test.png)


##### Testing Results

![Automated test results](docs/wireframes/automated-tests-souls-like.png)


