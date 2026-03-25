####Questions : 
1. What is JSX, and why is it used?
2. What is the difference between State and Props?
3. What is the useState hook, and how does it work?
4. How can you share state between components in React?
5. How is event handling done in React?

####Answers :
1. JSX Stands for JavaScript XML. It's helps to write javascript code in a HTML way. It helps to write html and js together. That makes it easier to maintain. 

2. State and Props stores data in React. State are changeable or mutable, but Promps are immutable. State used within a compoment but props are passed from parent component to child components. 

3. useState is a hook used in react which manages the state of component. That helps to rerender the component when the state changes.

4. Suppose i need to share state between two components. I can create a parent component and use those two components as child. and use props to pass the state.

5. React use synthetic event handler, which works all different browsers. event handle on root and react decides which component to update. Instead of using small latter react use camelCase for event handler.