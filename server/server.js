const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');

const app = express();
const db = new sqlite3.Database('mydatabase.db');

app.use(express.json());
app.use(cors());

// ドリンク注文のエンドポイント
app.post('/api/orders', (req, res) => {
  const { drink_id, drink_name } = req.body;
  const is_delivered = false; // 初期値は未配達 (false) とする

  const query = 'INSERT INTO order_list (drink_id, drink_name, is_delivered) VALUES (?, ?, ?)';
  db.run(query, [drink_id, drink_name, is_delivered], function(err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'データベースエラー' });
    } else {
      res.json({ message: '注文が保存されました' });
    }
  });
});

app.listen(5000, () => {
  console.log('サーバーがポート5000で起動しました');
});
