import { useState } from 'react'
import { useApp } from '../context/AppContext.jsx'
import { WalletPanel } from '../components/cards.jsx'
import { SectionHeader, rupees } from '../components/ui.jsx'

const PRESETS = [200, 500, 1000, 2000]

export default function Wallet() {
  const { transactions, addMoney, toast } = useApp()
  const [amount, setAmount] = useState(200)

  const payable = Number(amount) || 0

  return (
    <div>
      <SectionHeader
        tag="Wallet"
        title="Your wallet"
        subtitle="Add money once, spend across all services. Secure via Razorpay."
      />

      <div className="mb-6 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <WalletPanel
          onAdd={() => addMoney(payable)}
          onHistory={() => toast('Showing your recent transactions below')}
        />

        <div className="card">
          <h2 className="mb-4 text-[15px] font-bold text-slate">Add Money</h2>

          <div className="mb-4 flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setAmount(p)}
                className={`btn btn-sm border-[1.5px] ${
                  Number(amount) === p
                    ? 'border-teal bg-teal text-white'
                    : 'border-teal bg-transparent text-teal hover:bg-teal-l'
                }`}
              >
                {rupees(p)}
              </button>
            ))}
          </div>

          <div className="mb-4">
            <label className="field-label" htmlFor="custom-amt">
              Custom amount
            </label>
            <input
              id="custom-amt"
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="field"
            />
          </div>

          <p className="mb-3.5 rounded-[10px] bg-teal-l px-3.5 py-2.5 text-[13px] text-slate-m">
            Secure payment via <b className="text-teal">Razorpay</b> — UPI, cards, net banking
          </p>

          <button
            type="button"
            onClick={() => addMoney(payable)}
            disabled={payable <= 0}
            className="btn btn-primary w-full"
          >
            Pay {rupees(payable)}
          </button>
        </div>
      </div>

      <div className="card">
        <h2 className="mb-4.5 text-[15px] font-bold text-slate">Transaction History</h2>
        <ul>
          {transactions.map((t) => {
            const credit = t.amount > 0
            return (
              <li
                key={t.id}
                className="flex items-center justify-between gap-3 border-b border-slate-100 py-3 last:border-b-0"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] text-base ${
                      credit ? 'bg-teal-l' : 'bg-rose-l'
                    }`}
                  >
                    {credit ? '⬆️' : '⬇️'}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-[13px] font-semibold text-slate">{t.label}</div>
                    <div className="text-[11px] text-slate-l">{t.date}</div>
                  </div>
                </div>
                <div
                  className={`shrink-0 text-sm font-extrabold ${credit ? 'text-teal' : 'text-rose'}`}
                >
                  {credit ? '+' : '−'}
                  {rupees(Math.abs(t.amount))}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
