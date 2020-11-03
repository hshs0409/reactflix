import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      loading: true,
      error: null,
      isMovie: pathname.includes("/movie/"),
    };
  }

  // 먼저 componentDidMount로 rendering 끝나면 데이터 받아와야한다/
  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    // id가 스트링으로 나오기 때문에 int로 변환
    const parsedId = parseInt(id);
    const { isMovie } = this.state;
    if (isNaN(parsedId)) return push("/");
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.movieDetail(parsedId));
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, loading, error } = this.state;
    console.log(this.state);
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}
