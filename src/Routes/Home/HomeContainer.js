import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "api";

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();

      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();

      const {
        data: { results: popular },
      } = await movieApi.popular();

      this.setState({ nowPlaying, upcoming, popular });
    } catch {
      this.setState({ error: "Can't find Movies Information" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    console.log(nowPlaying);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default HomeContainer;
