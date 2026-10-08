import './Wishlist.css'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'

const wishlistItems = [
  {
    game: 'Catan',
    priority: 'High',
    note: 'English edition. Complete and in good condition.',
    fulfilled: false,
  },
  {
    game: 'Wingspan',
    priority: 'Medium',
    note: 'Base game only. Small signs of use are okay.',
    fulfilled: false,
  },
  {
    game: 'Azul',
    priority: 'Low',
    note: 'Any complete edition is welcome.',
    fulfilled: true,
  },
]

function Wishlist() {
  return (
    <div className="wishlist-page">
      <Header title="WISHLIST" />
      {/* <Banner /> */}

      <header className="wishlist-header">
        <div>
          <p className="wishlist-label">GameShelf</p>
          <h1>My wishlist</h1>
          <p>Games I would like to add to my collection.</p>
        </div>
      </header>

      <section aria-labelledby="wishlist-title">
        <div className="wishlist-section-heading">
          <h2 id="wishlist-title">Wishlist items</h2>
          <span>{wishlistItems.length} items</span>
        </div>

        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <article className="wishlist-card" key={item.game}>
              <div className="wishlist-card-top">
                <span className={`wishlist-priority priority-${item.priority.toLowerCase()}`}>
                  {item.priority} priority
                </span>
                <span className={item.fulfilled ? 'wishlist-status status-fulfilled' : 'wishlist-status'}>
                  {item.fulfilled ? 'Fulfilled' : 'Still wanted'}
                </span>
              </div>
              <h3>{item.game}</h3>
              <p className="wishlist-note">{item.note}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Wishlist
