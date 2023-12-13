import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={197}
    height={222}
    viewBox="0 0 197 222"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="-1" y="280" rx="10" ry="10" width="280" height="17" />
    <rect x="-1" y="312" rx="10" ry="10" width="280" height="49" />
    <rect x="161" y="96" rx="0" ry="0" width="1" height="2" />
    <rect x="219" y="370" rx="10" ry="10" width="60" height="30" />
    <rect x="-1" y="370" rx="10" ry="10" width="148" height="30" />
    <rect x="0" y="0" rx="10" ry="10" width="194" height="113" />
    <rect x="1" y="126" rx="0" ry="0" width="0" height="23" />
    <rect x="0" y="129" rx="10" ry="10" width="197" height="37" />
    <rect x="0" y="183" rx="10" ry="10" width="104" height="33" />
    <rect x="146" y="183" rx="10" ry="10" width="48" height="33" />
  </ContentLoader>
);

export default Skeleton;
