import React from 'react';
import styles from './index.less';
import catalogue from '../data/catalogue';
import { Link } from 'umi';
export default () => {
  console.log(catalogue);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <h1>前端学习记录</h1>
      <Link to="/hook">进去学习</Link>
    </div>
  );
};
