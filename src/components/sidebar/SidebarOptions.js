import React from "react";

function SidebarOptions({ text, Icon }) {
  return (
    <div>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions;
