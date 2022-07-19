import {FC} from "react";
import {IPostResponseDto} from "../../models/post";
import styles from './postPreview.module.scss'
import {Link} from "react-router-dom";

interface IPostPreviewProps {
  post: IPostResponseDto
}

const PostPreview: FC<IPostPreviewProps> = ({post}) => {


  return (
    <Link to={`post/${post.id}`}>
      <article className={styles.post}>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <p className={styles.postContent}>{post.body}</p>
      </article>
    </Link>
  )
}

export {PostPreview}