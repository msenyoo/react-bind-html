![Node.js CI](https://github.com/msenyoo/react-bind-html/workflows/Node.js%20CI/badge.svg) [![Issue Status](https://img.shields.io/github/issues/msenyoo/react-bind-html)](https://github.com/msenyoo/react-bind-html/issues) [![Build Status](https://img.shields.io/github/license/msenyoo/react-bind-html)](https://github.com/msenyoo/react-bind-html/blob/main/LICENSE)

# react-bind-html

Parse HTML string and display in react application

## How to use

Clone this repo to your local computer, then run:

- `npm install && npm run build`

- To make this component available to other projects on your local computer, run `yarn link`.
- Then go to the project where you want to use this package and run `yarn link "react-bind-html"`.

Finally, to fix the multiple copies of React bug that shows up with linked React packages:

- navigate to the root of the `react-bind-html` package
- run `npm link "../path/to/your/project"`

You can now import `react-bind-html` as a normal package installed from npm like so:

```
import BindHtml from 'react-bind-html'

<BindHtml html="<h1>Title</h1>" />
```

### Output

```
<h1>Title</h1>
```
