import Filters from '../Filters/Filters'
import Sort from '../Sort/Sort'
import Tickets from '../Tickets/Tickets'
import style from './Main.module.scss'

function Main() {
  return (
    <div className={style.main}>
      <Filters />
      <div className={style.main__content}>
        <Sort />
        <Tickets />
      </div>
    </div>
  )
}

export default Main
