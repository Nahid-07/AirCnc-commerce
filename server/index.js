const express = require("express");
const cors = require("cors");
jwt = require("jsonwebtoken");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

// Database Connection

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.ugpmzsn.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const homesCollection = client.db("aircncdb").collection("homes");
    const usersCollection = client.db("aircncdb").collection("users");
    const bookingsCollection = client.db("aircncdb").collection("bookings");

    app.put("/user/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updateDoc = {
        $set: user,
      };
      const result = await usersCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log(result);

      const token = jwt.sign(user, process.env.TOKEN, { expiresIn: "1d" });
      console.log(token);
      res.send({ result, token });
    });

    // sending booking data

    app.post("/bookings", async (req, res) => {
      const bookingData = req.body;
      const result = await bookingsCollection.insertOne(bookingData);
      console.log(result);
      res.send(result);
    });

    // Get all the bookings

    app.get('/bookings', async(req,res)=>{
      const query = {};
      const email = req.query.email;
      if(email){
        query = {
          guestEmail : email
        }
      };
      const bookings = await bookingsCollection.find(query).toArray();
      res.send(bookings);
    })

    console.log("Database Connected...");
  } finally {
  }
}

run().catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(port, () => {
  console.log(`Server is running...on ${port}`);
});
