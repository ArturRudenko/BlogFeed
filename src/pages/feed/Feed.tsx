import {FC} from "react";
import styles from './feed.module.scss'
import {useGetPostsQuery} from "../../store/blog/blog.api";
import {DEFAULT_USER_ID} from "../../utils/constants";
import {PostPreview} from "../../components/post-preview";

const Feed: FC = () => {
  const {data: posts} = useGetPostsQuery(DEFAULT_USER_ID)

  return (
    <div className={styles.container}>
      <section className={styles.feed}>
        {posts?.map((post) => <PostPreview key={post.id} post={post}/>)}
      </section>
    </div>
  )
}

export {Feed}