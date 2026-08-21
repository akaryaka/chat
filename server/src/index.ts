import express, {type Request, type Response} from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import { createServer } from 'http';

const port = 3000;
const app = express();
const httpServer = createServer(app);

// const corsOptions = {
//   origin: 'http://localhost:5173/', // замените на ваш адрес фронтенда
//   credentials: true, // если передаете куки или авторизационные заголовки
// };


app.use(cors());

// const serverHttp = http.createServer(app);
// const io = new Server(httpServer, {
//   cors: {
//     origin: "http://localhost:5173/",
//     // methods: ["GET", "POST"]
//   }
// })

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173"
  }
});
io.on("connection", (socket) => {
  console.log(socket);
})

httpServer.listen(port)

// const rooms: Map<string, string> = new Map();

// io.listen(port);
// app.use(express.json());

// app.get('/rooms', (req, res) => {
//   rooms.set('hello', '');
//   res.json(rooms);
// })

app.get('/', (req: Request, res: Response) => {
  res.send('<p>server working</p>');
  console.log('path: /');
})


app.listen(port, () => {
  console.log(`listen port ${port}`);
})