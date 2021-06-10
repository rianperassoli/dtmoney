import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        { id: 1, title: 'Freelance de website', type: 'deposit', category: 'Dev', amount: 6000, createdAt: new Date('2021-02-12 09:00:15') },
        { id: 2, title: 'Aluguel', type: 'withdraw', category: 'Casa', amount: 1000, createdAt: new Date('2021-03-07 19:30:00') },
        { id: 3, title: 'Mercado', type: 'withdraw', category: 'Casa', amount: 500, createdAt: new Date('2021-04-03 05:25:47') },
        { id: 4, title: 'Rendimentos investimentos', type: 'deposit', category: 'Finanças', amount: 658, createdAt: new Date('2021-05-10 10:01:59') },
        { id: 5, title: 'Salário', type: 'deposit', category: 'Trabalho', amount: 15000, createdAt: new Date('2021-05-25 16:20:00') }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

