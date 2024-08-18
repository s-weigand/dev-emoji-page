import type React from "react";

import type Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { CopyCardWrapper } from "./CopyCardWrapper";
import { type Snippet, snippetList } from "./snippetList";

const SnippetCard = (props: {
  snippet: Snippet;
}): React.ReactElement<typeof Tooltip> => {
  const { title, content } = props.snippet;

  return (
    <CopyCardWrapper copyText={content} cardSx={{ backgroundColor: "inherit", flexGrow: 1 }}>
      <Typography
        sx={{ fontSize: "0.9rem", textAlign: "center" }}
        color="textSecondary"
        gutterBottom
      >
        {title ? title : content}
      </Typography>
    </CopyCardWrapper>
  );
};

export const SnippetCards = (): React.ReactElement => {
  return (
    <div className="wrapper">
      <div className="card-container">
        {snippetList.map((snippet) => (
          <SnippetCard key={snippet.content} snippet={snippet} />
        ))}
      </div>
    </div>
  );
};
