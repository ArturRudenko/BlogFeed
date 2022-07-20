import {FC, useMemo} from "react";
import styles from './post.module.scss'
import {useGetCommentsQuery, useGetPostQuery} from "../../store/blog/blog.api";
import {useParams} from "react-router-dom";
import {Comment} from "../../components/comment";

const Post: FC = () => {
  let { id } = useParams();
  const {data: post} = useGetPostQuery(Number(id))
  const {data: comments} = useGetCommentsQuery(Number(id))

  const commentsList = useMemo(() =>
    comments?.map((comment) => <Comment key={comment.id} comment={comment}/>
    ), [comments])

  return (
    <div className={styles.container}>
      <article className={styles.post}>
        <h1 className={styles.postTitle}>{post?.title}</h1>
        <p className={styles.postContent}>{post?.body}</p>
        <div className={styles.comments}>
          <h2 className={styles.commentsTitle}>Comments</h2>
          {commentsList}
        </div>
      </article>
    </div>
  )
}

export {Post}