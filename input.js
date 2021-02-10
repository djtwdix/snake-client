let connection;

const setupInput = (conn) => {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  process.stdin.on('data', handleUserInput);
  return stdin
}

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\u0061') {
    connection.write("Move: left")
  }
  if (key === '\u0073') {
    connection.write("Move: down")
  }
  if (key === '\u0064') {
    connection.write("Move: right")
  }
  if (key === '\u0077') {
    connection.write("Move: up")
  }
  if (key === '\u006d') {
    connection.write("Say: I'm the winner!!!")
  }
  if (key === '\u006e') {
    connection.write("Say: I'M HUNGRY!!!")
  }
}

module.exports = setupInput;