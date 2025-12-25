import React from "react";
import PriceDisplay from "./price-display";

// Reusable Components
const DetailCard = ({
  icon,
  title,
  value,
  isPrice = false,
}: {
  icon?: React.ElementType;
  title: string;
  value: string;
  isPrice?: boolean;
}) => (
  <div className="flex rounded-md items-center p-3 bg-card border space-x-2 w-full sm:w-auto">
    {/* Icon Container */}
    {icon && (
      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
        {React.createElement(icon, {
          className: "w-4 h-4 sm:w-6 sm:h-6 text-primary", // Responsive icon size
        })}
      </div>
    )}

    {/* Text Content */}
    <div className="flex-1 min-w-0">
      <p className="text-xs sm:text-sm text-muted-foreground truncate">
        {title}
      </p>
      {isPrice ? (
        <PriceDisplay 
          price={value} 
          className="text-base sm:text-lg truncate block"
        />
      ) : (
        <p className="text-base sm:text-lg font-semibold truncate">{value}</p>
      )}
    </div>
  </div>
);

export default DetailCard;
