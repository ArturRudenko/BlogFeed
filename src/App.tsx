import React, {useEffect, useState} from 'react';
import{Layout} from "./layout";
import {Feed} from "./pages/feed";
import {Route, Routes} from "react-router-dom";
import {Post} from "./pages/post";
import {useGetUserQuery} from "./store/blog/blog.api";
import {DEFAULT_USER_ID} from "./utils/constants";


function App() {
  const {data: user} = useGetUserQuery(DEFAULT_USER_ID)

  return (
    <Layout user={user ?? {id: 1,name: '',email: ''}}>
      <Routes>
        <Route path="/" element={<Feed />}/>
        <Route path="/post" element={<Post />}/>
      </Routes>
    </Layout>
  );
}

export default App;
