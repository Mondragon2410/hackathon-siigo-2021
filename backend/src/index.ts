import { initApp } from "./app";
import app, { io } from "./server"
import socket from "./sockets";

// Starting the Server
app.listen(app.get('port'), () => {
    console.log("🤖 Server on port:", Number(app.get('port')))
    socket({ io });
    initApp(app);
})