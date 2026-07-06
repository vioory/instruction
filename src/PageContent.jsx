function PageContent({ title, text, warning, BackgroundIcon }) {
  return (
    <>
      {BackgroundIcon && <BackgroundIcon className="background-icon" />}

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
