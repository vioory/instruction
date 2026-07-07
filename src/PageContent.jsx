function PageContent({ home, title, text, warning, BackgroundIcon }) {
  return (
    <>
      {
        <BackgroundIcon
          className={`background-icon ${home ? "home-page" : ""}`}
        />
      }

      <h1 className="header">{title}</h1>

      <div className="content">
        {Array.isArray(text) ? (
          <ul>
            {text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{text}</p>
        )}

        {warning && <p className="warning">{warning}</p>}
      </div>
    </>
  );
}

export default PageContent;
