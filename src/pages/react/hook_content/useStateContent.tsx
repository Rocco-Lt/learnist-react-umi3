import React, { useState } from 'react';

const UseStateContent = props => {
  return (
    <>
      <p>useState</p>
      <p>
        作用：在函数组件中声明状态值。
        <br />
        使用：<span>const [count,setCount] = useState(0);</span>
        <span style={{ color: 'red' }}>
          这种属于数组的解构赋值形式,useState返回的是一个数组形式
        </span>
        <br />
      </p>
      <p>原理分析：</p>
      <div className="code">
        {` const App = () => {
                        const [n, setN] = React.useState(0);
                        return (
                           <div>
                               <p>n：{n}</p>
                               <button onClick={()=>setN(n+1)}>+1</button>
                           </div>
                        )
                      }
                      ReactDOM.render(<App/>,document.querySelector('#root')); `}
      </div>
      <p>
        当我点触发setN时候，每次都会让页面重新渲染，那么为什么<span></span>
      </p>
    </>
  );
};

export default UseStateContent;
