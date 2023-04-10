const homeStyles = {
  page: {
    fontFamily: "roboto",

  },

}

export default function Home() {
  return (
    <div className="container" style={homeStyles}>
      <div className="container row">
        <h1 className="col offset-s3">A Portfolio</h1>
        </div>
        <div  className="row">
        <p className="col s6 offset-s3">
          This portfolio is a product of React and created to showcase the builder's strengths in the field of web development.
        </p>
      </div>
    </div>
  );
}
