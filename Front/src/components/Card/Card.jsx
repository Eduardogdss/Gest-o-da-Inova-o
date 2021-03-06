import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { Detail } from '..'

const Card = ({ props }) => {
  const colors = {
    "estagio": "#CC66CC",
    "bolsa_ic": "#72f542",
    "extensao": "#FFFF44",
    "other": "#FFFFFF"
  }

  const backgroundColor = colors[props.type] || colors["other"]
  const selectedInfo = [
    {
      value: "Descrição: ",
      text: props.testimony.length > 150 ? props.testimony.slice(0, 150) + '...' : props.testimony
    },
    {
      value: "Orientador: ",
      text: props.advisor
    },
    {
      value: "Local: ",
      text: props.location
    }
  ]

  return (
    <Link to={'/testemony/' + props._id} className={styles.link}>
      <div className={styles.card}>
        <div style={{ backgroundColor: backgroundColor }} className={styles.type}>
          {props.type}
        </div>
        <h2 className={styles.title}>{props.title}</h2>
        {selectedInfo.map(({ value, text, ...rest }) => (
          <Detail value={value} text={text} />
        ))}

      </div>
    </Link>
  )
}

export default Card