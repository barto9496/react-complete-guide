## Prop Drilling
When you send PROP through multiple layers of components, even though many
you call it prop drilling. Many components might not need that data.

## Component Composition
Heart of the overall solution -> Can solve in most scenarios, Scenario being when you're rendering not more than once content in page. Let's say you want to pass the props from one component to the 2 child, in this case we can pull the 2**nd Child component to the main compnent.

