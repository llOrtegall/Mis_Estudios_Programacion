import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export const App = () => {

  return (
    <section className='App'>

      <TwitterFollowCard

        isFollowing={true} userName="midudev"
        name="Miguel Angel Duran" />

      <TwitterFollowCard

        isFollowing={false} userName="pheralb"
        name="Pablo Hernandez" />

      <TwitterFollowCard

        isFollowing userName="elonmusk"
        name="Elonk Musk" />

      <TwitterFollowCard
        isFollowing userName="llortegall"
        name="Ivan Ortega" />

    </section>
  )
}