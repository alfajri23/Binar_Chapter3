module.exports = (app) => {
  app.get("/", (req, res) => {
    res.render("pages/home", {
      layout: "layout/index",
      title: "Home page",
      titlesubnav: "Dashboard",
      subnav: "Dashboard",
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
