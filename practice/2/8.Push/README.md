# How to Use

1. Run `npm i`
2. open browser wit some tabs and write in console browser

```Javascript
    let ws = new  WebSocket("ws://localhost:8080");
    ws.onmessage = message => console.log(`${message.data}`);
```

3. Try send message

```Javascript
    ws.send("hey")
```
