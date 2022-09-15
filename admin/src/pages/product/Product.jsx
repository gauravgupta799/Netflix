import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";

export default function Product() {
    const location = useLocation();
    const movie = location.movie;
    const {title, img, desc,year, _id,limit,genre} = movie;
    console.log("MovieL", movie);
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src= {img} alt="" className="productInfoImg" />
                  <span className="productName">{title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{_id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Genre:</span>
                      <span className="productInfoValue">{genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Desc:</span>
                      <span className="productInfoValue">{desc}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Year:</span>
                      <span className="productInfoValue">{year}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Limit:</span>
                      <span className="productInfoValue">{limit}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Movie Title</label>
                  <input type="text" placeholder={title} />
                  <label>Genre</label>
                  <input type="text" placeholder={genre} />
                  <label>Year</label>
                  <input type="text" placeholder={year} />
                  <label>Limit</label>
                  <input type="text" placeholder={limit} />
                  <label>Trailer</label>
                  <input type="file"/>
                  <label>Video</label>
                  <input type="file"/>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src= {img} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
