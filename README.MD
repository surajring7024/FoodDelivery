# NamasteReact

# Food delivery application

# Day 1:

1. created application
2. created component
3. created navbar and a card

# Day 2:

1. created many cards by reusing card components
2. use of prop
   - if i want to create dynamic cards with dynamic values
   - dynamicallypass variable and value to card component
   - <RestaurantCard resName='Megahana Food' cuisine ='Biryani, North Indian, Sea Food'>
   - use (props) at card level
   - can use ({resName, cuisine})
3. Use of Swiggy app data
4. use of optional chaining (?)
5. use of map for looping over cards
6. use key for every card, to uniquely identify the card, whenever new card is added the other cards will not rerender only new card will render
7. never use index as keys
8. must use key for every card

# Day 3:
1. file structure changes
2. exported data from component using two methods
   2.1 default export
      - export default Component/variable
   2.2 Named Export
      - export const LOGO_URL
3. Import data from component
   3.1 import Component from 'path'
   3.2 import {LOGO_URL} from 'path'
4. hooks
   -`useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component.
The useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.
=== Syntax for useState hook

```
const [state, setState] = useState(initialstate);
```

=== Importing: To use useState you need to import useState from react as shown below:

```
import React, { useState } from "react";
```

we can use Hooks in Functional Components

```
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
```