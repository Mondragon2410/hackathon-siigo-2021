import { Server, Socket } from "socket.io";

const EVENTS = {
    connection: "connection",
};

const rooms: Record<string, { name: string }> = {};

function socket({ io }: { io: Server }) {
    console.log(`Sockets enabled`);

    io.on(EVENTS.connection, (socket: Socket) => {
        console.log(`User connected ${socket.id}`);

    });

}

export default socket;