import React from "react";

function ChattoFilePage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return <div>Page:{id}</div>;
}

export default ChattoFilePage;
