import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import styles from './Home.module.scss'

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Main />
    </div>
  )
}

export default Home
