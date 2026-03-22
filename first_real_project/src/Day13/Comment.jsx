import { useEffect, useState } from "react";
import axios from "axios";
import { BounceLoader, ClipLoader } from "react-spinners";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);
  const fetchComment = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments/",
      );
      console.log("Comment Data: ", res.data);
      setComments(res.data);
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
      <h1>All Comments</h1>
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
      {comments.length != 0 || <b>Comment is empty</b>}
      {comments.map((cmt) => {
        return (
          <div key={`${cmt.id}.${cmt.postId}`}>
            <h5>Name: {cmt.name}</h5>
            {/* <b> */}
            Email: <i>{cmt.email}</i>
            {/* </b> */}
            <p>{cmt.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
