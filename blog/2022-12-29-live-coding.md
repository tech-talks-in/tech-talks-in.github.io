---
slug: live-coding-demo
title: Playground - Live Coding
authors: [pavan]
description: playground - live coding in docusaurus
tags: [api, development]
---

Wanted to create something fun with jsx, Live coding. Go ahead try setting initial value of the counter and update function to your liking or write your own code. Give it a try! visit **Live Coding Demo** under tutorials on how to implement in your website

<!-- truncate -->

``` jsx live
function LiveCode(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
        <h1> {count} </h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <span> </span>
        <button onClick={() => setCount(count - 1)}>Sub</button>
        </div>
    )
}

```