import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const { data } = response;
      const posts = data.slice(0, 4);
      const updatedProps = posts.map((post) => ({
        ...post,
        author: "Daniel",
      }));
      this.setState({
        posts: updatedProps,
      });
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <section className="Posts">
          {posts.map((post) => (
            <Post key={post.id} title={post.title} author={post.author} />
          ))}
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
