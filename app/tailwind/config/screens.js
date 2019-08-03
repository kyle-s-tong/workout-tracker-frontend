/*
|-----------------------------------------------------------------------------
| Screens                      https://tailwindcss.com/docs/responsive-design
|-----------------------------------------------------------------------------
|
| Screens in Tailwind are translated to CSS media queries. They define the
| responsive breakpoints for your project. By default Tailwind takes a
| "mobile first" approach, where each screen size represents a minimum
| viewport width. Feel free to have as few or as many screens as you
| want, naming them in whatever way you'd prefer for your project.
|
| Tailwind also allows for more complex screen definitions, which can be
| useful in certain situations. Be sure to see the full responsive
| documentation for a complete list of options.
|
| Class name: .{screen}:{utility}
|
*/

 export default {
  'xs': { 'max': '374px' }, // Anything smaller than the default sizes
  'sm': {
          'min': '375px',
          'max': '576px'
        },
  'md': {
          'min': '577px',
          'max': '768px'
        },
  'lg': {
          'min': '769px',
          'max': '992px'
        },
  'xl': {
          'min': '993px',
          'max': '1200px'
        },
  'xxl': '1201px' // Anything super big
};
