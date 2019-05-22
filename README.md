# Fold comments in vscode

This extension adds a command to fold inline comments like:

```js
// fold me
// me too
```

## Contributing

Please adhere to semantic commit conventions when creating a PR

https://seesparkbox.com/foundry/semantic_commit_messages

## Architecture 

Code exists in `./out` under the `fold.js` and `extension.js`

`fold.js` contains the logic for the extension.
`extension.js` contains the code for vscode to execute the commands with the proper functions from `fold.js`.
