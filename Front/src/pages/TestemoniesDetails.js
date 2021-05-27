import React from 'react'
import { getTestemonies } from '../utils/api'
import { Testemony, NotFound, Loading } from '../components'

class TestemoniesDetails extends React.Component {
  constructor(props) {
    super(props)
    this.id = props.match.params.id
  }

  state = {
    notFound: false,
    loading: true,
    testemony: []
  };

  componentDidMount() {
    this.getTestemoniesFromApi(this.id)
  }

  getTestemoniesFromApi = (id) => {
    getTestemonies(id).then((response) => {
      this.setState({ testemony: response.data, loading: false })
    }).catch(() => {
      this.setState({ loading: false, notFound: true })
    })
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loading />
        ) : (
          this.state.notFound ? (
            <NotFound text={"Oferta não encontrada"} />
          ) : <Testemony props={this.state.testemony} />
        )}
      </div>
    )
  }
}

export default TestemoniesDetails
