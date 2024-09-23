import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const Posts = () => {
  // This effect will run on every render
  useEffect(() => {
    console.log("Posts component is rendering");
  });

  const URL = "https://jsonplaceholder.typicode.com/posts";
  const { data: posts, loading, error } = useFetch(URL);

  return (
    <>
      {loading ? <p> Loading... </p> : null}
      {!error ? (
        posts?.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p> {error} </p>
      )}
    </>
  );
};

export default Posts;
