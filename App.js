/**
 *
 * <div id ="parent">
 *    <div id="child1">
 *        <h1>I am h1 tag </h1>
 *        <h2> i am an h2 tag</h2>
 *     </div>
 *<div id="child2">
 *        <h1>I am h1 tag </h1>
 *        <h2> i am an h2 tag</h2>
 *     </div>

 * Reactelement(object)=> HTML(browser understands)
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }),
  // array for h1 and h2
  [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ],
  React.createElement("div", { id: "child2" }),
  // array for h1 and h2
  [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]
  ]
);

//jsx

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
