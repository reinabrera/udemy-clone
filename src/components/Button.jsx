export default function Button({ type, children, customClass, handleClick }) {
  let classes = "";

  switch (type) {
    case "primary":
      classes = "bg-primary text-white p-3 font-extrabold antialiased";
      break;
    case "purple":
      classes =
        "bg-purple inline-flex items-center hover:bg-purple-hover w-full justify-center font-extrabold text-white inline-flex";
      break;
    case "border":
      classes =
        "bg-transparent hover:bg-neutral-100 transition-all border border-black p-3 font-extrabold";
      break;
    default:
      break;
  }

  return (
    <>
      {handleClick ? (
        <button
          onClick={() => {
            return handleClick();
          }}
          className={classes + " " + customClass}
        >
          {children}
        </button>
      ) : (
        <button className={classes + " " + customClass}>{children}</button>
      )}
    </>
  );
}
