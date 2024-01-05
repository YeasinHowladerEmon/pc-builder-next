const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://AllAssignmentData:tsh0qnXtNMWzYEh2@cluster0.3xzol.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run(req, res) {
    try {
        await client.connect();
        const productsCollection = client.db("todo-manegement").collection("products")
        if (req.method === "GET") {
            if (req.query.id) {
                console.log("p", req.query.id);
                const product = await productsCollection.findOne({ _id: new ObjectId(req.query.id) })
                 res.send({ message: "success", status: 200, data: product })
            }
            else if (req.query.category) {
                const category = { category: req.query.category };
                const categories = (await productsCollection.find(category).toArray());
                const lengthDoc = await productsCollection.countDocuments(category)
                res.send({ message: "success", status: 200, length: lengthDoc, data: categories })
            }
            else {
                const products = await productsCollection.aggregate([{ $sample: { size: 20 } }]).toArray();
                const lengthDoc = await productsCollection.countDocuments()
                res.send({ message: "success", status: 200, length: lengthDoc, data: products })
            }

        }
    } finally {

    }
}

export default run;