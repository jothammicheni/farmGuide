import React from 'react'
import '../styles/cattle.css'
import Cow from '../assets/cattle.jpg'
import { Container,Row ,Col} from 'react-bootstrap'
const Cattle = () => {
  return (
    <Container className='mt-5  cattle-container'>
        <Container>
         <h3>Dairy Cow Farming Business Guide For Beginners</h3>
             <Row className='content-holder'>
                 <p className=' content'>Dairy cow farming means ‘raising highly milk productive cows commercially for milk production purpose’. It’s absolutely a part of agriculture or animal husbandry, enterprise for long term milk production from cows.

                   Commercial dairy cow farming business is not a new idea. People are raising dairy cows for milk production from the ancient time. Dairy cow farming business is still a profitable business venture throughout the world.

                   There are numerous new and established dairy cow farms available around the world. Here we are describing more about the advantages of dairy cow farming business, and the necessary steps for starting this profitable business.
                   </p>
             </Row>
             <Row className='content-holder mt-5 '>
 <Col className=' cowImg'>
 <img src ={Cow} className = "mx-auto d-block mb-3 img-fluid" alt = "tech image" width = "500px" height = "500px"/>  
</Col>
 </Row>
             <Row className='content-header  mt-5'>
                <h3>
                Advantages of Commercial Dairy Cow Farming Business
                 </h3>
             </Row>
             <Row className='content-holder'>
                 <p className=' content'>
                

1. Profitability: Commercial dairy farming can be a highly profitable venture when managed efficiently. Dairy products such as milk, cheese, butter, and yogurt have a consistent demand and can provide a steady income stream.
</p>
<p className=' content'>
2. Stable Market Demand: Dairy products have a constant demand in the market. Milk is a staple food item consumed by a large population worldwide, ensuring a stable market for dairy farmers.
</p>
<p className=' content'>
3. Long-Term Income: Dairy cows have a relatively longer productive life compared to other livestock. With proper care and management, dairy cows can provide milk for several years, allowing farmers to generate a long-term income from their investment.
</p>
<p className=' content'>
4. Diverse Product Range: Dairy farming offers the opportunity to diversify product offerings. Besides selling raw milk, farmers can process milk into various value-added products such as cheese, yogurt, ice cream, and butter. This diversification can increase profitability and cater to different market segments.
</p>
<p className=' content'>
5. Employment Generation: Commercial dairy farming requires a skilled workforce to handle various tasks such as feeding, milking, breeding, and healthcare. Establishing a dairy farm can create job opportunities, contributing to local employment and economic development.
</p>
<p className=' content'>
6. Utilization of By-Products: Dairy farming generates by-products such as cow dung and urine, which can be utilized for organic manure production or biogas generation. These by-products provide additional sources of revenue or cost savings for the farm.
</p>
<p className=' content'>

7. Contribution to Food Security: Dairy farming plays a vital role in food security by providing a consistent supply of milk and dairy products. It contributes to meeting the nutritional needs of the population, especially in terms of protein and calcium intake.
</p>
<p className=' content'>
However, it's important to note that successful commercial dairy farming requires proper planning, management, and adherence to industry standards. Knowledge of animal husbandry, nutrition, disease control, and marketing strategies is crucial for maximizing the benefits of this business.
 </p>
            
 </Row>
 <Row className='content-header  mt-5'>
<h3>
How to Start Dairy Cow Farming Business?
</h3>
 </Row>
 <Row className='content-holder mt-5'>
  <p className='content'>Starting dairy cow farming business is not so easy. You have to go through some step by step process for making high profits from this business.

       Here we are shortly describing the main steps for starting a profitable dairy cow farming business.
  </p>
 </Row>
 <Row className='content-holder mt-5 '>
 <Col className=' cowImg'>
 <img src ={Cow} className = "mx-auto d-block mb-3 img-fluid" alt = "tech image" width = "500px" height = "500px"/>  
</Col>
 </Row>

        </Container>

    </Container>

  )
}

export default Cattle
