import mongoose from "mongoose"
import 'dotenv/config'

export const connect = async (dbname: string, remote: boolean): Promise<void> => {
  const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  };

  let uri: string;
  if (remote) {
    const {
      DB_USER,
      DB_PASS,
      DB_PATH,
      DB_NAME
    } = process.env // no secrets in code

    dbname = dbname || DB_NAME || 'test';
    uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_PATH}/${dbname}?retryWrites=true&w=majority`;
  } else {
    dbname = dbname || 'test';
    uri = `mongodb://localhost:27017/${dbname}`;
  }

  await mongoose.connect(uri, options);
};

export const close = async (): Promise<void> => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
};

export const clean = async (): Promise<void> => {
  for (const key in mongoose.connection.collections) {
    await mongoose.connection.collections[key].deleteMany({});
  }
}

