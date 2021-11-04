import { initApp } from "./app";
import app from "./server"

// Starting the Server
app.listen(app.get('port'), () => {
    console.log("🤖 Server on port:", Number(app.get('port')))
    initApp(app);
})