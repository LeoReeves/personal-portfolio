(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(A,e,a){"use strict";a.r(e);var t=a(0),n=a.n(t),c=a(157),i=a(159),r=a(177),o=a.n(r),s=a(152),l=function(){return n.a.createElement("form",{className:o.a.contactContainer,action:"//formspree.io/leojreeves+portfolio@gmail.com",method:"POST"},n.a.createElement("div",{className:o.a.contactRow},n.a.createElement("label",{htmlFor:"name"},n.a.createElement("h3",null,"Name")),n.a.createElement("input",{className:o.a.contactInput,name:"name",placeholder:"Enter your name",required:!0}),n.a.createElement("label",{htmlFor:"_replyto"},n.a.createElement("h3",null,"Email")),n.a.createElement("input",{className:o.a.contactInput,name:"_replyto",type:"email",placeholder:"Enter your email",required:!0})),n.a.createElement("div",{className:o.a.contactRow},n.a.createElement("label",{htmlFor:"message"},n.a.createElement("h3",null,"Message")),n.a.createElement("textarea",{className:o.a.contactMessageTextArea,name:"message",placeholder:"Enter your message",required:!0})),n.a.createElement("input",{type:"text",name:"_gotcha",style:{display:"none"},title:"please ignore"}),n.a.createElement("input",{type:"hidden",name:"_next",value:"/contact-success/"}),n.a.createElement(s.a,{buttonText:"Send Message"}))},d=a(153);e.default=function(){return n.a.createElement(c.a,null,n.a.createElement(i.a,{title:"Contact",keywords:["Leo Reeves","contact"]}),n.a.createElement(d.a,{primaryHeading:"Want to talk?",secondaryHeading:"Write me a message!"}),n.a.createElement(l,null))}},149:function(A,e,a){"use strict";a.d(e,"b",function(){return l});var t=a(0),n=a.n(t),c=a(4),i=a.n(c),r=a(32),o=a.n(r);a.d(e,"a",function(){return o.a}),a.d(e,"c",function(){return r.navigate});a(150);var s=n.a.createContext({}),l=function(A){return n.a.createElement(s.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(A,e,a){var t;A.exports=(t=a(155))&&t.default||t},151:function(A,e,a){"use strict";a(73),a(74),a(75);var t=a(154),n=a(0),c=a.n(n),i=a(149),r=a(158),o=a.n(r);e.a=function(A){return c.a.createElement(i.b,{query:"1484280444",render:function(e){var a=e.images.edges.find(function(e){return e.node.relativePath.includes(A.filename)});if(!a)return null;var t=a.node.childImageSharp.sizes;return c.a.createElement(o.a,{alt:A.alt,sizes:t})},data:t})}},152:function(A,e,a){"use strict";var t=a(0),n=a.n(t),c=a(149),i=a(161),r=a.n(i);e.a=function(A){return n.a.createElement("button",{className:r.a.routeButton+" "+(A.secondary?r.a.secondary:r.a.primary),onClick:function(){return e=A.buttonRoute,a=A.buttonExternal,void(e&&(a?window.open(e,"_blank"):Object(c.c)(e)));var e,a}},A.buttonText)}},153:function(A,e,a){"use strict";var t=a(0),n=a.n(t),c=a(151),i=a(152),r=a(162),o=a.n(r);e.a=function(A){return n.a.createElement("header",{className:o.a.headerContainer},n.a.createElement("content",{className:o.a.headerContent},n.a.createElement("h1",{className:o.a.primaryHeading},A.primaryHeading),n.a.createElement("h2",{className:o.a.secondaryHeading},A.secondaryHeading),n.a.createElement("hr",{className:o.a.headerRow}),n.a.createElement("div",{className:o.a.headerButtons},A.buttonText&&n.a.createElement("div",{className:o.a.primaryButton},n.a.createElement(i.a,{buttonText:A.buttonText,buttonRoute:A.buttonRoute,buttonExternal:A.buttonExternal})),A.buttonTextSecondary&&n.a.createElement(i.a,{buttonText:A.buttonTextSecondary,buttonRoute:A.buttonRouteSecondary,buttonExternal:A.buttonExternalSecondary,secondary:!0}))),A.imageFileName&&n.a.createElement("div",{className:o.a.headerImage},n.a.createElement(c.a,{filename:A.imageFileName})))}},154:function(A){A.exports={data:{images:{edges:[{node:{relativePath:"geolocation-weather-app.png",name:"geolocation-weather-app",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAAB60lEQVQoz5XN/08ScRzH8c9f2kaWX0dCBYdHxxcpJEMzWLX6wa1vzvUXUIKEBnV1LmdAixPEFsSXiTCD4+4+X3ofh87Njdn22Huf3Z6vHYpVcKz6nyq6+UDxGj6TAHUySo0Y5Z9hj5J1nGwMbda1eKU/oMSr/fM2fhtfNmuaUZ5O0HaTgK0G/txhrzM5W3DFGX7iePDYHoraQ5HBjdoWIvyj5zPz4Rdbe5ClGthcocwRAemmLv1lqwlxmve6Fx+6QsvXnILltttyi79i47jgUiDy1O6/9yz2ETKIByuMvrR1ILa0XYW9TH294b3rCIZn/UGDLzjJ+8Y4AZbCctQTXllNZCATW6q5QjsdAqRj/XufrW1Lky7BKgQmOM+EyzPuMq7x4AS7f8Fi514lRcggNldo94SCbx2c19h6esfmDcwGFqd437R7aIr3Wj3zc/eXZtzeNykRMojNFcp2Kdg7wQXM3qalsZtO+OF1x9x5407eesd31eZY+/AJMojNFfqhEEMP/1SZ1Oy8yxY28vvvL8rJsWxBqrchg9hcoUKfyH1q2tdpmbIRijqTVWpMVCqrBJUxKxMG9wCzkkaKKh4BgpJOixqFC1D26DjXaufbHbmr/KLskFwCpuZFpV6v2O0eKMqhplcZu4zK6eMfP8eoA17rMj0AAAAASUVORK5CYII=",aspectRatio:1.3846153846153846,src:"/static/dd3d6637e1b46048251804264fb4d564/bf9a6/geolocation-weather-app.png",srcSet:"/static/dd3d6637e1b46048251804264fb4d564/f62f9/geolocation-weather-app.png 163w,\n/static/dd3d6637e1b46048251804264fb4d564/ae319/geolocation-weather-app.png 325w,\n/static/dd3d6637e1b46048251804264fb4d564/bf9a6/geolocation-weather-app.png 650w,\n/static/dd3d6637e1b46048251804264fb4d564/b7a80/geolocation-weather-app.png 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"simple-clock.png",name:"simple-clock",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAABwUlEQVQoz62SbU/iQBDH+a6aKG81uRCbEDUxEQ9hW0h4r/EBhd551FJKHwBrQC2mtdIuW7A97hQ+htPFoIkPMcbJL5OZ3fnvZGc35niDLxP7BrHnh3gw+iRQ/Cy+cUnz/KKut+r6WeQ1in4ma0+xrDUBWhDRMDp2j0RiPPhblbW5uXmWGsdyebBcfhqjLMrncoVCAdYQQuA5LgfFJ4LUH45i5O5f+VclkUjcP9y7rqvrOvgeNeFUgLSP+91ut1araZoWhuF4PGYYZr9Y9oP/kZg/OWVWmMlkYhhGu912HMe2bc/DxWKxKkkYY8uyFEUxTZMQAmXJZPLwmCcz8cLCIjQRBEEURUVVa5JUFUWe58vlEvRstZqqotRlWVXVRqMRj8cPjqi417/rXFnpDJv6mckgbjvLpjMIUgiybB6AeCudpYtoGgNGx3RJEE37Fg9hbHg4ijx9DNcPI0gQ4Yf0IenWcDQtA8nsqXwY/QxIPT/AIHjB65o3fhgceX3jHfwWd0uVneM/O+BLlT1eMG23R7u9+z3hPBdG0HVWNtHyWmppdXN5fWtpNfVjY/v80oIrTBt+9LehuUcCj151xu2rtsAjhYCI+MZGCTIAAAAASUVORK5CYII=",aspectRatio:1.3846153846153846,src:"/static/7f1760178ed80db44c85bf977d71039e/bf9a6/simple-clock.png",srcSet:"/static/7f1760178ed80db44c85bf977d71039e/f62f9/simple-clock.png 163w,\n/static/7f1760178ed80db44c85bf977d71039e/ae319/simple-clock.png 325w,\n/static/7f1760178ed80db44c85bf977d71039e/bf9a6/simple-clock.png 650w,\n/static/7f1760178ed80db44c85bf977d71039e/b7a80/simple-clock.png 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"ionic-contacts-manager.png",name:"ionic-contacts-manager",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABj0lEQVQoz42SvU/CQBjG+QcZjTi4mcggDi4OBhOJSVsKBaEfVwoCCy4mTsYAgwkdwYClkBA1yIRxKBBJC/QDXwGBlJLw5K653D2/e9/nUpfHyx2eoAMve+q/vwg+nWOPgWg+nStkcvnsXWE+MrnCdazop4qB2PPZ1cPeEe3xov1jzpUUEMvEoxQpvb5o6k9P+TaNiWGYum6sD8syTHMynU5brWbshkrfCqkk70IIMQyD40StVhuPx5qmKYoCC/BZazJNC66AzbosB4NkIiEg9A8TBFGtVgeDwWg0AtIE74YM4w9uNBokSQqCwPMzmKZpgMvlcr/fh8qqqoJvGyzLsh3GMEySJDgDstfrwXe6IWjHuTKO45VKZTgcztu2Bd5aGWYqlYpEIrALZ+BwDOycGSasKIpawrO3tQv2dF13qDyH4cplMEfZMyO0gKFtURS73W673e44qd7svL23Pz6/SiUxHA6vKoNYloU3u9xBYAMzz3HweyxgELejgMxmGZ8v7nav4MRu4mc52VCIDgR+AUktgCxc8hHsAAAAAElFTkSuQmCC",aspectRatio:1.3846153846153846,src:"/static/24b8e27752ca89832ed2a258863b7db8/bf9a6/ionic-contacts-manager.png",srcSet:"/static/24b8e27752ca89832ed2a258863b7db8/f62f9/ionic-contacts-manager.png 163w,\n/static/24b8e27752ca89832ed2a258863b7db8/ae319/ionic-contacts-manager.png 325w,\n/static/24b8e27752ca89832ed2a258863b7db8/bf9a6/ionic-contacts-manager.png 650w,\n/static/24b8e27752ca89832ed2a258863b7db8/b7a80/ionic-contacts-manager.png 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"favicon.png",name:"favicon",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEUlEQVQ4y2NgGGqACYrxyTERUEcxYMQlIQDE3kDsAcTcaIo5gdgTSd4diI2Q5BnRvQICjkD8H4j/ArEuVIwFSqtA5dDxGSBWQjcUZqADVNF3INZBM1AZiP9B5fcA8TYg/gXlr0Izh2gD/0Ll7aFi66D8c9hiD9nAHwQMBIUlMxCfgvLXEnIhLgNh4XYbiB9C2Q+AWJ8YA/WgYmxoBv5Di5RYNItxhqEyWrCoIBkWCcSzkVwoSUwsR0K9YgfEwkAsD8R/oPJmQMwOxG+h/Bm4vOyCI631ALEYEt8Hqr4cScwD2SyYgaZAfB2IrwDxZSC+AMSPgDgbiAWB+Co0Qiyg6nmg6fEZEM8hlA3JKVRGAZUAAHWAVV9PGV9AAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/e7a2ba2533a1df45885ce04b915cd44e/bf9a6/favicon.png",srcSet:"/static/e7a2ba2533a1df45885ce04b915cd44e/f62f9/favicon.png 163w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/ae319/favicon.png 325w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/bf9a6/favicon.png 650w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/14ac3/favicon.png 975w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/33fb0/favicon.png 1300w,\n/static/e7a2ba2533a1df45885ce04b915cd44e/74e4b/favicon.png 1500w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"quotes-on-design-generator.jpg",name:"quotes-on-design-generator",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe9NCKP/xAAXEAEAAwAAAAAAAAAAAAAAAAARAAEg/9oACAEBAAEFAkjWf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABoQAAICAwAAAAAAAAAAAAAAAAEQABExcZH/2gAIAQEAAT8hIZTdx0F//9oADAMBAAIAAwAAABAjD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAQEAAwEBAAAAAAAAAAAAAAEAESExgfD/2gAIAQEAAT8QKMHwzfRWneI5AcAnt//Z",aspectRatio:1.3846153846153846,src:"/static/34996c655cedb0c1472a8abb2b219f34/07dca/quotes-on-design-generator.jpg",srcSet:"/static/34996c655cedb0c1472a8abb2b219f34/13e52/quotes-on-design-generator.jpg 163w,\n/static/34996c655cedb0c1472a8abb2b219f34/d4cde/quotes-on-design-generator.jpg 325w,\n/static/34996c655cedb0c1472a8abb2b219f34/07dca/quotes-on-design-generator.jpg 650w,\n/static/34996c655cedb0c1472a8abb2b219f34/02b42/quotes-on-design-generator.jpg 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"hex-colour-generator.jpg",name:"hex-colour-generator",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAHWVsim/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQABBQJf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAFhAAAwAAAAAAAAAAAAAAAAAAABEg/9oACAEBAAE/IRz/AP/aAAwDAQACAAMAAAAQiw//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAZEAEAAgMAAAAAAAAAAAAAAAABABEgMWH/2gAIAQEAAT8QvjAOhYYf/9k=",aspectRatio:1.3846153846153846,src:"/static/5b37ff11550855d441ea0c5a3a96b00d/07dca/hex-colour-generator.jpg",srcSet:"/static/5b37ff11550855d441ea0c5a3a96b00d/13e52/hex-colour-generator.jpg 163w,\n/static/5b37ff11550855d441ea0c5a3a96b00d/d4cde/hex-colour-generator.jpg 325w,\n/static/5b37ff11550855d441ea0c5a3a96b00d/07dca/hex-colour-generator.jpg 650w,\n/static/5b37ff11550855d441ea0c5a3a96b00d/02b42/hex-colour-generator.jpg 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"elliott-smith-tribute.jpg",name:"elliott-smith-tribute",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGiU6TBQ//EABkQAQADAQEAAAAAAAAAAAAAAAEAAhESIf/aAAgBAQABBQLcnWtL81AhQj4//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRABAAIDAAAAAAAAAAAAAAAAABExAhAh/9oACAEBAAY/AqlSHWOv/8QAGxAAAwEAAwEAAAAAAAAAAAAAAAERIVFxgZH/2gAIAQEAAT8hW1lPhyHQ5OPR3a8J3V3XRaJH/9oADAMBAAIAAwAAABBTD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQEAAwADAAAAAAAAAAAAAAERACExQaGx/9oACAEBAAE/ENZSh3CM4yDsLo94KHWujjqFyFfcP2MBUk5nj0cz/9k=",aspectRatio:1.3846153846153846,src:"/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/07dca/elliott-smith-tribute.jpg",srcSet:"/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/13e52/elliott-smith-tribute.jpg 163w,\n/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/d4cde/elliott-smith-tribute.jpg 325w,\n/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/07dca/elliott-smith-tribute.jpg 650w,\n/static/0b4b1f8ce58cf9336358f1f5e3ccb8c6/02b42/elliott-smith-tribute.jpg 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"uk-vat-calculator.png",name:"uk-vat-calculator",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA0UlEQVQoz6WSwQ6CMBBE+XIPHj0YD34bF41gMGmaUigt0qUp4EQ0MUqk6BwmbdLX2d1sNHyof+r1OkwpGv5Q9JYJz/OcMZZlmRCC3ZWmqdY6KBnvpJScczjI8YumaYJg5FNLlghA69ovnU/AXddXSqF4a0mVJQ4owXs/n+ycM9ooBaqs65qIxrMxxlo7A6PUQkpVKsRxISptpCwAw7U2QT3DL4yvt/vVZnc6Z2MvoQODK32ND0l8TIqqXjCwx8Cd992APHJI/XHD+tANW8D9v9s3Gj83aEW70Q0AAAAASUVORK5CYII=",aspectRatio:1.3846153846153846,src:"/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/bf9a6/uk-vat-calculator.png",srcSet:"/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/f62f9/uk-vat-calculator.png 163w,\n/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/ae319/uk-vat-calculator.png 325w,\n/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/bf9a6/uk-vat-calculator.png 650w,\n/static/ac9bb08aa5bbb2c03b3a6e40400c6b79/b7a80/uk-vat-calculator.png 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"wikipedia-search.png",name:"wikipedia-search",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAC4UlEQVQ4y21TS08TURhl7Ur/ge50ZVyZuHNBfCx0aYILDUYiFY0YCEhAEx9EiJGHb0SiMRGjwQdicIGQIggECoUAUtrOdB592uJM591pe7xzoQ2IN/nyzb1zv3PP+R4laTkNJa3A8QVTFRUsw2LsxxhG3aP4OT4Oz8wsZmemMTs9CZ4LkTsaNscqskK/SzYfyhKxDa9rOjRiiqLAtnNw1pRPQcNrAaMLSZiaQu4qG7FKEbyk+ALxlmnCMnQYmkpNVxUYuk7Bnf0ql8LARBhBQUJGdxjKSEsyjS3gUIaGbhCJHFyV1aisqsN5Vz3OuRpwtb4ZnZ0P0fvmPTJWhjxowVBzEONRTHFerBHZtp0tpqoo2dA0MHwcVU1Pca35CRof9KG16x1uPfuI2tudePTWTQTnsCoA7V+i6JubRL83Du+qCtgalV4EdHJmETm/QklcvtmF9juNKK3txYkbH+FqvIfaijLcf/mN5nDBI6Dn8wiGp934OuKDe3AC9m8WaVX/h6GqIiQmUPd4EK09A2h6PoQLHUNo6f6EF92v0P/dg6wmITY2CM/wB/i8bni9fiz5ZeQJ8y1FKejXSDXZYABzXi9EPgQxFEQiEafM8rksEvEYfP4A7Fyenq3X3flHANPp7YDOJhwOg2VZaKRIumEQr8M0DZiGiVQyiUAgAIZlwDAM7dNINAqD3HNaaxugY5FIBCs+HxYXF4lfwfz8PHhBoP24lkpRwCAThJ8wDRBzgFVSUGcQ/sswFOKwtLwMjuPACTz1sWiMAsqSRBVEYzFECbMY8SoppmVZ2NzLWyZF+iORQJnINKlMTdVofiQC5gSu5yyPbDaHTMZGLpuFnclsByxsEvE4eJ6HwAsQRZEArYPn83m03m3B8aPHUH6mHHXV1ehoa0P52QpcuniF3BfpNBUnpQDoJJ4Ckrw5snRSnMI6faoMO3fswv59B7B3z25cr6nBkcMncehgKTiWp9PmqPsLpnbkC8H65EoAAAAASUVORK5CYII=",aspectRatio:1.3846153846153846,src:"/static/e811fcda4a2b1caf63fbaf931fe5b952/bf9a6/wikipedia-search.png",srcSet:"/static/e811fcda4a2b1caf63fbaf931fe5b952/f62f9/wikipedia-search.png 163w,\n/static/e811fcda4a2b1caf63fbaf931fe5b952/ae319/wikipedia-search.png 325w,\n/static/e811fcda4a2b1caf63fbaf931fe5b952/bf9a6/wikipedia-search.png 650w,\n/static/e811fcda4a2b1caf63fbaf931fe5b952/b7a80/wikipedia-search.png 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}},{node:{relativePath:"profile.png",name:"profile",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYUlEQVQozwFWA6n8ACUhHjs2L2NgVUdEPzc2MTQzLkM+NxYcGUEVFKZsZrWyp7usp6KSjLaxrrGjoragoqyenamJi8K6v6yhpwAvIh9QODZlRkJJMi5ANTlHNzlnUk9JNjY6JB2MT0mTXFmdlJGUgYausbOhoKach4yoqLCql6C+usGjgI0AYjc5bkxFeU1ALhweLCQtWD87Wj42ekZHbjAxmX59u7Ktur6/wsnOvMLMt8LMoZ2oprO/tbK/0c/Yv8DJAHJGRXxsXHpmWx8VEk8wI7qOeKGCe5VyeIpiZYVST56SjrO0tqujqotrbZmKkpqAjZ2LmZ6EkqiWoKCOnABUW1JzbUliVz1ALiVtQjKieGmcjGZ6dGJQUU5cT1NkS1NoVGB0UllqSU9tU19pVFVzVVt+aHlzWGl+ZmcAjmcVv4gPlXUePzgwTiggr4Fc1bMfxJwXhGwabGc8k4FHnH47u6EsdnJFXmVkmYw+v7JJjZFws6xPx7RLAK+WFLmTFnVaHDgmHIRgT4l1ZndpNMSiKrWWJNK+H+fAJvW1L+nLNJWQQdjFSdjNUOrfTJucZ9/VU+jMWwCPfBQ+OhMQEBwmHx5iUEosKTIuL0xyZjyDbyPWuh/FryCEZjlnZElpdGOyqlPi00zVy0fHwEPRxE/ItVIAHBgTAAANGhgfHBsjCgoUGRUgJyUwNDQ1TVRJc3A+opQ1mZZwampJbX9riZZ008YtiopJh4hcsalT3NJUAAYGBwkJCQwMDxcWHRwbJB8cJiAdLXVmQ6KNUllfZpCNZt3GXHxuPG94aKKbSsu8KXp6S3Z4U2xuVoaJaQAHCAwPEBIJCAsQEBUbGyQbGiMpJzWrjGO/hDOZczvQv1Z+eldpa1SYiTakkTTSwFx0bk+ZijfPu0CnnU4AWU8uOT8wAwIHCQkLGRghIB8qISAym4Vnuog2lnI8s6JGbm9aYmpnbWZEl4g2yLZWrKJoqJlF0r9H0b06AGNpVT1BOQoICwYHCg4OFB0dJhscLIRzaLWcO4JyN6ObYrarZXZrPcOtRcmyRqiVLMS2X8i3R8e0P62WOQBpcWw5RUIHBAcHCAsMDBEbGiMaGydWUFarjT5cTy2XiUe2p0OjlEanl1ujklyEfV6AfXqCfG94dGxrZ23AXVfr0BZe0gAAAABJRU5ErkJggg==",aspectRatio:1.3846153846153846,src:"/static/bebe6bddae7277d483dd05670936d4df/bf9a6/profile.png",srcSet:"/static/bebe6bddae7277d483dd05670936d4df/f62f9/profile.png 163w,\n/static/bebe6bddae7277d483dd05670936d4df/ae319/profile.png 325w,\n/static/bebe6bddae7277d483dd05670936d4df/bf9a6/profile.png 650w,\n/static/bebe6bddae7277d483dd05670936d4df/b7a80/profile.png 900w",sizes:"(max-width: 650px) 100vw, 650px"}}}}]}}}},155:function(A,e,a){"use strict";a.r(e);a(33);var t=a(0),n=a.n(t),c=a(4),i=a.n(c),r=a(54),o=a(2),s=function(A){var e=A.location,a=o.default.getResourcesForPathnameSync(e.pathname);return n.a.createElement(r.a,Object.assign({location:e,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},156:function(A){A.exports={data:{site:{siteMetadata:{title:"Leo Reeves"}}}}},157:function(A,e,a){"use strict";var t=a(156),n=a(0),c=a.n(n),i=a(4),r=a.n(i),o=a(149),s=a(163),l=a.n(s),d=function(){return c.a.createElement("nav",{className:l.a.nav},c.a.createElement("div",{className:l.a.navContainer},c.a.createElement(o.a,{className:l.a.navLink,to:"/"},"Leo Reeves"),c.a.createElement(o.a,{style:{marginLeft:"auto"},activeStyle:{borderBottomColor:"#00AC7E"},className:l.a.navLink,to:"/portfolio/"},"Portfolio"),c.a.createElement(o.a,{activeStyle:{borderBottomColor:"#00AC7E"},className:l.a.navLink,to:"/about/"},"About"),c.a.createElement(o.a,{activeStyle:{borderBottomColor:"#00AC7E"},className:l.a.navLink,to:"/contact/"},"Contact")))},g=a(164),b=a.n(g),p=function(){return c.a.createElement("footer",{className:b.a.footer},c.a.createElement("div",{className:b.a.navContainer},c.a.createElement(o.a,{className:b.a.navLink,to:"/"},"© 2019 Leo Reeves"),c.a.createElement("a",{style:{marginLeft:"auto"},className:b.a.navLink,href:"https://codepen.io/leoreeves/",target:"_blank",rel:"noopener noreferrer"},"Codepen"),c.a.createElement("a",{href:"https://github.com/leoreeves/",target:"_blank",rel:"noopener noreferrer",className:b.a.navLink},"Github"),c.a.createElement("a",{href:"https://www.linkedin.com/in/leoreeves/",target:"_blank",rel:"noopener noreferrer",className:b.a.navLink},"Linkedin")))},m=a(165),E=a.n(m),f=(a(166),function(A){var e=A.children;return c.a.createElement(o.b,{query:"755544856",render:function(){return c.a.createElement("div",{className:E.a.layoutContainer},c.a.createElement(d,null),c.a.createElement("main",null,e),c.a.createElement(p,null))},data:t})});f.propTypes={children:r.a.node.isRequired};e.a=f},159:function(A,e,a){"use strict";var t=a(160),n=a(0),c=a.n(n),i=a(4),r=a.n(i),o=a(167),s=a.n(o);function l(A){var e=A.description,a=A.lang,n=A.meta,i=A.keywords,r=A.title,o=t.data.site,l=e||o.siteMetadata.description;return c.a.createElement(s.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:r},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.array,keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},e.a=l},160:function(A){A.exports={data:{site:{siteMetadata:{title:"Leo Reeves",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-contact-js-6cb670ff533f63d4c689.js.map