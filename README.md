#Watch-demo

## Run the project

In the project directory, run: 

### `npm start`

## What tools did I use and why

### `react`
I chose react to get a good architectural structure of the application. We build reusable independent components. If there's a change in one component it only re-renders it and it's children, instead of the entire DOM. We'll get an easy look of the logic of each component and there's a possibility for us to reuse them to stay effective and reduce the amount of code.


###  `create-react-app`
It's an easy and quick setup with no configuration needed to get started with our react application.
There's a built-in develop tool and configure bundler, code transpiler straight from the beginning, made by the developers of react. 
So it comes from the ones who knows it best. It will also continuous follow the changes of react. 
If you don't eject the application you can easily uppgrade it without any configurations (or upgrade react, webpack etc by themselves), by just update the create-react-app. This will help us to easily start up the project and keep having it up to date.

### `redux`
Redux is a good tool for global state management and passing state values throught different components. It makes the architcture 
more structured than handling and passing states in different components. It's great in this application for storing values of the products and handling the functionality of fetching them and providing them to our components.

### `redux-thunk`
I used redux-thunk while it gives us the possibility to do asynchronous actions like when we're fetching data from the api. 
It allows us to write action creators that returns a function instead of an action. This binds our redux logic to our react components.

### `react-router-dom`
Added react router to handle the browser navigation of this application. There's not a big use of it for now in this application while we only have one page with simple functionality. But if there was a need of adding more pages in the future, it would be a great tool for linking them together with our components.


### `classNames`
A really easy way to handle dynamic classnames for the components depending on which props and state values they get. You can also pass classnames from a component to another. This will help us to manage the styling of each component in a simple way without make the className-attribute all messy for the elements with different statements.

### `CSS Grid`
It's a layout system natively in the browser which we can managed straight fromn our stylesheets.
It gives us the flexibility to easily rearrange our layout if we want to change it depending on page or screen width.
I find no use of adding Bootstrap, Foundation or another grid system template to this application. We usually get a lot more functionality than we need from them. Instead we can manage our layout straight from our stylesheets will make our html cleaner. There will be less need of divs and classnames in our markup which will make it less messy.

### `node-sass`
Sass gives us the option to write nested syntax, create mixins, variables which makes the styling more effective and easy to understand. Here we can make reusable and legible styling of components.


## Did I intentionally leave stuff out?
As you can read on the CSS Grid part, I chose to stay away from libraries like Bootstrap or Foundation.
Due time constraint I chose not to implement css modules, animation while loading product and lazy loading of images.