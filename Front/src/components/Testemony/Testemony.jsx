import styles from './Testemony.module.css'
import { getHumanDate } from '../../utils/date'
import { Detail } from '..'

const Testemony = ({ props }) => {
  const startDate = getHumanDate(new Date(props.startDate))
  const endDate = getHumanDate(new Date(props.endDate))

  const selectedInfo = [
    {
      value: "Orientador: ",
      text: props.advisor
    },
    {
      value: "Outros participantes: ",
      text: props.otherResearchers
    },
    {
      value: "Testemunho: ",
      text: props.testimony
    },
    {
      value: "Local: ",
      text: props.location
    },
    {
      value: "Data de início: ",
      text: startDate
    },
    {
      value: "Data de Conclusão: ",
      text: endDate
    }
  ]

  return (
    <div className={styles.testemonyContainer}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.testemonyInfo}>
        {selectedInfo.map(({ value, text, ...rest }) => (
          <Detail value={value} text={text} />
        ))}
        <p>
          <b>{"Email de contato: "}</b>
          <a href={"mailto:" + props.user.email} className={styles.email}>
            {props.user.email}
          </a>
        </p>
        <p>
          <b>{"Link para o vídeo: "}</b>
          <a href={props.videoUrl} className={styles.email}>
            {props.videoUrl}
          </a>
        </p>
      </div>
    </div>
  )
}

export default Testemony
