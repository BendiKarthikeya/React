<h1 align="center">⚡️💻 React 📜✨</h1>

React is not a framework it is a library give by facebook to perform DOM operation. So, that the user will be very happy in seeing the change in the UI

### What is CDN?
- It is a mechanism to request the resource from the external computer so that latency rate would be low.

### What is CORS?
- It is a mechanism where two applications are running in two different server where scripts would share the data between them.
- If the script asks for a resource the other script would send the response.
- If the script asks

if the script asks for a resources the order script 


### Creating an Element 

#### Signature

const element = React.createElement(
    type,  // HTML tag name or React component
    props, // Object with props/attributes or null
    ...children // Child element or text
)

### Accessing the DOM

#### signature

cosnt container = document.getElementById("idName")
cosnt root = ReactDOM.createRoot(container)

### usage of { } in React.createElement

# React Code in Production Environment

As a developer, when we write code, our code should be **Bundled | Compressed | Minified** so that it can be pushed to the Production Environment.  
Let us now see how the code can be scaled up and pushed to Production Environment.



### What is NPM?
**Ans:** It manages `node_modules` related packages.


### Adding NPM to Our Project
```bash
cmd> npm init
```

Once this command is triggered, npm will automatically add a **`package.json`** file.
For npm, the `package.json` file is a **configuration file**.

**package.json:**
It will keep all the dependencies along with their versions, and npm will manage them.


## Preparing Code for Production

After writing code using a library or framework, it should be pushed to the production environment.
To do this, we need a **bundler** like **Vite**, **Parcel**, or **Webpack**.

If our project contains `.html`, `.css`, and `.js` files, we need to bundle them before sending them into the production environment.

**Examples of Bundlers:**

* webpack
* parcel
* vite


## Using Parcel to Bundle Our App

We will use **Parcel** to bundle our app.

```bash
cmd> npm install -D parcel
```



**Note:**
* To work with javascript evenronment we use a build tool called npm
* To work with java evenronment we use a build tool called Maven and Gradle (latest in market)

**Note:** 
* When ever we install dependencies to our project there would be 2 types
    * dev dependencies	: it means we need these dependencies during development phase.	
    * normal dependencies  : we need these dependencies in production phase + development phase.
