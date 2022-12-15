import Movie from "../../models/Movie"
import User from "../../models/User"
import bcrypt from "bcrypt"

const Mutation = {
    async createMovie(_, {input} ){
        return await Movie.create(input)
    },
    async createUser(_, {input} ){
        const hashed = await bcrypt.hash(input.password, 10);
        input.password = hashed;
        const user = await User.create(input);
        return user
    },
    async updateMovie(_,{input,id}){
        return await Movie.findByIdAndUpdate(id,input, {new:true})
    },
    async updateLikeMovie(_,{input,id}){
        return await Movie.findByIdAndUpdate(id,input, {new:true})
    },
    async removeMovie(_,{id}){
        await Movie.findByIdAndRemove(id)
        return await Movie.find()
    }
}

export default Mutation