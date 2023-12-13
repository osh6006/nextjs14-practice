import style from "./home.module.css";
import Tab from "@/app/(route)/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(route)/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(route)/(afterLogin)/home/_component/PostForm";
import Post from "@/app/(route)/(afterLogin)/_component/Post";

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
