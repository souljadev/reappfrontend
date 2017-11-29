//
//
// <!-- It is better to separate your template from the JS and you do that by placing the template in its own tag -->
// <script id="quote-template" type="text/x-handlebars-template">
//
// <h3>Favorite {{name}} Quotes</h3>
//   <ol>
//   {{!-- 2. The each helper can insert an array of data --}}
//   {{#each quotes}}
//     <li>{{quote}}</li>
//   {{/each}}
//   </ol>
//
//   {{!-- 3. You can use Html tags with triple-stash --}}
//   {{{yogiBio}}}<br /><br />
//
//   {{!-- 4. Call to custom Helper function, which will generate html tags without the triple-stash --}}
//   {{makeLink "Yogi Berra Museum" "http://yogiberramuseum.org/"}}<br />
//
//   {{!-- 5. Pass attributes to a Helper --}}
//   {{changeColor "Make my text red" color="blue"}}<br />
//
//   {{!-- 6. Say hello in defined language --}}
//   {{sayHello}}
//
// </script>
