## Add new page to project

A page is a React Component exported from a `.js, .jsx, .ts, or .tsx` file in the pages' directory. Each page is associated with a route based on its file name.

Example: If you create `pages/about.js` that exports a React component like below, it will be accessible at /about.
`/about`

```js
function About() {
    return <div>About</div>
}

export default About
```
