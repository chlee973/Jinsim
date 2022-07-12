import io from "socket.io-client";
const PORT = 443
const socket = io(`http://192.249.18.145:${PORT}`);

// socket.on('change_channel', async (packet, callback) => {

// })
// socket.on('login', async (packet, callback) => {
//     callback(await controller.login(packet));
// });

// socket.on('request_roominfo', async (packet, callback) => {
//     callback(await controller.request_roominfo(packet));
// });

socket.on('create_room', async (packet, callback) => {
    callback(await controller.create_room(packet));
    io.emit('create_room', request_roominfo(packet));
});

socket.on('enter_room', async (packet, callback) => {
    callback(await controller.change_channel(packet));
});

socket.on('emotion', async (packet, callback) => {
    callback(await controller.change_channel(packet));
});

socket.on('request_kick', async (packet, callback) => {
    callback(await controller.change_channel(packet));
});

socket.on('ready', async (packet, callback) => {
    callback(await controller.change_channel(packet));
});

export default socket