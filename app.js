const express = require('express');
const app = express();
app.use(express.json());
const produtos = [{id:1,nome:'Brigadeiro',preco:5}];
app.get('/api/produtos', (req,res)=> res.json(produtos));
app.post('/api/produtos', (req,res)=> {
  const p = req.body; p.id = produtos.length+1; produtos.push(p);
  res.status(201).json(p);
});
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('API rodando na porta',port));
