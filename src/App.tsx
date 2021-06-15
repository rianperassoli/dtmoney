import { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './TransactionsContext'

import { GlobalStyle } from "./styles/global"

export function App() {

  const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    SetIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    SetIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  )
}