export const TwitterFollowCard = ({ userName, name, isFollowing }) => {

  //console.log(isFollowing)

  return (
    <article className='md-twi'>
      <header className='md-twi-header'>
        <img
          className='md-twi-img'
          src={`https://unavatar.io/${userName}`}
          alt="El avatar" />
        <div>
          <strong>{name}</strong>
          <span>@{userName}</span>
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