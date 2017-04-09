# HTML5 Elements
you can add needed element to web application and use sabzcity platform as SaaS provider for your project.

e.g. add your organization products view in your web site:
```html
<!-- Polyfill Web Components,... for older browsers -->
<script src="./js-browser-compatibility/browser-compatibility.js"></script>

<!-- Import element -->
<link rel="import" href="./sabzcity-products/sabzcity-products.html">

<!-- Use element -->
<sabzcity-products orgID="Org-UUID"></sabzcity-products>
```

### Naming of Elements
```
Atom elements           —->     a-{name_of_elements}
Molecules elements      —->     m-{name_of_elements}
SaaS elements           —->     sabzcity-{name_of_elements}
App elements            —->     app-{name_of_domain||subdomain}
```
Also can Nested same featured elements
```
m-example/
m-example/m-example2/
m-example/m-example3/
m-example/m-example4/
```

### Responsive Layout
Use CSS Grid

### Use Animatation in Elements
Use Animatation in elements is very good but must not use so much, because it is bad user experience in long use  
Can use many standard animation in Internet e.g. https://telegram.me/UI_land

### Offilne apps
We must use Service Worker and other browsers featured
- https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/

### ISO Naming
- https://github.com/annexare/Countries/blob/master/countries.json
- https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes/blob/master/all/all.xml
- https://github.com/mledoze/countries/blob/master/countries.json
- https://github.com/umpirsky


### Free Sources
- https://www.webcomponents.org/elements/
- http://elements.polymer-project.org/
- https://customelements.io
- https://github.com/x-element
- https://github.com/erikringsmuth/app-router

### Some Examples
- https://scotch.io/tutorials/build-a-real-time-polymer-to-do-app
- https://github.com/Polymer/shop