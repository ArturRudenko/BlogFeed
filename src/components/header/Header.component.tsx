import type {FC} from 'react';
import {Avatar} from '../avatar';
import styles from './header.module.scss';

interface IHeaderProps {
  name: string;
  email: string;
  avatar?: string;
}

const Header: FC<IHeaderProps> = ({name, email}) => (
  <header>
    <div className={styles.container}>
      <Avatar src={null} />
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  </header>
);

export {Header};
export type {IHeaderProps};