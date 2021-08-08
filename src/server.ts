import application from './application';
import * as http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer(application.instance);

server.listen(PORT, () => {
  console.log(`Server is listening on :${PORT}`);
});
