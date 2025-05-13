// pages/Dashboard.js
import { useNavigate } from "react-router-dom";

export default function Dashboard({ coupons }) {
  const navigate = useNavigate();

  const recentCoupons = coupons.slice(-3).reverse(); // last 3

  return (
    <div className="dashboard">
      <h2>Welcome to XOFlips 💑</h2>
      <div className="button-group">
        <button onClick={() => navigate("/create")}>➕ Create Coupon</button>
        <button onClick={() => navigate("/view")}>📖 View All Coupons</button>
      </div>

      <h3>Your Recent Coupons</h3>
      <ul>
        {recentCoupons.length === 0 ? (
          <p>No coupons yet! Start by creating one.</p>
        ) : (
          recentCoupons.map((coupon, i) => (
            <li key={i}>
              <strong>{coupon.title}</strong> – {coupon.category}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
