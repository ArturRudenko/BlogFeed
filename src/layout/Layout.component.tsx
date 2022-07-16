import React from "react";
import type {FC} from 'react';
import {UserModel} from "../models/user";
import {Header} from "../components/header";


interface ILayoutProps {
  user: UserModel;
}

const Layout: FC<React.PropsWithChildren<ILayoutProps>> = ({user, children}) => {

  return (
    <>
      <Header name={user.name} email={user.email} />
      {children}
    </>
  );
};

export {Layout};
