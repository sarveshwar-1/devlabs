import React from "react";
type Params = {
  id: string;
};

function Page({ id }: Params) {
  return <div>{id}</div>;
}

export default Page;
