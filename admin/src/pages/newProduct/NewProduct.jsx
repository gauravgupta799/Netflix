import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">News Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Superman" />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="genre" />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="1900" />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="number" placeholder="16" />
        </div>
        <div className="addProductItem">
          <label>isSeries?</label>
          <select name="active" id="isSeries">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <textarea type="text" placeholder="description" row ="10" coloum ="5"/>
        </div>  
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="img" />
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input type="file" id="titleImg" />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input type="file" id="thumbnailImg" />
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" id="trailer" />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" id="video" />
        </div>
      </form>
      <div id="btn-div">
        <button className="addProductButton">Create</button>
      </div>
    </div>
  );
}
