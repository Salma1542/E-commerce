import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const [productDetail, setProductDetail] = useState(null);
  const [selectedSize, setSelectedSize] = useState("1KG");
  const [selectedMaterial, setSelectedMaterial] = useState("CANADA");
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    fetch("/Data/Products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));
        setProductDetail(found);
      });
  }, [id]);

  if (!productDetail)
    return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div className="container" style={{ marginTop: "100px", marginBottom: "60px" }}>
      <div className="row g-5">

        <div className="col-lg-6 col-md-5 ">
          <div className="p-0"
            style={{
              
    height: "500px",       
              overflow: "hidden",
            }}
          >
            <img
              src={productDetail.image_url}
              alt={productDetail.name}
              className="img-fluid"
              style={{ height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-7">
          <h1 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#222" }}>
            {productDetail.name}
          </h1>

          <div style={{ color: "#f5a623", fontSize: "1rem", marginBottom: "6px" }}>
            ⭐⭐⭐⭐⭐{" "}
            <span style={{ color: "#aaa", fontSize: "0.85rem" }}>No reviews</span>
          </div>

          <hr />

          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px", color: "#555" }}>
            <span style={{ width: 9, height: 9, background: "#4caf50", borderRadius: "50%", display: "inline-block" }} />
            12 in stock
          </div>

          <div style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "14px" }}>
            €{productDetail.price}
          </div>

          <p style={{ color: "#777", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "18px" }}>
            {productDetail.description}
          </p>

          <div style={{ fontWeight: 700, marginBottom: "6px" }}>
            Size: <span style={{ fontWeight: 400, color: "#555" }}>{selectedSize}</span>
          </div>
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            {["1KG", "2KG", "5KG"].map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                style={{
                  border: `1.5px solid ${selectedSize === s ? "#f5a623" : "#ddd"}`,
                  borderRadius: "20px",
                  padding: "5px 18px",
                  background: selectedSize === s ? "#fff9ee" : "#fff",
                  color: selectedSize === s ? "#f5a623" : "#444",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {s}
              </button>
            ))}
          </div>

         

          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "22px" }}>
            <span style={{ fontWeight: 700 }}>Quantity:</span>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", border: "1.5px solid #ddd", borderRadius: "20px", padding: "4px 16px" }}>
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                style={{ background: "none", border: "none", fontSize: "1.2rem", fontWeight: 700, cursor: "pointer" }}
              >−</button>
              <span style={{ fontWeight: 700, minWidth: "20px", textAlign: "center" }}>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                style={{ background: "none", border: "none", fontSize: "1.2rem", fontWeight: 700, cursor: "pointer" }}
              >+</button>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", marginBottom: "14px" }}>
            <button style={{ flex: 1, background: "#f5a623", color: "#fff", border: "none", borderRadius: "30px", padding: "13px", fontWeight: 700, fontSize: "1rem", cursor: "pointer" }}>
              Add to cart
            </button>
            <button style={{ flex: 1, background: "#222", color: "#fff", border: "none", borderRadius: "30px", padding: "13px", fontWeight: 700, fontSize: "1rem", cursor: "pointer" }}>
              Buy it now
            </button>
          </div>

          <div style={{ color: "#888", fontSize: "0.88rem", marginBottom: "8px", cursor: "pointer" }}>🤍 Wishlist</div>
          <div style={{ color: "#aaa", fontSize: "0.82rem" }}>SKU: {productDetail.id}</div>
        </div>

      

      </div>
    </div>
  );
}