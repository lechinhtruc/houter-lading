export default function HouseList({ children }) {
  return (
    <div className="flex gap-10 w-full overflow-hidden scroll-smooth houseList">
      <div className="flex gap-10">{children}</div>
    </div>
  );
}
