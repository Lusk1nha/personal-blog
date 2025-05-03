import React from "react";
import { PatternDark, PatternLight } from "@personal-blog/design-system/icons";

export function BackgroundPatterns() {
  return (
    <React.Fragment>
      <div className="absolute top-1/2 -left-52 transform -translate-y-1/2">
        <Pattern />
      </div>

      <div className="absolute top-0 -right-52">
        <Pattern />
      </div>
    </React.Fragment>
  );
}

interface SVGElementProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

function Pattern(props: Readonly<SVGElementProps>) {
  return (
    <React.Fragment>
      <div className="hidden dark:block">
        <PatternDark {...props} />
      </div>

      <div className="block dark:hidden">
        <PatternLight {...props} />
      </div>
    </React.Fragment>
  );
}
