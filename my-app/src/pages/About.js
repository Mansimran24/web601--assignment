import React from "react";

const About= ()=> {
  return (
    
      <div className="about">
        <div class="container">
          <div class="row align-items-center my-5">

            <div class="col-lg-5">
              <h1 class="font-weight-light">About Us</h1>
              <p>
              React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
              React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
</p><p>
Declarative views make your code more predictable and easier to debug.
Build encapsulated components that manage their own state, then compose them to make complex UIs.
</p>
Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
<p>
React can also render on the server using Node and power mobile apps using React Native.
              </p>
            </div>
          </div>
        </div>
      </div>
    
  );
}
export default About;
