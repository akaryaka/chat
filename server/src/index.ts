import express, {type Request, type Response} from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import { createServer } from 'http';

const port = 3000;
const app = express();
const httpServer = createServer(app);
const rooms = new Map;

app.use(cors());

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173"
  }
});

app.use(express.json())

io.on("connection", (socket) => {
  console.log('user connected', socket.id);
})

httpServer.listen(port)

app.get('/', (req: Request, res: Response) => {
  res.send('<p>server working</p>');
  console.log('path: /');
})

app.get('/rooms', (req: Request, res: Response) => {
  res.send(rooms);
})

// использование коллеций позволяет оптимизировать, сократить код
app.post('/rooms', (req: Request, res: Response) => {
  const { roomId, userName } = req.body;
  if(!rooms.has(roomId)) {
    rooms.set(
      roomId, 
      new Map([
        ['users', new Map()],
        ['messages', []],
      ]
    ));
  }
  console.log(rooms);
  
  res.json(...rooms.keys())
  // console.log(roomId, userName);
})

app.listen(port, () => {
  console.log(`listen port ${port}`);
})