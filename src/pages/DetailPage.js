import React from "react";

import { useFetchData, STATUS } from "hooks/useFetchData";
import { getDetail } from "api/api";
import { useRouteMatch } from "react-router";

const { idle, pending, resolved, rejected } = STATUS;

export default function DetailPage() {
  const match = useRouteMatch();
  const { issueNumber } = match.params;

  const [status, error, issue] = useFetchData(getDetail(issueNumber));

  switch (status) {
    default:
    case idle:
      return null;
    case pending:
      return <div>waiting...</div>;
    case resolved:
      return (
        <div>
          {/* <h2>
            #{issue.number} {issue.title}
          </h2>
          <div>
            작성자: {issue.user.login}, 작성일: {issue.created_at}
          </div>
          <span>코멘트: {issue.comments}</span> */}
        </div>
      );
    case rejected:
      return <div>{error.message}</div>;
  }
}
