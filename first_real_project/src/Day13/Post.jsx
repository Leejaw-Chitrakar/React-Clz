import { useEffect, useState } from "react";
import axios from "axios";
import { BounceLoader, ClipLoader } from "react-spinners";

const Comment = () => {
  const [post, setPosts] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);
  const fetchComment = async () => {
    try {
      setLoading(true);
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts/");
      console.log("Post Data: ", res.data);
      setPosts(res.data);
    } catch (e) {
      console.log("Error!!");
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchComment();
  }, []);
  return (
    <div>
      <h1>All Posts</h1>
      {Loading && (
        <BounceLoader
          color={"gray"}
          loading={true}
          // cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {Error && (
        <div
          style={{
            color: "red",
            fontSize: "40px",
            textShadow: "6px 10px 4px purple",
            fontWeight: "bolder",
            letterSpacing: "4px",
          }}
        >
          Something went wrong!!
        </div>
      )}
      {post.length != 0 || <b>Post is empty</b>}
      {post.map((p) => {
        return (
          <div key={`${p.id}.${p.postId}`}>
            <h5>ID: {p.id}</h5>
            {/* <b> */}
            Body: <i>{p.body}</i>
            {/* </b> */}
            <p>{p.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
