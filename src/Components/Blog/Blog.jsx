import React from "react";
import DetailsBanner from "../DetailsBanner/DetailsBanner";
import QAndA from "../Q&A/QAndA";

const Blog = () => {
  return (
    <div>
      <div className="mx-5">
        <DetailsBanner Children={"My Blogs"}></DetailsBanner>
      </div>
      <div className="w-[800px] mx-auto mt-2">
        <QAndA
          q={"When should you use context API?"}
          a={
            "Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context."
          }
        ></QAndA>
      </div>
      <div className="w-[800px] mx-auto mt-2">
        <QAndA
          q={"Why use custom Hooks React?"}
          a={
            "The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic (say a “setState” or localStorage logic), you can put that code inside a custom hook and reuse i"
          }
        ></QAndA>
      </div>
      <div className="w-[800px] mx-auto mt-2">
        <QAndA
          q={"Why do we use useRef in React?"}
          a={
            "The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly."
          }
        ></QAndA>
      </div>
      <div className="w-[800px] mx-auto mt-2">
        <QAndA
          q={"What is useMemo in react"}
          a={
            "React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed."
          }
        ></QAndA>
      </div>
    </div>
  );
};

export default Blog;
