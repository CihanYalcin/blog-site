const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const port = 3000;

const homestartingcontent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis repellendus impedit fugiat labore. Blanditiis nulla ducimus animi ullam atque! Amet magni provident eveniet, accusantium placeat mollitia consequuntur quam iste, debitis praesentium odio architecto cumque ex modi. Eaque dignissimos, doloribus similique nostrum rem laudantium illum facere quod consectetur cum labore fugiat quis enim doloremque distinctio ipsa exercitationem provident explicabo magnam vitae, voluptatem corporis. Impedit provident qui tempore soluta temporibus totam facilis et ad ullam quas vel natus rem culpa numquam, omnis asperiores voluptas quaerat alias pariatur porro odit voluptatum dolorem atque quibusdam! Eligendi deserunt voluptatum ipsum facilis ut laborum quod accusamus obcaecati ipsam adipisci dolorum, blanditiis explicabo fugit in porro fugiat iure, maiores esse. Aliquam tempore pariatur impedit eos et ea blanditiis totam corrupti maxime quidem, animi quae eum assumenda explicabo in! Mollitia, corporis laborum eaque natus quam accusamus, maxime culpa quas nam eveniet error optio consequatur sit aliquam corrupti et iusto, quaerat unde rem nemo delectus voluptatem perspiciatis? Molestiae, voluptatum nostrum ullam, soluta quis asperiores quisquam, quod iure ea officia id dolorem assumenda? Laboriosam itaque reprehenderit facilis! Repellendus quas amet aliquid iure, itaque sit animi dolorem. Ea quod rerum quaerat libero odit cum. Enim ipsa tempore asperiores eius quas quia voluptas tempora minus quaerat, labore qui consectetur et dolor quasi aliquid praesentium eos obcaecati minima, assumenda eum! Laborum, voluptatum! Quaerat neque dicta ducimus at modi voluptas deleniti vero velit, esse dolores quis accusantium, pariatur minus sequi natus praesentium corrupti! Tempore iusto, accusantium excepturi quo possimus, a impedit atque consequuntur explicabo modi quaerat blanditiis quisquam placeat repellat corporis, veniam quod commodi. Nobis praesentium nam debitis. Amet quaerat rerum, eligendi error aperiam adipisci quod quis, dicta obcaecati quam quisquam hic cumque debitis architecto distinctio animi libero voluptates fugiat nam veniam impedit unde tenetur odio molestias! Consequuntur itaque facilis rem fuga sed.";
const aboutContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis repellendus impedit fugiat labore. Blanditiis nulla ducimus animi ullam atque! Amet magni provident eveniet, accusantium placeat mollitia consequuntur quam iste, debitis praesentium odio architecto cumque ex modi. Eaque dignissimos, doloribus similique nostrum rem laudantium illum facere quod consectetur cum labore fugiat quis enim doloremque distinctio ipsa exercitationem provident explicabo magnam vitae, voluptatem corporis. Impedit provident qui tempore soluta temporibus totam facilis et ad ullam quas vel natus rem culpa numquam, omnis asperiores voluptas quaerat alias pariatur porro odit voluptatum dolorem atque quibusdam! Eligendi deserunt voluptatum ipsum facilis ut laborum quod accusamus obcaecati ipsam adipisci dolorum, blanditiis explicabo fugit in porro fugiat iure, maiores esse. Aliquam tempore pariatur impedit eos et ea blanditiis totam corrupti maxime quidem, animi quae eum assumenda explicabo in! Mollitia, corporis laborum eaque natus quam accusamus, maxime culpa quas nam eveniet error optio consequatur sit aliquam corrupti et iusto, quaerat unde rem nemo delectus voluptatem perspiciatis? Molestiae, voluptatum nostrum ullam, soluta quis asperiores quisquam, quod iure ea officia id dolorem assumenda? Laboriosam itaque reprehenderit facilis! Repellendus quas amet aliquid iure, itaque sit animi dolorem. Ea quod rerum quaerat libero odit cum. Enim ipsa tempore asperiores eius quas quia voluptas tempora minus quaerat, labore qui consectetur et dolor quasi aliquid praesentium eos obcaecati minima, assumenda eum! Laborum, voluptatum! Quaerat neque dicta ducimus at modi voluptas deleniti vero velit, esse dolores quis accusantium, pariatur minus sequi natus praesentium corrupti! Tempore iusto, accusantium excepturi quo possimus, a impedit atque consequuntur explicabo modi quaerat blanditiis quisquam placeat repellat corporis, veniam quod commodi. Nobis praesentium nam debitis. Amet quaerat rerum, eligendi error aperiam adipisci quod quis, dicta obcaecati quam quisquam hic cumque debitis architecto distinctio animi libero voluptates fugiat nam veniam impedit unde tenetur odio molestias! Consequuntur itaque facilis rem fuga sed.";
const contactContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis repellendus impedit fugiat labore. Blanditiis nulla ducimus animi ullam atque! Amet magni provident eveniet, accusantium placeat mollitia consequuntur quam iste, debitis praesentium odio architecto cumque ex modi. Eaque dignissimos, doloribus similique nostrum rem laudantium illum facere quod consectetur cum labore fugiat quis enim doloremque distinctio ipsa exercitationem provident explicabo magnam vitae, voluptatem corporis. Impedit provident qui tempore soluta temporibus totam facilis et ad ullam quas vel natus rem culpa numquam, omnis asperiores voluptas quaerat alias pariatur porro odit voluptatum dolorem atque quibusdam! Eligendi deserunt voluptatum ipsum facilis ut laborum quod accusamus obcaecati ipsam adipisci dolorum, blanditiis explicabo fugit in porro fugiat iure, maiores esse. Aliquam tempore pariatur impedit eos et ea blanditiis totam corrupti maxime quidem, animi quae eum assumenda explicabo in! Mollitia, corporis laborum eaque natus quam accusamus, maxime culpa quas nam eveniet error optio consequatur sit aliquam corrupti et iusto, quaerat unde rem nemo delectus voluptatem perspiciatis? Molestiae, voluptatum nostrum ullam, soluta quis asperiores quisquam, quod iure ea officia id dolorem assumenda? Laboriosam itaque reprehenderit facilis! Repellendus quas amet aliquid iure, itaque sit animi dolorem. Ea quod rerum quaerat libero odit cum. Enim ipsa tempore asperiores eius quas quia voluptas tempora minus quaerat, labore qui consectetur et dolor quasi aliquid praesentium eos obcaecati minima, assumenda eum! Laborum, voluptatum! Quaerat neque dicta ducimus at modi voluptas deleniti vero velit, esse dolores quis accusantium, pariatur minus sequi natus praesentium corrupti! Tempore iusto, accusantium excepturi quo possimus, a impedit atque consequuntur explicabo modi quaerat blanditiis quisquam placeat repellat corporis, veniam quod commodi. Nobis praesentium nam debitis. Amet quaerat rerum, eligendi error aperiam adipisci quod quis, dicta obcaecati quam quisquam hic cumque debitis architecto distinctio animi libero voluptates fugiat nam veniam impedit unde tenetur odio molestias! Consequuntur itaque facilis rem fuga sed.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("home");

});
app.get("/home", function (req, res) {
    res.render("home", { home: homestartingcontent });
});
app.get("/about", function (req, res) {
    res.render("about", { about: aboutContent });
});
app.get("/contact", function (req, res) {
    res.render("contact", { contact: contactContent });

});
app.get("/compose", function (req, res) {
    res.render("compose");
});

app.post("/compose", function (req, res) {
    const title = req.body.title;
    const post = req.body.post;
    console.log(post);
});
app.listen(port, function () {
    console.log("Port 3000 now listening...")
});
