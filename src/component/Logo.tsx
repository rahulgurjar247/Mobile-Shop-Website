const Logo = ({ color = "white" }: { color: string }) => {
  return (
    <div style={{ color: color }} className={`font-semibold text-[20px] `}>
      <span className="text-pink-500">DhramRaj</span>-Mobile
    </div>
  );
};

export default Logo;
