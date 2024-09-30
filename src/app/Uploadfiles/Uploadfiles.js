import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';


const Uploadfiles = () => {
  return (
    <div className="     my-6 flex-col text-center  justify-evenly flex items-center ">
      <span className="    font-bold text-4xl  pb-5 "> Upload your files</span>
      <div className="    w-2/3 border-2 my-6 box-border  outline-dotted  p-10 h-auto text-center flex flex-col  ">
        <span className=" text-2xl  p-2 font-semibold">
          Drag and drop your file here
        </span>
        <span>or choose them from your computer.</span>

        
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        


      </div>
    </div>
  );
};

export default Uploadfiles;
