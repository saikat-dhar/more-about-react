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
            "Personal training session (1/month) for each family member"
          ]
        },
        {
          "id": 4,
          "name": "Student Membership",
          "price": 25.00,
          "features": [
            "Access to all gym facilities",
            "Free weights and cardio equipment",
            "Basic fitness classes",
            "Valid student ID required"
          ]
        },
        {
          "id": 5,
          "name": "Senior Membership",
          "price": 20.00,
          "features": [
            "Access to all gym facilities",
            "Free weights and cardio equipment",
            "Basic fitness classes",
            "Ages 60+"
          ]
        },
        {
          "id": 6,
          "name": "Corporate Membership",
          "price": 45.00,
          "features": [
            "Access to all gym facilities",
            "Free weights and cardio equipment",
            "All fitness classes",
            "Discounts for group sign-ups (10+)"
          ]
        }
      ]
      

    return (
        <div>
            {
                priceoptions.map( option => <Priceoption key={option.id} option={option}></Priceoption>)
            }
        </div>
    );
};

export default Priceoptions;