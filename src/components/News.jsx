import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  state = {
    articles: [],
    loading: false,
    page: 1,
    totalResults: 0,
  };
  //  constructor(){
  //      super();
  //      this.state={
  //          aritcles: [],
  //          loading : false,
  //          page : 1
  //      }
  //  }
  capitalize = (str) => {
    if (typeof str === "string") {
      return str.replace(/^\w/, (c) => c.toUpperCase());
    } else {
      return "";
    }
  };
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(10);
    this.setState({ loading: true });
    let parsedData = await data.json();
    this.props.setProgress(30);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  handlepreButton = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(10);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
    this.props.setProgress(100);
  };
  handlenextButton = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
        this.state.page + 1
      }&pagesize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      this.props.setProgress(10);
      let parsedData = await data.json();
      this.props.setProgress(50);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
      this.props.setProgress(100);
    }
  };
  // fetchMoredata = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e004d7cece114230af2bf4e93051a6b9&page=${this.state.page}pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   this.setState({ loading: true });
  //   let parsedData = await data.json();
  //   this.setState({
  //     articles: this.state.articles.concat(parsedData.articles),
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   });
  // };

  render() {
    return (
      <div className="container my-3">
        <h2
          className="text-center"
          style={{ margin: "35px", marginTop: "90px" }}
        >
          NewsMonkey-Top Headlines on {this.capitalize(this.props.category)}{" "}
          category
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlepreButton}
            type="button"
            className="btn btn-dark btn-sm"
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handlenextButton}
            type="button"
            className="btn btn-dark btn-sm"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
