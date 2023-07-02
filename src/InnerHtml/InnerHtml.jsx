import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const InnerHtml = () => {
  const [value, setValue] = useState("");
  let data = ` <p style="color:red, font-weight:bold"> Omar Safayet Khan</p>`;
  return (
    <div>
      {/* innerHTML */}
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
      {/* jsx */}
      <p style={{ color: "green" }}> Omar Safayet Khan</p>

      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
};

export default InnerHtml;
//Using React quil you can type,edit your writing in innerhtml.
//There is shown the difference between jsx and innerHTML tag.
