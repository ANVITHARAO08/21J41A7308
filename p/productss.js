import React, { useState, useEffect } from 'react';

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');
  const [n, setN] = useState(10);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`(import React, { useState, useEffect } from 'react';

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');
  const [n, setN] = useState(10);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`(link unavailable));
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [company, category, n, minPrice, maxPrice]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.productId}>
              {product.productName} - {product.price}
            </li>
          ))}
        </ul>
      )}
      {error ? (
        <p>Error: {error.message}</p>
      ) : null}
      <form>
        <label>
          Company:
          <select value={company} onChange={(e) => setCompany(e.target.value)}>
            <option value="AMZ">AMZ</option>
            <option value="FLP">FLP</option>
            <option value="SNP">SNP</option>
            <option value="MYN">MYN</option>
            <option value="AZO">AZO</option>
          </select>
        </label>
        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Phone">Phone</option>
            <option value="Computer">Computer</option>
            <option value="TV">TV</option>
            <option value="Earphone">Earphone</option>
            <option value="Tablet">Tablet</option>
            <option value="Charger">Charger</option>
            <option value="Rouse">Rouse</option>
            <option value="Keypad">Keypad</option>
            <option value="Bluetooth">Bluetooth</option>
            <option value="Pendrive">Pendrive</option>
            <option value="Remote">Remote</option>
            <option value="Speaker">Speaker</option>
            <option value="Headset">Headset</option>
            <option value="Laptop">Laptop</option>
            <option value="PC">PC</option>
          </select>
        </label>
        <label>
          N:
          <input
            type="number"
            value={n}
            onChange={(e) => setN(e.target.value)}
          />
        </label>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};
));
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getProducts();
  }, [company, category, n, minPrice, maxPrice]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.productId}>
              {product.productName} - {product.price}
            </li>
          ))}
        </ul>
      )}
      {error ? (
        <p>Error: {error.message}</p>
      ) : null}
      <form>
        <label>
          Company:
          <select value={company} onChange={(e) => setCompany(e.target.value)}>
            <option value="AMZ">AMZ</option>
            <option value="FLP">FLP</option>
            <option value="SNP">SNP</option>
            <option value="MYN">MYN</option>
            <option value="AZO">AZO</option>
          </select>
        </label>
        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Phone">Phone</option>
            <option value="Computer">Computer</option>
            <option value="TV">TV</option>
            <option value="Earphone">Earphone</option>
            <option value="Tablet">Tablet</option>
            <option value="Charger">Charger</option>
            <option value="Rouse">Rouse</option>
            <option value="Keypad">Keypad</option>
            <option value="Bluetooth">Bluetooth</option>
            <option value="Pendrive">Pendrive</option>
            <option value="Remote">Remote</option>
            <option value="Speaker">Speaker</option>
            <option value="Headset">Headset</option>
            <option value="Laptop">Laptop</option>
            <option value="PC">PC</option>
          </select>
        </label>
        <label>
          N:
          <input type="number" value={n} onChange={(e) => setN(e.target.value)} />
        </label>
        <label>
          Min Price:
          <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        </label>
        <label>
          Max Price:
          <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        </label>
      </form>
    </div>
  );
}