import PropTypes from 'prop-types';
import Feature from '../feature/feature';

const Priceoption = ({option}) => {
    const {name,price,features} = option;
    return (
        <div className='text-center bg-slate-300 px-12 py-8 flex flex-col flex-grow rounded-lg'>
           <h2>
            <span className='text-5xl font-extrabold '>${price}</span>
            <span className='text-2xl font-bold'>/month</span>
           </h2>
          <h3 className='text-6xl my-12 font-medium'>{name}</h3> 
         <div className='flex-grow my-12'>
         {
            features.map( (feature, i) => <Feature key={i} feature={feature}></Feature>)
          }
         </div>
          <button className='bg-blue-600 text-center text-white font-bold w-full py-3 rounded-lg '>Buy Now</button>
        </div>
    );
};

Priceoption.propTypes = {
    option: PropTypes.object
}
export default Priceoption;