# How to Use

1. Run `npm i`
2. Run with `node index.js`
3. Open browser and write in console `let ws = new WebSocket("ws://localhost:8080");` and `ws.onmessage = message => console.log(`${message.data}`);`
4. Then do same in number 3 to second/other browser
5. Try send message `ws.send("hey, there")`
6. If success check other browser will recieve that message too
