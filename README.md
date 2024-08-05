# Souls Like Gallery

Souls Like Gallery is a content sharing application built using a frontend libary called React along with a backend framework called Djanjo Restframework this application will allow users to share there favourite experiences and moments from the souls like genre users will be able to create, read, update and delete records on the application. This is the Frontend development pipeline which showcases how this application was made.

- [Souls Like Gallery](#souls-like-gallery)
    - [CONTENTS](#contents)
    - [UX](#ux)
        - [Strategy Plane](#the-strategy-plane)
            - [Site Goals](#site-goals)
            - [Epics](#epics)
            - [User Stories](#user-stories-list)
        - [Scope Plane](#the-scope-plane)
            - [Features list](#features-list)
        - [Skeleton Plane](#the-skeleton-plane)
            - [Wireframes](#wireframes)
                - [Post Wireframe](#post-wireframe)
                - [Profile Wireframe](#profile-wireframe)
                - [Navigation Bar Wireframe](#navigation-wireframe)
                - [Login Wireframe](#login-wireframe)
                - [Sign up Wireframe](#sign-up-wireframe)
        - [Design plane](#design-plane)
            - [Color Palette](#color-palette)
            - [Typography](#typography)
                - [Headings](#headingss)
                - [Body](#body)
        - [Surface Plane](#surface-plane)
            - [Key Features](#key-features)
                - [Home Page](#home-page)
                    - [Mobile Home page](#mobile-home-view)
                    - [Desktop Home page](#desktop-home-view)
                - [Navigation Bar](#navigation-bar)
                    - [Mobile Navigation View](#mobile-navigation-bar-view)
                    - [Desktop Navigation View](#desktop-navigation-bar-view)
                - [Profile Page](#profile-page)
                    - [Mobile Profile view](#mobile-profile-view)
                    - [Desktop Games view](#desktop-profile-view)
                - [Sign in](#sign-in-page)
                    - [Mobile Sign in view](#mobile-sign-in-view)
                    - [Desktop Sign up view](#desktop-sign-in-view)
                - [Sign up](#sign-up-page)
                    - [Mobile login view](#mobile-sign-up-page)
                    - [Desktop login view](#desktop-sign-up-page)
                - [Gallery](#gallery)
                    - [Mobile Gallery view](#mobile-gallery-view)
                    - [Desktop Gallery view](#desktop-gallery-view)
                - [Posts](#posts)
                    - [Mobile Post Detail view](#mobile-post-detail-view)
                    - [Mobile Add Post view](#mobile-add-post-view)
                    - [Mobile Edit Post view](#mobile-edit-post-view)
                    - [Mobile Delete Post view](#mobile-delete-post-view)
                    - [Desktop Post Detail view](#desktop-post-detail-view)
                    - [Desktop Add Post view](#desktop-add-post-view)
                    - [Desktop Edit Post view](#desktop-edit-post-view)
                    - [Desktop Delete Post view](#desktop-delete-post-view)
                - [Games](#game)
                    - [Mobile Games List](#mobile-games-list)
                    - [Mobile Add Game](#mobile-add-game)
                    - [Mobile Edit Game](#mobile-edit-game)
                    - [Mobile Delete Game](#mobile-delete-game)
                    - [Desktop Games List](#desktop-games-list)
                    - [Desktop Add Game](#desktop-add-game)
                    - [Desktop Edit Game](#desktop-edit-game)
                    - [Desktop Delete Game](#desktop-delete-game)
                - [Liked Post](#saved-post)
                    - [Mobile Liked Posts page](#mobile-saved-posts-page)
                    - [Desktop Liked Posts page](#desktop-saved-posts-page)
                - [Favicon](#favicon)
                    [Desktop favicon view](#desktop-favicon-view)
    - [Technology](#technology)
        - [Languages](#languags)
            - [Frameworks & Tools](#frameworks--tools)
    - [Deployment](#deployment)
        - [Heroku Deployment](#heroku-deployment)
        - [Running Application locally](#running-application-locally)
        - [Fork Project](#fork-project)
    - [Testing](#testing)
    - [Credits](#credits)
        - [Content](#content)
        - [Code](#code)
    - [Acknowledgements](#acknowledgements)


[To view the deployed project click here](https://souls-like-gallery-03103574fc28.herokuapp.com/)


    


## UX

### Strategy Plane

#### Site Goals

This site allows users to post there greatest moments from the popular niche genre souls like where they can help inspire others.

* To allow users to join an evergrowing community

* Allowing users to create, read update and delete there own posts and comments

* Allowing users to search for any post by username game title, post content

* Users can give feedback to posts they find useful


#### Epics

I created six Epics which will be turned into User Stories

* Rate Posts interaction [[[#1](https://github.com/mattthughes/souls-like-gallery-app/issues/1)]]

* User Posts [[[#2](https://github.com/mattthughes/souls-like-gallery-app/issues/2)]]

* Post Searching [[[#3](https://github.com/mattthughes/souls-like-gallery-app/issues/3)]]

* User sign in or sign out [[[#4](https://github.com/mattthughes/souls-like-gallery-app/issues/4)]]

* User Profile [[[#5](https://github.com/mattthughes/souls-like-gallery-app/issues/5)]]

* React Project setup [[[#6](https://github.com/mattthughes/souls-like-gallery-app/issues/6)]]


#### User Stories list

1. User Profiles

* UserStory [[#12](https://github.com/mattthughes/souls-like-gallery-app/issues/12)]

* UserStory [[[#10](https://github.com/mattthughes/souls-like-gallery-app/issues/10)]]

* UserStory [[[#25](https://github.com/mattthughes/souls-like-gallery-app/issues/25)]]

* UserStory [[[#24](https://github.com/mattthughes/souls-like-gallery-app/issues/24)]]

2. Authentication

* UserStory [[[#9](https://github.com/mattthughes/souls-like-gallery-app/issues/9)]]

* UserStory [[[#31](https://github.com/mattthughes/souls-like-gallery-app/issues/31)]]

* UserStory [[[#32](https://github.com/mattthughes/souls-like-gallery-app/issues/32)]]

* UserStory [[[#29](https://github.com/mattthughes/souls-like-gallery-app/issues/29)]]

3. Navigation

* UserStory [[[#26](https://github.com/mattthughes/souls-like-gallery-app/issues/26)]]

* User Story [[[#28](https://github.com/mattthughes/souls-like-gallery-app/issues/28)]]

* UserStory [[[#27](https://github.com/mattthughes/souls-like-gallery-app/issues/27)]]

* UserStory [[[#8](https://github.com/mattthughes/souls-like-gallery-app/issues/8)]]



4. Post Interaction

* UserStory [[#21](https://github.com/mattthughes/souls-like-gallery-app/issues/21)]

* UserStory [[[#11](https://github.com/mattthughes/souls-like-gallery-app/issues/11)]]

* UserStory [[[#22](https://github.com/mattthughes/souls-like-gallery-app/issues/22)]]


* UserStory [[[#23](https://github.com/mattthughes/souls-like-gallery-app/issues/23)]]



5. Comment Interaction

* UserStory [[[#18](https://github.com/mattthughes/souls-like-gallery-app/issues/18)]] - As a **logged in user **I can read comments on posts so that I can what other users think of posts When the post is clicked comments to load Comments to show on specific post

* UserStory [[[#16](https://github.com/mattthughes/souls-like-gallery-app/issues/16)]]

* UserStory [[[#20](https://github.com/mattthughes/souls-like-gallery-app/issues/20)]]

* UserStory [[[#17](https://github.com/mattthughes/souls-like-gallery-app/issues/17)]]

* UserStory [[[#19](https://github.com/mattthughes/souls-like-gallery-app/issues/19)]]


6. Post Feedback

* UserStory [[[#15](https://github.com/mattthughes/souls-like-gallery-app/issues/15)]] - 

* UserStory [[[#14](https://github.com/mattthughes/souls-like-gallery-app/issues/14)]]

* UserStory [[[#7](https://github.com/mattthughes/souls-like-gallery-app/issues/7)]]


7. Trending Posts

* UserStory [[[#13](https://github.com/mattthughes/souls-like-gallery-app/issues/13)]]

### The Scope Plane

#### Features List

* Posts - Users can search for posts by the users name content of the post or the game title, users can also create, read update and delete there own posts
* Profile - Users can search for any user and view there posts and attachments such as linkedin link, they can also create, read, update and delete there own profile
* Likes and Comments - Users can leave likes and comments on posts they find useful providing they are logged in, users can create,read update, delete there own likes and comments
* Log in and Out - Users can logout of there account to keep there information secure, users can change passwords,

### The Skeleton Plane

#### Wireframes

##### Post Wireframe

![Post Mobile](docs/wireframes/post-detail-mobile.png)

![Post Desktop](docs/wireframes/post-detail-desktop.png)

##### Profile Wireframe

![Profile Mobile](docs/wireframes/profile-mobile.png)

![Profile Desktop](docs/wireframes/profile-desktop.png)

##### Navigation Wireframe

![Navigation bar not logged in mobile](docs/wireframes/nav-bar-not-logged-in-mobile.png)

![Navigation bar logged in mobile](docs/wireframes/nav-bar-logged-in-mobile.png)

![Navigation bar not logged in desktop](docs/wireframes/navbar-desktop-not-logged-in.png)

![Navigation bar logged in desktop](docs/wireframes/nav-bar-logged-in-desktop.png)

##### Login Wireframe

![Login Mobile](docs/wireframes/login-mobile.png)

![Login Desktop](docs/wireframes/sign-in-desktop.png)

##### Sign up Wireframe

![Sign up Mobile](docs/wireframes/sign-up-mobile.png)

![Sign up Desktop](docs/wireframes/sign-up-desktop-website.png)

## Design Plane

### Color Palette

## Typography

### Headings

I have decided to go for the Arsenal SC font heading I chose to go for this as it stands out compared to the other text on the application and makes the application look very professional.

![Typography Heading font](docs/wireframes/typography-heading.png)


### Body

I went for the OverPass font family for all other text on the application such as post content, comments and navigation font as this keeps the professional look I am going for on this application.

![Typography Body font](docs/wireframes/typography-body.png)

## Surface Plane 

### Key features

#### Home Page

This page upon loading will explain to the user how to create an account how to create a post, and a bit of a background around what the
application is designed for, the user is then able to click either the Sign in or sign up button depending if they have an account
already.

##### Mobile Home view

![Mobile Home page 1st section](docs/wireframes/home-mobile-1st.png)

![Mobile Home page 2nd section](docs/wireframes/home-mobile-2nd.png)

##### Desktop Home view

![Desktop Home page](docs/wireframes/home-desktop.png)

#### Navigation Bar

This page will use conditional rendering to determine which pages are displayed in the navigation bar for users that are not logged in, The home page, sign up and sign pages will be visible locking certain features away from users that aren't logged in. Once the user logs in, the Navigation bar will change now highlighting the following pages, Home, Gallery, Profile, Trending, Saved, Sign out, Add Post. This feature will collapse on mobile and stretch for desktops as well.

##### Mobile Navigation Bar view

`Navbar logo`

![Mobile Navbar logo](docs/wireframes/nav-bar-icon-mobile.png)

`Navbar not logged in`

![Mobile Navbar not logged in](docs/wireframes/nav-bar-mobile-not-logged-in.png)

`NavBar logged in Admin`

![Mobile Navbar logged in Admin](docs/wireframes/nav-bar-logged-in-admin-mobile.png)

`NavBar logged in User`

![Mobile Navbar logged in User](docs/wireframes/navbar-logged-in-user-mobile.png)



##### Desktop Navigation Bar view

`Navbar not logged in`

![Desktop Navbar not logged in](docs/wireframes/navbar-not-logged-in-desktop.png)

`NavBar logged in Admin`

![Desktop Navbar logged in Admin](docs/wireframes/nav-bar-logged-in-desktop-admin-feature.png)

`NavBar logged in User`

![Desktop Navbar logged in User](docs/wireframes/nav-bar-logged-in-user-desktop.png)


#### Profile Page

This page will showcase the users avatar image there username and also there posts each user will have a profile page which will be clickable, allowing users to view all the posts a specific user has posted

##### Mobile Profile view

`Mobile profile owner`

![Mobile profile owner](docs/wireframes/mobile-profile-owner.png)

`Mobile not the profile owner`

![Mobile not the profile owner](docs/wireframes/mobile-profile-not-the-owner.png)

`Mobile Profile has posts`

![Mobile Profile has posts](docs/wireframes/mobile-profile-has-posts.png)

`Mobile Profile zero posts`

![Mobile Profile zero posts](docs/wireframes/mobile-profile-no-posts.png)

##### Desktop Profile view

`Desktop Profile owner`

![Desktop profile owner](docs/wireframes/desktop-profile-owner.png)

`Desktop not the profile owner`

![Desktop not the profile owner](docs/wireframes/desktop-profile-page-not-the-owner.png)

`Desktop profile has posts`

![Desktop Profile has posts](docs/wireframes/desktop-profile-has-posts.png)

`Desktop Profile zero posts`

![Desktop Profile zero posts](docs/wireframes/desktop-profile-no-posts.png)


#### Sign in Page

This feature will allow users to log in to an existing account to gain access to the applications features  such as creating posts, leaving comments and likes.

##### Mobile Sign in view

![Mobile sign in page](docs/wireframes/sign-in-mobile-souls-like-gallery.png)

##### Desktop Sign in view

![Desktop sign in page](docs/wireframes/sign-in-desktop-souls-like-gallery.png)

#### Sign up page

This feature will highlight three features username password and confirm password upon a user entering these details providing the data entered is correct the user will be redirected to the login page with a message stating account created

##### Mobile Sign up page

![Mobile sign up page](docs/wireframes/sign-up-mobile-souls-like-gallery.png)

##### Desktop Sign up page

![Desktop sign up page](docs/wireframes/sign-up-desktop-souls-like-gallery.png)

#### Gallery

This Page will showcase many different posts but not in detail showing just the image or video of the post if a user wishes to find out more information regarding a post then the user can just click on the post image or video which will load the post detail.

##### Mobile Gallery view

##### Desktop Gallery view


#### Posts

This feature will be the primary feature of the application allowing users full creative control to create read update and delete there own posts, users are able to create a post attach either a video or image depending on what suits there needs. Users will be able to edit there own posts and delete posts while also being able to read other user posts they find useful.

##### Mobile Post Detail view

![Mobile Post Detail](docs/wireframes/mobile-post-detail.png)

##### Mobile Add Post view

![Mobile Add Post](docs/wireframes/mobile-add-post.png)

##### Mobile Edit Post view

![Mobile Edit Post part 1](docs/wireframes/mobile-edit-post-part-1.png)

![Mobile Edit Post part 2](docs/wireframes/mobile-edit-post-part-2.png)

##### Mobile Delete Post view

![Mobile Delete Post](docs/wireframes/mobile-post-delete.gif)

##### Desktop Post Detail view

![Desktop Post Detail](docs/wireframes/post-detail-desktop.png)

##### Desktop Add Post view

![Desktop Add Post](docs/wireframes/desktop-add-post.png)

##### Desktop Edit Post view

![Desktop Edit Post](docs/wireframes/desktop-edit-post.png)

##### Desktop Delete Post view

![Desktop Delete Post](docs/wireframes/desktop-post-delete.gif)

#### Games

This feature will be updated by the admin user who can create,edit,delete games. These will be linked to the post as well allowing a user to search for a specific game.

##### Mobile Games List

![Mobile Games List](docs/wireframes/mobile-games-list.png)

##### Mobile Add Game

![Mobile Add Game](docs/wireframes/mobile-add-game.png)

##### Mobile Edit Game

![Mobile Edit Game](docs/wireframes/mobile-edit-game.png)

##### Mobile Delete Game

![Mobile Delete Game](docs/wireframes/mobile-game-delete.gif)

##### Desktop Games List

![Desktop Games List](docs/wireframes/desktop-games-list.png)

##### Desktop Add Game

![Desktop Add Game](docs/wireframes/desktop-add-game.png)

##### Desktop Edit Game

![Desktop Edit Game](docs/wireframes/desktop-edit-game.png)

##### Desktop Delete Game

![Desktop Delete Game](docs/wireframes/desktop-game-delete.gif)


#### Liked Post

This feature will allow users to click like on a specific post they find useful or would like to look at again in the future, Once the user clicks on the liked page this page will load all the posts that a user has liked only showing them there posts and not others.


##### Mobile Saved Posts page

##### Desktop Saved Posts page


#### Favicon

This feature will be present alongside the title of the application I decided with a simple two swords design as the design is very simplistic and can be very memorable and also matches the theme of the application.

##### Desktop Favicon view

![Favicon view](docs/wireframes/favicon-souls-like-gallery.png)

## Technology

### Languages

* HTML
* CSS

### Frameworks & Tools

- [react](https://react.dev/)
- [react-bootstap](https://react-bootstrap.netlify.app/)
- [react infinite scroll](https://www.npmjs.com/package/react-infinite-scroll-component)
- [react toastify](https://www.npmjs.com/package/react-toastify)
- [axios](https://www.npmjs.com/package/axios)
- [JS Hint](https://jshint.com/)
- [CSS validator](https://jigsaw.w3.org/css-validator/)
- [Wave report](https://wave.webaim.org/)
- [Coolors](https://coolors.co/)
- [Git](https://git-scm.com/)
- [Github](https://github.com/)
- [Heroku](https://dashboard.heroku.com/apps)
- [Am I Responsive](https://ui.dev/amiresponsive)


## Deployment

### Heroku Deployment

### Running Application locally

### Fork Project


## Testing

I Tested this project extensively making sure each element worked as intended and had the desired result while also checking that there were no errors all testing documentation can be found [here](https://github.com/mattthughes/souls-like-gallery-app/blob/main/TESTING.md)

## Credits

### Content

### Code

### Imagery

## Acknowledgements