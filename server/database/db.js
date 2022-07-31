import mongoose from "mongoose";

const Connection = (username = 'itsamanop', password = 'ownspace') => {
    const URL = `mongodb://${username}:${password}@ac-wne2znw-shard-00-00.6fjwraz.mongodb.net:27017,ac-wne2znw-shard-00-01.6fjwraz.mongodb.net:27017,ac-wne2znw-shard-00-02.6fjwraz.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-ko7eta-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the database", error);
    }

}

export default Connection;