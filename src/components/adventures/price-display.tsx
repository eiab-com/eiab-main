import React from "react";

interface PriceDisplayProps {
  price: string;
  showFrom?: boolean;
  className?: string;
}

const PriceDisplay = ({ 
  price, 
  showFrom = true,
  className = "" 
}: PriceDisplayProps) => {
  return (
    <span className={className}>
      {showFrom && (
        <span className="text-xs sm:text-sm text-muted-foreground font-normal mr-1">
          From{" "}
        </span>
      )}
      <span className="font-semibold">{price}</span>
    </span>
  );
};

export default PriceDisplay;

