// GridContainer.tsx
import React from "react";

type GridContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className: string;
};

const GridContainer = ({
  children,
  className,
  ...rest
}: GridContainerProps) => {
  return (
    <main
      className={`grid min-h-screen bg-background grid-cols-12 gap-4 gap-y-0 mx-auto ${className}`}
      {...rest}
    >
      {children}
    </main>
  );
};

export default GridContainer;
