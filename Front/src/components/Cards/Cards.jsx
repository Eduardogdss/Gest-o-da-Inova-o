import { getTestemoniess } from '../../utils/api'
import { Card, Loading, NotFound } from '..'
import styles from './Cards.module.css'
import React from 'react'

class Cards extends React.Component {
  constructor(props) {
    super(props)
    const cache = sessionStorage.getItem('@pav/testemonies')
    this.state = cache ? { data: JSON.parse(cache), loading: false }
      : { data: [], loading: true }
  }

  componentDidMount() {
    if (this.state.loading) { this.getTestemoniessFromApi() }
  }

  getTestemoniessFromApi = () => {
    getTestemoniess().then((response) => {
      sessionStorage.setItem('@pav/testemonies', JSON.stringify(response.data));
      this.setState({ data: response.data, loading: false })
    }).catch(() => {
      this.setState({ data: [], loading: false })
    })
  };

  render() {
    return (
      <div className={styles.contentContainer}>
        {this.state.loading ? (
          <Loading />
        ) : (
          !this.state.data || this.state.data?.length === 0 ? <NotFound text={"Nenhuma oferta foi encontrada"} /> :
            <div className={styles.cardsContainer}>
              {this.state.data.map((data) => (
                <Card props={data} />
              ))}
            </div>
        )}
      </div>
    )
  }
}

export default Cards
