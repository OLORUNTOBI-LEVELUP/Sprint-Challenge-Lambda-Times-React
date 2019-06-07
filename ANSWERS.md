##Answers

 1) PropTypes which is a way of making runtime assertions about what type of data a React component requires in order to render properly. Its basically used for Typechecking and helps the developer to eliminate bugs by avoiding passing the wrong type and also helps with code maintainenance.

 2) React allows us define components as classes or functions. The methods that we are able to use on these are called lifecycle events. These methods can be called during the lifecycle of a component, and they allow you to update the UI and application states. e.g mounting, Updating and unmounting

 3) A higher-order component is a function that takes a component as an argument and returns a new component. The concept is derived from functional Programming. Basically HOC's take in a component and returns something.

 4) External Stylesheet
    
    External stylesheets has its advantages in the sense that all our css styles can be housed in a particular file whuich helps with seperation of concerns and code maintainability as we have all our different codes housed in different files. The external file is then imported into the file


    Inline styles

    Inline styles can be very powerful and as the name suggests are passed directly to the tag directly to be styled. It can be very powerful, and the style is scoped to that particular tag


    Styled components

    Styled components is css in js. It allows us to style each components directly, thereby housing our JSX, and styles in just one folder. This is very powerful and makes the it easier to build reusable components. Its also very good because the styles are scoped to that particular component and don't spill out to other folders. Its also very good as we can use css preprocessor principles or normal css pricnciples within it

