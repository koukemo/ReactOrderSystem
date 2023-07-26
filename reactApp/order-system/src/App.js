import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [orderItem, setOrderItem] = useState(null);

  const handleOrderButtonClick = (drink_name) => {
    setOrderItem(drink_name);
    // バックエンドサーバーのURLを設定
    const url = 'http://localhost:5000/api/orders';
  
    const drink_id = getDrinkIdByName(drink_name);

    // データを送信
  axios.post(url, { drink_id, drink_name })
  .then(response => {
    console.log(response.data.message);
  })
  .catch(error => {
    console.error('Error sending order:', error.message);
  });
};

// ドリンク名に対応するIDを取得する関数
const getDrinkIdByName = (drink_name) => {
  switch (drink_name) {
    case '緑茶':
      return 1;
    case 'ほうじ茶':
      return 2;
    case '水':
      return 3;
    case '烏龍茶':
      return 4;
    case 'コーヒー':
      return 5;
    default:
      return null;
  }
};

  const handleCloseDialog = () => {
    setOrderItem(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="button-container">
          <button className="green-tea" onClick={() => handleOrderButtonClick('緑茶')}>
            緑茶
          </button>
          <button className="oolong-tea" onClick={() => handleOrderButtonClick('烏龍茶')}>
            烏龍茶
          </button>
          <button className="water" onClick={() => handleOrderButtonClick('水')}>
            水
          </button>
          <button className="coffee" onClick={() => handleOrderButtonClick('コーヒー')}>
            コーヒー
          </button>
          <button className="hojicha-tea" onClick={() => handleOrderButtonClick('ほうじ茶')}>
            ほうじ茶
          </button>
        </div>
        {orderItem && (
          <div className="dialog-overlay">
            <div className="dialog">
              <p className="dialog-message">{`${orderItem}が注文されました。`}</p>
              <button className="close-button" onClick={handleCloseDialog}>
                閉じる
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
