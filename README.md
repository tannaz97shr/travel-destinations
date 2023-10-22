# Travel Destinations

## Overview

- This project is to search through travel destinations and read information about the destination, Moreover when a destination is selected, nearby destinations are suggested.

## Design Decisions

- **UI Framework - Tailwind CSS**: Tailwind CSS promotes a modular approach to styling by using utility classes. This allows for a highly scalable codebase where styles can be easily organized, reused, and modified. As the project grows, it becomes easier to maintain and manage the styles since changes can be applied consistently across the project.

- **Data Caching - React Query**: React Query allows us to prefetch data before it's actually needed, which improves the performance of your application, especially in cases like pagination. By prefetching data in advance, you can reduce latency and provide a seamless user experience.

- **Routing - React Router v6**: Used React Router v6 for URL parameters and routing. Besides it is used for nested routing in a way that for previewing each destination there is a specific URL

## Technologies Used

- React: Compared to other frontend frameworks, the React code is easier to maintain and is flexible due to its modular structure. This flexibility, in turn, saves a huge amount of time and cost to businesses.

- React Query: Highlight how React Query improves data management and caching.

- React Router v6: When you use React Query to fetch data, the results are stored in a local cache. This means that if you request the same data again, React Query will return the cached results instead of making another API call. The cache is automatically invalidated when the data changes, so you'll always get the latest data.

- Tailwind CSS: With Tailwind, you style elements by applying pre-existing classes directly in your HTML. By using utility classes in this way, you can build custom designs without writing CSS.

- Other technologies, if applicable (e.g., Node.js, Express.js, etc.).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
