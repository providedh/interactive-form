# Interactive form
_A [React](https://reactjs.org/)-based solution for interactive forms that follow the same style as the collaborative platform._

### What it provides
The application provides a framework for creating interactive formularies. These formularies can have an
arbitrary amount of pages, which are implemented as stateful components.
[Redux](https://es.redux.js.org/) is the state store used for providing both the gloabl state and actions for changing it.

### How to use it
[Weback development server](https://webpack.js.org/configuration/dev-server/) can be easily used by: __1)__ navigating to the root folder, __2)__ installing 
the dependencies with `yarn install`, and __3)__ starting the server with `yarn dev`.

To compile the project use the `yarn build` command.

### How to extend it
A common workflow would include creating the page component in the `/src/components` folder, creating the
necessary auxiliary components and containers, and adding the page to the _Body_ component in addition to 
the navigation component found in the same `/src/components/body/component.js` file.

A complete step-by-step development process would go through the following:

1. Create a folder for the component which holds the implementation of the page in the `/src/components`.
2. Inside the page folder create the _component.js_, _style.module.css_, _style.css_ and _index.js_ files.
3. Implement the page in the _component.js_ file.
4. Add styling through css rules in the _style.module.css_ and _style.css_ files. The project is setup so
that files with the `.modules.css` sufix will be treated as modules; therefore the styles are applied by
importing the file and adding the classes through the module import: 
```
import styles from 'style.module.css'
<div className={styles.myClass}> </div>
```
> This will hash the class names so that they do not enter in conflict with other rules applied in different 
> places of the application.

5. Add the export in the _index.js_ file and import the page component in the _/src/components/body/component.js_.
6. Add the page in the order you whish inside the `Navigation` component __and the desired icon in the _icons_ prop__; 
there are currently four icons supported: `mail`, `home-1`, `torso`, `circle`.
7. Now the page is added to the project.

__*__ The project follows the convention of discerning bwetween components that have or not state by separating them
intio  the `components` and `containers` folders:

- Components are stateful components.
- Containers are components that use the Redux global store.
