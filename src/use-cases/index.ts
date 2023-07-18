import makeGreet from './greet'
import userUseCases from './users';


const greet = makeGreet()
const useCases = Object.freeze({
    greet,
    userUseCases,
});
export default useCases;