import BackButton from "@/app/(route)/(afterLogin)/_component/BackButton";
import style from "./singlePost.module.css";
import Post from "@/app/(route)/(afterLogin)/_component/Post";
import CommentForm from "@/app/(route)/(afterLogin)/[username]/status/[id]/_component/CommentForm";

export default function SinglePost() {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>게시하기</h3>
      </div>
      <Post />
      <CommentForm />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
