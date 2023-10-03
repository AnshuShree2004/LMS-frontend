import aboutMainPage from '../assets/Images/aboutMainImage.png'
import apj from '../assets/Images/apj.png'
import bill from '../assets/Images/billGates.png'
import nelson from '../assets/Images/nelsonMandela.png'
import steve from '../assets/Images/steveJobs.png'
import HomeLayout from "../layouts/HomeLayout"


function Aboutus() {

    return (
       <HomeLayout>
        <div className="flex flex-col text-white pl-20 pt-20">
            <div className="flex items-center gap-5 mx-10">

                <section className="w-1/2 space-y-10">
                    <h1 className="text-5xl text-yellow-500 font-semibold">
                        Affordable and quality education
                    </h1>

                    <p className="text-xl text-gray-200">
                        Our goal is to provide the affordable and quality education to the world. We are providing the platform for the aspiring teachers and students to share their skills, creativity and knowledge to each other to empower and conntribute in the growth and wellness of mankind.
                    </p>
                </section>
                <div className="w-1/2">
                    <img 
                        src={aboutMainPage}
                        className="drop-shadow-2xl"
                        alt="aboutMainPage"
                       
                    />
                </div>
            </div>

          { /* Carousel  */}
          <div className="carousel w-1/2 my-10 mx-auto">

  <div id="slide1" className="carousel-item relative w-full">
    <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
    <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
    <p className='text-xl text-gray-200'>Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.</p>
    <h3 className='text-2xl font-semibold'>APJ Abdul Kalam</h3>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    </div>
    
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
    <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
    <img src={bill} className="w-40 rounded-full border-2 border-gray-400" />
    <p className='text-xl text-gray-200'>The belief that the world is getting worse, that we cannot solve extreme poverty and disease, is not just mistaken. It is harmful.</p>
    <h3 className='text-2xl font-semibold'>Bill Gates</h3>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    </div>
    
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
    <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
    <img src={nelson} className="w-40 rounded-full border-2 border-gray-400" />
    <p className='text-xl text-gray-200'>Do not judge me by my successes, judge me by how many times I fell down and got back up again.</p>
    <h3 className='text-2xl font-semibold'>Nelson Mandela</h3>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    </div>
    
  </div> 

  <div id="slide4" className="carousel-item relative w-full">
    <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
    <img src={steve} className="w-40 rounded-full border-2 border-gray-400" />
    <p className='text-xl text-gray-200'>Your time is limited, so donot waste it living someone else is life.</p>
    <h3 className='text-2xl font-semibold'>Steve Jobs</h3>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    </div>
    
  </div> 

  
</div>
        
        </div>

       </HomeLayout>
    )
}

export default Aboutus