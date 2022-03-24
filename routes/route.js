/* eslint-disable linebreak-style */
module.exports = (app) => {
  app.get("/", (req, res) => {
    const item = [
      {
        no: 1,
        email: "feri@alfa",
        cars: "avansa",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        price: "Rp. 300000",
        status: "dipinjam",
      },
      {
        no: 2,
        email: "eri@alfa",
        cars: "avansa",
        start: "10 Maret 2020",
        finish: "29 Maret 2020",
        price: "Rp. 240000",
        status: "dipinjam",
      },
      {
        no: 3,
        email: "fiyan@alfa",
        cars: "avansa",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        price: "Rp. 350000",
        status: "dipinjam",
      },
      {
        no: 4,
        email: "dani@alfa",
        cars: "avansa",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        price: "Rp. 400000",
        status: "dipinjam",
      },
      {
        no: 5,
        email: "eri@alfa",
        cars: "avansa",
        start: "10 Maret 2020",
        finish: "29 Maret 2020",
        price: "Rp. 240000",
        status: "dipinjam",
      },
      {
        no: 6,
        email: "fiyan@alfa",
        cars: "avansa",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        price: "Rp. 350000",
        status: "dipinjam",
      },
      {
        no: 7,
        email: "dani@alfa",
        cars: "avansa",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        price: "Rp. 400000",
        status: "dipinjam",
      },
      {
        no: 8,
        email: "dani@alfa",
        cars: "avansa",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        price: "Rp. 400000",
        status: "dipinjam",
      },
      {
        no: 9,
        email: "eri@alfa",
        cars: "avansa",
        start: "10 Maret 2020",
        finish: "29 Maret 2020",
        price: "Rp. 240000",
        status: "dipinjam",
      },
      {
        no: 10,
        email: "dani@alfa",
        cars: "avansa",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        price: "Rp. 400000",
        status: "dipinjam",
      },

    ];
    const items = [
      {
        no: 1,
        nama: "xenia",
        kategori: "keluarga",
        harga: "Rp. 150000000",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        create: "29 Maret 2020",
        update: "29 Maret 2020",
      },
      {
        no: 2,
        nama: "bmw",
        kategori: "mewah",
        harga: "Rp. 250000000",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        create: "29 Maret 2020",
        update: "29 Maret 2020",
      },
      {
        no: 3,
        nama: "esemka",
        kategori: "keluarga",
        harga: "Rp. 2500000",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        create: "29 Maret 2020",
        update: "29 Maret 2020",
      },
      {
        no: 4,
        nama: "avansa",
        kategori: "keluarga",
        harga: "Rp. 150000000",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        create: "29 Maret 2020",
        update: "29 Maret 2020",
      },
      {
        no: 5,
        nama: "esemka",
        kategori: "keluarga",
        harga: "Rp. 2500000",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        create: "29 Maret 2020",
        update: "29 Maret 2020",
      },
      {
        no: 6,
        nama: "avansa",
        kategori: "keluarga",
        harga: "Rp. 150000000",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        create: "29 Maret 2020",
        update: "29 Maret 2020",
      },
      {
        no: 7,
        nama: "bmw",
        kategori: "mewah",
        harga: "Rp. 250000000",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        create: "29 Maret 2020",
        update: "29 Maret 2020",
      },
      {
        no: 8,
        nama: "esemka",
        kategori: "keluarga",
        harga: "Rp. 2500000",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        create: "29 Maret 2020",
        update: "29 Maret 2020",
      },
      {
        no: 9,
        nama: "avansa",
        kategori: "keluarga",
        harga: "Rp. 150000000",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        create: "29 Maret 2020",
        update: "29 Maret 2020",
      },
      {
        no: 10,
        nama: "esemka",
        kategori: "keluarga",
        harga: "Rp. 2500000",
        start: "20 Maret 2020",
        finish: "29 Maret 2020",
        create: "29 Maret 2020",
        update: "29 Maret 2020",
      },
    ];

    res.render("pages/home", {
      layout: "layout/index",
      title: "Home page",
      titlesubnav: "Dashboard",
      subnav: "Dashboard",
      item,
      items,
    });
  });

  app.get("/cars", (req, res) => {
    res.render("pages/cars", {
      layout: "layout/index",
      title: "Home page",
      titlesubnav: "Cars",
      subnav: "List cars",
    });
  });

  app.get("/cars/add", (req, res) => {
    res.render("pages/cars_add", {
      layout: "layout/index",
      title: "Home page",
      titlesubnav: "Cars",
      subnav: "List cars",
    });
  });

  app.get("/login", (req, res) => {
    res.render("pages/login", {
      layout: false,
    });
  });
};
