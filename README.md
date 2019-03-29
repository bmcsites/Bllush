# Cfir project for Bllush

This project required Node.js to support angular CLI installation (LTS recommended). [Node.js](https://nodejs.org/en/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Development server

Pull the project from github [Bllush Project](https://github.com/bmcsites/Bllush).

Run `npm i` in the console under the library you just pulled from git. 

Run `npm run appbuild` and wait for the console to finish and print : `widget is ready`.

Navigate to `/dist/suggested-widget` folder and run index.html to see the demo

## Use Widget

1. Navigate to `/dist/suggested-widget` folder.

2. Copy `suggestedwidget.js`, `injectwidget.js` and `styles.css` to your website folder or remote server.

3. Add the `injectwidget.js` to the scripts at the end of the `<body>` tag:<br/>
`<script type="text/javascript" src="./injectwidget.js"></script>`.

4. Edit the `injectwidget.js` file to match the path to the `styles.css` by editing the <b>link.href</b> variable:<br/>
`link.href = './styles.css';`

5. Edit the `injectwidget.js` file to match the path to the `suggestedwidget.js` by editing the <b>element.src</b> variable:<br/>
`element.src = "./suggestedwidget.js";`

6. You can edit the HTML tag as well in the `injectwidget.js` by editing the <b>htmlTag</b> variable:<br/>
`var htmlTag = document.getElementById('suggested-stories-container');`

7. Add the <b>HTML Tag</b> wherever you want to widget to display:<br/>
 `<div id="yourHtmlTag"></div>`

Enjoy The Widget. (for any questions feel free to contact me).
