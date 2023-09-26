// import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const FeaturedProperties = () => {
  // const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>

<section class="section services-section" id="services">
  <div class="container">
      
      <div class="row">
          
      
        
          
          
         
          
          
          <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                  <div class="icon">
                      <i >
                        <img src="https://a.travel-assets.com/egds/marks/brands/hotels/mod.svg" alt="" />
                        </i>
                  </div>
                  <div class="feature-content">
                      <h5>فتح المدخرات الفورية</h5>
                      <p class="p">وفر ما متوسطه 15% على آلاف الفنادق بأسعار الأعضاء</p>
                  </div>
              </div>
          </div>
          
          <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                  <div class="icon" style={{backgroundColor:"#7B1FA2"}}>
                      <i class="fa fa-calendar" style={{marginRight:"19px"}}></i>
                  </div>
                  <div class="feature-content">
                      <h5>إلغاء مجاني</h5>
                      <p class="p" >حجوزات مرنة في معظم الفنادق</p>
                  </div>
              </div>
          </div>

          <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                  <div class="icon">
                      <i >
                        <img src="https://a.travel-assets.com/egds/marks/loyalty_hotels.svg"></img>
                      </i>
                  </div>
                  <div class="feature-content">
                      <h5>كافئ نفسك على طريقتك</h5>
                      <p class="p">ابق حيث تريد، ومتى تريد، واحصل على المكافأة
</p>
                  </div>
              </div>
          </div>
          
          
      </div>
  </div>
</section>
  </div>
            
  );
};

export default FeaturedProperties;
