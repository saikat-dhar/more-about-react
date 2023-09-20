import Priceoption from "../priceoption/Priceoption";


const Priceoptions = () => {
    
    const priceoptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 30.00,
          "features": [
            "Access to all gym facilities",
            "Free weights and cardio equipment",
            "Basic fitness classes"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": 50.00,
          "features": [
            "Access to all gym facilities",
            "Free weights and cardio equipment",
            "All fitness classes",
            "Personal training session (1/month)"
          ]
        },
        {
          "id": 3,
          "name": "Family Membership",
          "price": 80.00,
          "features": [
            "Access to all gym facilities",
            "Free weights and cardio equipment",
            "All fitness classes",
            "Personal training session (1/month) for each"
          ]
        },
        
        
      ]
      

    return (
        <div>
         <div className="grid md:grid-cols-3 gap-6 m-12">
            {
                priceoptions.map( option => <Priceoption key={option.id} option={option}></Priceoption>)
            }
         </div>
        </div>
    );
};

export default Priceoptions;