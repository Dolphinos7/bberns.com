const LinkButton = ({text, link}) => {
  return (
    <form action={link}>
      <button className="button" style={{ marginTop: "20px" }} type="submit">
        {text}
      </button>
    </form>
  );
};

export default LinkButton;
