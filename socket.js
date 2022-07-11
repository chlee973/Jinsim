import io from "socket.io-client";
const PORT = 443
const socket = io(`http://192.249.18.165:${PORT}`);

// socket.on('change_channel', async (packet, callback) => {

// })