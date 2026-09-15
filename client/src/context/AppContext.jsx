import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { seedTransactions } from '../data/catalog.js'

const AppContext = createContext(null)

let toastSeq = 0

export function AppProvider({ children }) {
  const [balance, setBalance] = useState(1250)
  const [transactions, setTransactions] = useState(seedTransactions)
  const [cart, setCart] = useState([])
  const [lang, setLang] = useState('EN')
  const [toasts, setToasts] = useState([])

  const dismissToast = useCallback((id) => {
    setToasts((list) => list.filter((t) => t.id !== id))
  }, [])

  const toast = useCallback(
    (message, tone = 'success') => {
      const id = ++toastSeq
      setToasts((list) => [...list, { id, message, tone }])
      setTimeout(() => dismissToast(id), 3200)
    },
    [dismissToast],
  )

  const addMoney = useCallback(
    (amount) => {
      const value = Number(amount)
      if (!Number.isFinite(value) || value <= 0) {
        toast('Enter a valid amount', 'error')
        return false
      }
      setBalance((b) => b + value)
      setTransactions((list) => [
        { id: `t${Date.now()}`, label: 'Wallet recharge via UPI', date: 'Today', amount: value },
        ...list,
      ])
      toast(`₹${value.toLocaleString('en-IN')} added to your wallet`)
      return true
    },
    [toast],
  )

  // Debits the wallet only when the balance covers the cost.
  const spend = useCallback(
    (amount, label) => {
      const value = Number(amount)
      if (value > balance) {
        toast('Not enough balance — add money to continue', 'error')
        return false
      }
      setBalance((b) => b - value)
      setTransactions((list) => [
        { id: `t${Date.now()}`, label, date: 'Today', amount: -value },
        ...list,
      ])
      toast(`${label} — ₹${value.toLocaleString('en-IN')} debited`)
      return true
    },
    [balance, toast],
  )

  const addToCart = useCallback(
    (product) => {
      setCart((list) => {
        const existing = list.find((i) => i.id === product.id)
        if (existing) {
          return list.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
        }
        return [...list, { ...product, qty: 1 }]
      })
      toast(`${product.name} added to cart`)
    },
    [toast],
  )

  const removeFromCart = useCallback((id) => {
    setCart((list) => list.filter((i) => i.id !== id))
  }, [])

  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + i.qty, 0), [cart])
  const cartTotal = useMemo(() => cart.reduce((sum, i) => sum + i.qty * i.price, 0), [cart])

  const value = useMemo(
    () => ({
      balance,
      transactions,
      cart,
      cartCount,
      cartTotal,
      lang,
      setLang,
      toasts,
      toast,
      dismissToast,
      addMoney,
      spend,
      addToCart,
      removeFromCart,
    }),
    [
      balance,
      transactions,
      cart,
      cartCount,
      cartTotal,
      lang,
      toasts,
      toast,
      dismissToast,
      addMoney,
      spend,
      addToCart,
      removeFromCart,
    ],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>')
  return ctx
}
