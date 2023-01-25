# markdown-it-replace-link

> markdown-it plugin for replacing links (image & text) in the markdown document.

## Usage

#### Enable plugin

```js
var md = require('markdown-it')({
    html: true,
    linkify: true
})
.use(require('markdown-it-replace-link'), {
    processHTML: true, // defaults to false for backwards compatibility
    replaceLink: function (link, env, token, htmlToken) {
        return link + "?c=" + Date.now();
    }
})
```

#### Example

```md
[Hello](test)
```

and use this

```js
var md = require('markdown-it')({
    replaceLink: function (link, env, token, htmlToken) {
        return "http://me.com/" + link;
    }
}).use(require('markdown-it-replace-link'));
```


This will result in the link prefixed with the `http://me.com/` like:

```html
<p><a href="http://me.com/test">Hello</a></p>
```

Both images and html links will be processed.

If using this in a browser, the script will create a variable 
`window.markdownitReplaceLink` that can be passed to `.use()`.

### Testing

To run the tests use:
```bash
npm run test
```

### License

[MIT](./LICENSE)
