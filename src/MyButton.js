import React from 'react'

const  MyButton= (props) => {
  return (
    <div>
        <button onClick={() => props.Click()}>Click Me For More</button>
    </div>
  );
};

export default MyButton;