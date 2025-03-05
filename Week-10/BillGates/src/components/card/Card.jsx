import { useState, useEffect } from "react";
import "./Card.css"; // Card.css dosyasını içe aktar

function Card({ product, balance, cart, updateCart }) {
    const [inputQuantity, setInputQuantity] = useState(cart[product.id] || 0);
    const [prevQuantity, setPrevQuantity] = useState(cart[product.id] || 0);
    const [maxQuantity, setMaxQuantity] = useState(Math.floor(balance / product.price)); // maxQuantity sadece balance ve price'a göre hesaplanacak

    // maxQuantity'yi balance veya product price değiştiğinde güncelle
    useEffect(() => {
        setMaxQuantity(Math.floor(balance / product.price)); // maxQuantity'yi balance'a göre yeniden hesapla
        updateCart(product);
    }, [balance, product.price,product]);

    // Input değeri değiştiğinde inputQuantity'yi güncelle
    const handleInputChange = (e) => {
        let newQuantity = e.target.value;
        console.log(e.target.value);

        // Eğer yeni değer sayıya dönüştürülebiliyorsa, sadece sayıyı al
        if (/^\d+$/.test(newQuantity) || newQuantity === "") {
            newQuantity = parseInt(newQuantity) || 0; // Sayıya dönüştür, boşsa 0 yap
        }

        // Eğer yeni quantity 0'dan küçükse, sıfırla
        if (newQuantity < 0) {
            newQuantity = 0;
        }

        if (maxQuantity === 0) {
            console.log("inputQuantity", inputQuantity);

        } else {
            
            if (newQuantity > maxQuantity) {
                const adjustedValue = maxQuantity + prevQuantity; // Max ve önceki değer toplanıyor  
                newQuantity = adjustedValue;
                setInputQuantity(adjustedValue);
                updateCart(product, adjustedValue); // Sepeti güncelle 
            }
            else {
                setPrevQuantity(newQuantity); // Yeni geçerli değeri sakla
                setInputQuantity(newQuantity); // Değeri güncelle
                updateCart(product, newQuantity); // Sepeti güncelle
            }
        }

        updateCart(product, newQuantity);
        
        
    };


    // Buy butonuna tıklanınca quantity 1 artacak
    const handleBuy = () => {
        const newQuantity = inputQuantity + 1;

        if ((product.price * inputQuantity) == balance) {
            console.log(product.price, " ", balance);
            console.log("hatalı durum")
            return;
        } // Eğer bakiye yetersizse, buy işlemi yapılamaz.      

        setInputQuantity(newQuantity); // Quantity 1 artacak
        updateCart(product, newQuantity); // Sepete ekle

    };

    // Sell butonuna tıklanınca quantity 1 azalacak
    const handleSell = () => {
        if (inputQuantity > 0) {
            const newQuantity = inputQuantity - 1;
            setInputQuantity(newQuantity); // Quantity 1 azalacak
            updateCart(product, newQuantity); // Sepetten çıkar
        }
    };

    // Bakiye değiştiğinde quantity'yi güncelle
    useEffect(() => {
        if (cart[product.id] !== inputQuantity) {
            setInputQuantity(cart[product.id] || 0);
        }
    }, [cart, product.id]);

    return (
        <div className="card">
            <img
                src={product.image}
                alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>${product.price.toLocaleString()}</p>            
            <div className="card-content">
                <button
                    className="sell"
                    onClick={handleSell}
                    disabled={inputQuantity <= 0} // Sell butonu, quantity sıfırdan büyükse aktif
                >
                    Sell
                </button>
                <input
                    type="text" // type="number" yerine "text" kullandık
                    value={inputQuantity}
                    onChange={handleInputChange} // Kullanıcı inputu burada kontrol edilecek

                />
                <button
                    className="buy"
                    onClick={handleBuy}
                    disabled={product.price > balance} // Ürün fiyatı bakiye ile karşılaştırılıyor
                >
                    Buy
                </button>
            </div>
        </div>
    );
}

export default Card;