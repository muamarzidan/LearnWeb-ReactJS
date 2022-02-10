import React from "react";

const Makanan = [
  {
    nama: "Soto",
    harga:12000,
  },
  {
    nama: "Bakso",
    harga: 15000,
  },
  {
    nama: "Nasi Liwet",
    harga: 17000,
  },
  {
    nama: "Nasi Penyet",
    harga: 10000,
  },
  {
    nama: "Mie Goreng",
    harga: 11000,
  },
];

//reduce example syntax
const total_bayar = Makanan.reduce((total_harga, Makanan) => total_harga+Makanan.harga, 0);


const Map = () => {
  return (
    <div>
      <h2>Simple Map</h2>
      <ul>
        {Makanan.map((Makanan, index) => (
          <li>
            {index + 1}. {Makanan.nama} - harga {Makanan.harga}
          </li>
        ))}
      </ul>

      <h2>
        Map with Filter
        <ul>
          {Makanan.filter((Makanan) => Makanan.harga > 10000).map(
            (Makanan, index) => (
              <li>
                {index + 1}. {Makanan.nama} - harga {Makanan.harga}
              </li>
            )
          )}
        </ul>
      </h2>

      <h2>
      Total yang harus dibayar adalah : {total_bayar}
      </h2>
    </div>
  );
};

export default Map;
