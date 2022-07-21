import {FC, useMemo, useState} from "react";
import styles from './post.module.scss'
import {useGetCommentsQuery, useGetPostQuery} from "../../store/blog/blog.api";
import {Link, useParams} from "react-router-dom";
import {Comment} from "../../components/comment";
import {Modal} from "../../components/modal";
import {ReactComponent as IconArrowLeft} from '../../assets/icons/arrow-left.svg'

const Post: FC = () => {
  let { id } = useParams();
  const {data: post} = useGetPostQuery(Number(id))
  const {data: comments} = useGetCommentsQuery(Number(id))
  const [showModal, setShowModal] = useState(false)

  const commentsList = useMemo(() =>
    comments?.map((comment) => <Comment key={comment.id} comment={comment}/>
    ), [comments])

  return (
    <>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        Tochno 0_o?
      </Modal>
      <Link to="/">
        <IconArrowLeft className={styles.backBtn}/>
      </Link>
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
    </>
  )
}

export {Post}