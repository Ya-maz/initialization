import React from "react";
import type {NextPage} from "next";
import Head from "next/head";

import {Counter} from "src/features/counter/Counter";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next + RTK</title>
        <link rel="icon" href="/pikachu.ico" />
      </Head>
      <header>
        <span>
          <span>Learn, </span>
          <span> Next, </span>
          <span> React,</span>
          <span> Redux, </span>
          <span>Redux Toolkit, </span>
          <span> and </span>
          <span> React Redux</span>
        </span>
      </header>
      <section>
        <Counter />
      </section>
    </div>
  );
};

export default IndexPage;
