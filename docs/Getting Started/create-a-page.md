---
sidebar_position: 1
---

# Create a Page

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

<!-- ```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
``` -->
A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).


## What Is TradingWolf?
TradingWolf is a company creating feedback oriented indicators designed to give traders next-generation visualizations of every market. The TradingWolf Premium suite on TradingView consists of 3 indicators which all are considered "all-in-one" toolkits with dozens of unique features for traders to use in their technical analysis.


![The San Juan Mountains are beautiful!](https://docs.luxalgo.com/assets/images/unknown-869e3e465235472a7db89a7c6e1133e6.png "San Juan Mountains")


## Create your first Markdown Page

[![Less Than Jake — Scott Farcas Takes It On The Chin](https://img.youtube.com/vi/PYCxct2e0zI/0.jpg)](https://www.youtube.com/watch?v=PYCxct2e0zI)


Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
