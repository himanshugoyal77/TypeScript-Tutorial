import React from "react";
import { PostProps } from "../types/types";

function PropsCard(props: PostProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
}

export default PropsCard;
