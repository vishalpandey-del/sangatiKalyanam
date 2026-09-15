import { products } from '../data/catalog.js'
import { useApp } from '../context/AppContext.jsx'
import { ProductCard } from '../components/cards.jsx'
import { HighlightBox, SectionHeader, rupees } from '../components/ui.jsx'

export default function Products() {
  const { cart, cartTotal, removeFromCart, spend, toast } = useApp()

  const checkout = () => {
    if (spend(cartTotal, `Order · ${cart.length} item(s)`)) {
      cart.forEach((i) => removeFromCart(i.id))
      toast('Order placed — dispatch within 2 business days')
    }
  }

  return (
    <div>
      <SectionHeader
        tag="Products"
        title="Wellness essentials"
        subtitle="Curated physical products — crystals, tools, and spiritual essentials. Delivered pan-India."
      />

      <HighlightBox icon="🚚" title="Pan-India delivery">
        Orders dispatched within 2 business days. Track from your profile.
      </HighlightBox>

      {cart.length > 0 && (
        <div className="card mb-6">
          <h2 className="mb-3.5 text-[15px] font-bold text-slate">Your cart</h2>
          <ul className="mb-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-3 border-b border-slate-100 py-2.5 last:border-b-0"
              >
                <span className="flex min-w-0 items-center gap-2.5">
                  <span className="text-lg">{item.img}</span>
                  <span className="truncate text-[13px] font-semibold text-slate">
                    {item.name}
                    <span className="ml-1.5 font-normal text-slate-l">×{item.qty}</span>
                  </span>
                </span>
                <span className="flex shrink-0 items-center gap-3">
                  <span className="text-[13px] font-bold text-slate">
                    {rupees(item.qty * item.price)}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name}`}
                    className="cursor-pointer text-lg leading-none text-slate-l hover:text-rose"
                  >
                    ×
                  </button>
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-base font-extrabold text-slate">
              Total: <span className="text-teal">{rupees(cartTotal)}</span>
            </div>
            <button type="button" onClick={checkout} className="btn btn-primary">
              Checkout from wallet
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
