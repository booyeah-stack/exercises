import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          image={faker.image.people()}
          author={faker.name.firstName()}
          time={faker.date.weekday()}
          comment={faker.lorem.sentences()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image={faker.image.people()}
          author={faker.name.firstName()}
          time="2AM Tuesday"
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image={faker.image.people()}
          author={faker.name.firstName()}
          time="3AM Wednesday"
          comment={faker.lorem.sentences()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
