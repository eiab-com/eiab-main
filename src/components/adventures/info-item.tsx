const InfoItem = ({ title, value }: { title: string; value: string }) => (
  <div className=" flex flex-col gap-1 sm:gap-2 lg:flex-row lg:justify-between">
    <span className="text-muted-foreground">{title}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default InfoItem;
