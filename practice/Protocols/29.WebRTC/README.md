# How to Create an WebRTC
1. Open 2 tabs in browser
2. Write this in first tab at the console
    ```javascript
        const lc = new RTCPeerConnection()
        const dc = lc.createDataChannel("channel")
        dc.onmessage = e => console.log("Just got a message " + e.data)
        dc.onopen = e => console.log("connection opened!")
        lc.onicecandidate = e => console.log("New Ice Candidate! reprinting SDP" + JSON.stringify(lc.localDescription))
        lc.createOffer().then(o => lc.setLocalDescription(o)).then(a => console.log("Set successfully!"))
    ```

3. Then copy the offer in second tab at the console (copy only for object)
    ``` javascript
        const offer = {} //copy put in here
        const rc = new RTCPeerConnection();
        rc.onicecandidate = e => console.log("New Ice Candidate! reprinting SDP" + JSON.stringify(rc.localDescription))
        rc.ondatachannel= e => {
            rc.dc = e.channel;
            rc.dc.onmessage = e => console.log("New message from client! " + e.data)
            rc.dc.onopen = e => console.log("Connection OPENED!!!!")
        }
        rc.setRemoteDescription(offer).then(a => console.log("Offer set!"))
        rc.createAnswer().then(a => rc.setLocalDescription(a)).then(a => console.log("answer created"))
    ```
4. Then copy the answer to first tab at console (copy only for object)
    ```javascript
        const answer = {} //copy put in here
        lc.setRemoteDescription(answer)
        dc.send('Hey, there!!!')
    ```
5. try send this in second tab
6. try send this in first tab
    ```javascript
        rc.dc.send('Zemboood too!!')
    ```