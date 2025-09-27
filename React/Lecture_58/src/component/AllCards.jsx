
function AllCards({data}) {
    
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {/* <h1>All Cards</h1> */}

      {data.map((singleItem) => (
        <div 
        key={singleItem.id}
          style={{
            backgroundColor: "green",
            width: "250px",
            minHeight: "auto",
            borderRadius: "15px",
          }}
        >
        
          <img src={singleItem.thumbnail} style={{backgroundColor:"white",border:"2px solid red", marginTop:"15px",borderRadius:"15px",maxWidth:"200px",objectFit:"cover"}} alt="" />
          <h2>{singleItem.title}</h2>
          <p style={{fontStyle:"italic", fontSize:"20px"}}>{singleItem.price}</p>
          <p style={{opacity:"0.9"}}>{singleItem.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AllCards;
