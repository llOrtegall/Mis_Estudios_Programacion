import './App.css';

export const App = () => {
  return (
    <article className='md-twi'>
      <header className='md-twi-header'>
        <img
          className='md-twi-img'
          src="https://i.pinimg.com/564x/1a/23/63/1a23636783f15649d1d55a4e71bf064a--dragon-age-inquisition-medieval-fantasy.jpg"
          alt="El avatar" />
        <div>
          <strong>Ivan Ortega</strong>
          <span>@llOrTeGall</span>
        </div>
      </header>
      <aside>
        <button>
          Seguir
        </button>
      </aside>
    </article>
  )
}