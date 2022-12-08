import "./itemDetail.css";

function ItemDetail({ product }) {
  return (
    <div className="cardDetail">
      <div className="card-detail" >
        <img src={product.imgurl} alt="Producto img" />
      </div>
      <div className="card-detail" >
        <h2>{product.titulo}</h2>
        <p>{product.descripcion}</p>
        <h4>$ {product.precio}</h4>
      </div>
    </div>
  );
}

export default ItemDetail;
