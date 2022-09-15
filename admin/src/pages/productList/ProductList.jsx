import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useContext} from "react";
import {MovieContext} from "../../components/movieContext/MovieContext";
import { getMovies , deleteMovie} from "../../components/movieContext/apiCalls";


export default function ProductList() {
  const {movies, dispatch} = useContext(MovieContext);

  useEffect(()=>{
    getMovies(dispatch);
  },[dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id,dispatch);
  };

  const handleUpdate = (id) => {
    console.log(id)
  }
  
  const columns = [
    { field: "_id", headerName: "ID", width: 120 },
    {
      field: "movie",
      headerName: "Movies",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "year", headerName: "Year", width: 150 },
    { field: "limit", headerName: "Limit", width: 150 },
    { field: "isSeries", headerName: "isSeries", width: 150 },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname:"/movie/" + params.row._id, movie:params.row}}>
              <button className="productListEdit" onClick = {()=> handleUpdate(params.row._id)}>Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId = {(row) => row._id}
      />
    </div>
  );
}
