import Movie from "../../models/Movie"
import User from '../../models/User'

const Query ={
    async getMovies() {
        const Movies = await Movie.find();
        return Movies;
    },
    async getMovie( _,{ id }){
        const FindMovie = await Movie.findById(id);
        return FindMovie
    },
    async login( _, { email, password } ) {
        const verifyUser = await User.find( { email: email, password: password } );
        console.log(verifyUser)
        return verifyUser
    },
    async search( _,{ filter } ) {
        const Movies = await Movie.find({ 'title': { $regex: '^' + filter, $options: 'i' } }).exec()
        return Movies
      }
}

export default Query