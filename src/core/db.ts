import mongoose from 'mongoose'

const connect = () => {
  mongoose.connect("mongodb://localhost:27017/dtrc", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
}

export default connect