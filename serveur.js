import express from 'express';
import path from 'path';


const app = express();

app.use(express.static((__dirname + 'dist/new-app')));

app.get('/*', (req, res)=> {
res.sendFile(path.join(__dirname + 'dist/new-app/index.html'));
});
app.listen(process.env.PORT || 8080) ;

