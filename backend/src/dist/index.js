"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server_1 = __importDefault(require("./server"));
require("./database");
// Starting the Server
server_1.default.listen(server_1.default.get('port'), () => {
    console.log("🤖 Server on port:", Number(server_1.default.get('port')));
    (0, app_1.initApp)(server_1.default);
});
//# sourceMappingURL=index.js.map