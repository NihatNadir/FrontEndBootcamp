import { useState } from "react";

const products = [
  { id: 1, name: "Kettlebell / 5kg", price: "89,99$ / 59,99$", image: "../images/purchase1.jpg" },
  { id: 2, name: "Treadmill", price: "899,99$ / 599,99$", image: "../images/purchase2.jpg" },
  { id: 3, name: "Adjustable Dumbbell", price: "89,99$ / 59,99$", image: "../images/purchase3.jpg" },
  { id: 4, name: "Kettlebell / 3kg", price: "89,99$ / 59,99$", image: "../images/purchase4.jpg" },
];

const PurchaseSection = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <section className="w-full">
      <article className="container mx-auto">
        <section className="class-title">
          <h3>PURCHASE FROM US</h3>
          <div className="class-line"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ex explicabo dolorem asperiores quas distinctio repellat illo blanditiis placeat aperiam.
          </p>
        </section>
        <div className="flex flex-col xl:flex-row xl:gap-5 mx-20">
          {products.map((product) => (
            <div key={product.id} className="purchase-card p-4 shadow-lg rounded-lg text-center">
              <div>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
              </div>
              <div className="purchase-cart mt-4">
                <h6 className="text-lg font-semibold" style={{ color: "var(--navBg)" }}>{product.name}</h6>
                <p className="text-gray-700" style={{ color: "var(--textColor2)" }}>{product.price}</p>
                <div
                  className="cart-container flex items-center justify-center gap-2 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer mt-3 hover:bg-blue-600"
                  onClick={() => addToCart(product)}
                >
                  <p>Add to Cart</p>
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default PurchaseSection;