import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export const App = () => {
  const formatUsername = (username) => `@${username}`
  return (
    <section className='App'>
      <TwitterFollowCard formatUsername={formatUsername} isFollowing={true} userName="midudev" name="Miguel Angel Duran" />
      <TwitterFollowCard formatUsername={formatUsername} isFollowing={false} userName="pheralb" name="Pablo Hernandez" />
      <TwitterFollowCard formatUsername={formatUsername} isFollowing userName="elonmusk" name="Elonk Musk" />
      <TwitterFollowCard formatUsername={formatUsername} isFollowing userName="llortegall" name="Ivan Ortega" />
    </section>
  )
}