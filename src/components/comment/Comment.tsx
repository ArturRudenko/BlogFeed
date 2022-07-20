import {FC} from "react";
import {ICommentResponseDto} from "../../models/comment";
import styles from './comment.module.scss'

interface ICommentProps {
  comment: ICommentResponseDto;
}

const Comment: FC<ICommentProps> = ({comment}) => (
  <div className={styles.comment}>
    <p className={styles.commentAuthor}>{comment.email}</p>
    <p className={styles.commentMessage}>{comment.body}</p>
  </div>
)

export {Comment}