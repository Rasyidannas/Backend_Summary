# How to Use

1. Run `npm i`
2. Run with `node index.js`
3. open browser and visit `localhost:8888`
4. Write in console `let sse = new EventSource("http://localhost:8888/stream");`
5. Then watch Network tabs and EventStream, if you want to print in console write this `sse.onmessage = console.log`
