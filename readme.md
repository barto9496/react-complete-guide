# *__10<sup>th</sup> Module__*

> Introduction

Now with the core basic and foundation out of the way we're going to take the next step in this module. We're going to look at 3 important concepts 
of react and those are Effects, Reducers & Context. Now these features are
little bit more advanced. 

1. What (side)effects are?
2. Managing more complex state with Reducers
3. Managing App-Wide or Components-Wide state with context


> What is an Effect(or a side Effect)?

These terms can be used interchangebly, lets not forget that our components in a rect app and the react app as a whole. Also, react's main job is to render the UI, react to user input and then if needed re render the react page with the new input if there are any changes. That is what we focused on in the previous sections. A side effect is something else that is happening in your page, like sending an HTTP request or storing something in browser storage / localStorage. A lot of these tasks arent necessarily realted to having these details being displayed using react. These are therefore tasks that happen normal component function. So what side effects basically does is that it is a separate working session of the code which handles the details which shouldn't result in reevaluating the code / re-rendering the code. useEffect() hook is a built in hook which is used to run inside your funtion which will call all the required details 


`useEffect(() => { ... }, [dependencies]);`
A function that should be exectured after every compnent evaluation IF the specified dependencies change, the specified arguments are the second arguments that you pass in, that an array full of dependencies, the first function will re run. The function you can add any sideEffect function which can then be used to make those changes. 