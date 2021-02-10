const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('connect', () => {
    console.log("Connected to game server");
    conn.write("Name: DJ");
    //conn.write("Move: up");
  })
  return conn;
};

module.exports = connect;