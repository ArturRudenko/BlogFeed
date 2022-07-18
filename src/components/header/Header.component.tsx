import type {FC} from 'react';
import {Avatar} from '../avatar';
import styles from './header.module.scss';
import ReactSwitch from "react-switch";
import {useActions, useAppSelector} from "../../hooks";
import {ReactComponent as IconSun} from '../../assets/icons/sun.svg'
import {ReactComponent as IconMoon} from '../../assets/icons/moon.svg'
import {useLayoutEffect} from "react";

interface IHeaderProps {
  name: string;
  email: string;
  avatar?: string;
}

const UncheckedSwitchIcon: FC = () => (
  <div className={styles.iconSunContainer}><IconSun width={'65%'}/></div>
)

const CheckedSwitchIcon: FC = () => (
  <div className={styles.iconSunContainer}><IconMoon width={'65%'}/></div>
)

const Header: FC<IHeaderProps> = ({name, email}) => {
  const {toggleTheme} = useActions()
  const {colorTheme} = useAppSelector(state => state.blog)

  useLayoutEffect(() => {
    document.body.setAttribute('data-theme', colorTheme)
  }, [colorTheme])

  return (
    <header className={styles.container}>
      <Avatar src={null}/>
      <div className={styles.userData}>
        <p className={styles.userDataName}>{name}</p>
        <p>{email}</p>
      </div>
      <ReactSwitch
        onChange={toggleTheme}
        checked={colorTheme === 'dark'}
        handleDiameter={30}
        height={20}
        width={48}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        onColor="#64B5F6"
        offColor="#FFEE58"
        offHandleColor="#E6F4F1"
        uncheckedHandleIcon={<UncheckedSwitchIcon/>}
        checkedHandleIcon={<CheckedSwitchIcon/>}
        className={styles.switchBtn}
      />
    </header>
  )
};

export {Header};
export type {IHeaderProps};