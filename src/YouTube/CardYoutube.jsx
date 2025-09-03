import BodyYoutubeData from "./BodyYoutubeData";

const CardYoutube = function () {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div>
        <div className="col-md-4">
          <img
            src=""
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardYoutube;