# TJ Student Government Association Website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It was made to replace the [old website](https://github.com/tjsga/website-2018) to use a more modern framework (React) and a better content management system ([Sanity](https://www.sanity.io/)).

This website has a page for recent news, pages for the officers and different committees, a page for SGA initiatives and how to get involved in SGA, and a page about SGA's mission and vision. Most of the content itself is hosted outside of the repository on Sanity, because we hope to note have to change the website very often.

The Sanity schema is hosted in [this Github repository](https://github.com/tjsga/website-sanity). This describes the structure of the data but doesn't actually host any of it either.

Note for people who are editing the website: to add a group photo for a certain Class Council, create a Member on Sanity with a descriptive name, the year the photo is for, and the role set to "photo". Then, you should describe who's in the photo in the "bio" section of the Member.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
