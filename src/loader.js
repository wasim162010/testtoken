import React from "react";

export default function LoadingPage(props) {
  const css = `img-loading ${props.className}`;
  return <div className={css}></div>;
}
