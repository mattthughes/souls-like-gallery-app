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
                - [Trophy Title](#trophy-title)
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
                    - [Desktop Post Detail view](#desktop-post-detail-view)
                    - [Mobile Add Post view](#mobile-add-post-view)
                    - [Desktop Add Post view](#desktop-add-post-view)
                    - [Mobile Edit Post view](#mobile-edit-post-view)
                    - [Desktop Edit Post view](#desktop-edit-post-view)
                    - [Mobile Delete Post view](#mobile-delete-post-view)
                    - [Desktop Delete Post view](#desktop-delete-post-view)
                - [Saved Post](#saved-post)
                    - [Mobile Save Post Button](#mobile-save-post-button)
                    - [Desktop Save Post Button](#desktop-save-post-button)
                    - [Mobile Saved Posts page](#mobile-saved-posts-page)
                    - [Desktop Saved Posts page](#desktop-saved-posts-page)
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

##### Desktop Home view

#### Navigation Bar

This page will use conditional rendering to determine which pages are displayed in the navigation bar for users that are not logged in, The home page, sign up and sign pages will be visible locking certain features away from users that aren't logged in. Once the user logs in, the Navigation bar will change now highlighting the following pages, Home, Gallery, Profile, Trending, Saved, Sign out, Add Post. This feature will collapse on mobile and stretch for desktops as well.

##### Mobile Navigation Bar view

##### Desktop Navigation Bar view

#### Profile Page

This page will showcase the users avatar image there username and also there posts each user will have a profile page which will be clickable, allowing users to view all the posts a specific user has posted

##### Mobile Profile view

##### Desktop Profile view


#### Sign in Page

This feature will allow users to log in to an existing account to gain access to the applications features  such as creating posts, leaving comments and likes.

##### Mobile Sign in view

##### Desktop Sign in view

#### Sign up page

This feature will highlight three features username password and confirm password upon a user entering these details providing the data entered is correct the user will be redirected to the login page with a message stating account created

##### Mobile Sign up page

##### Desktop Sign up page



#### Gallery

This Page will showcase many different posts but not in detail showing just the image or video of the post if a user wishes to find out more information regarding a post then the user can just click on the post image or video which will load the post detail.

##### Mobile Gallery view

##### Desktop Gallery view


#### Posts

This feature will be the primary feature of the application allowing users full creative control to create read update and delete there own posts, users are able to create a post attach either a video or image depending on what suits there needs. Users will be able to edit there own posts and delete posts while also being able to read other user posts they find useful.

##### Mobile Post Detail view

##### Desktop Post Detail view

##### Mobile Add Post view

##### Desktop Add Post view

##### Mobile Edit Post view

##### Desktop Edit Post view

##### Mobile Delete Post view

##### Desktop Delete Post view

#### Saved Post

This feature will allow users to click save on a specific post they find useful or would like to look at again in the future the button will change from save to saved using conditional rendering to change the buttons text and functionality, Once the user clicks on the saved page this page will load all the posts that a user is saved only showing them there posts and not others.

##### Mobile Save Post Button

##### Desktop Save Post Button

##### Mobile Saved Posts page

##### Desktop Saved Posts page


#### Favicon

##### Desktop Favicon view

## Technology

### Languags

### Frameworks & Tools

## Deployment

### Heroku Deployment

### Running Application locally

### Fork Project


## Testing

## Credits

### Content

### Code

### Imagery

## Acknowledgements