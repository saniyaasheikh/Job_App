import './index.css'
import { FaStar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";


const JobsCard = (props) => {

    const { jobDetaile } = props;
    
    return (
      
        <li className='job-card-cont'>
          <div className='jobs-card'>

           <div className="icon-title-rating-cont">
            <img src={jobDetaile.company_logo_url} alt='company logo'className='job-icon'/>
            <div className="title-rating-cont">
                <h2 className='jobs-title'>{jobDetaile.title}</h2>
                <span>
                <FaStar className='rating-icon'/>
                </span>
                <span className='rating'>
                {jobDetaile.rating}
                </span>
            </div>
           </div>

           <div className='location-emp-package-cont'>
            <div>
                <FaLocationDot/>
                <span className='emp-package-text'>{jobDetaile.location}</span>
                <FaBriefcase/>
                <span className='emp-package-text'>{jobDetaile.employment_type}</span>
            </div>
            <h2 className='package'>{jobDetaile.package_per_annum}</h2>
           </div>
           <hr/>

           <h6>Description</h6>
           <p>
            {jobDetaile.job_description}
           </p>

          </div>
        </li>
      
    )
}
export default JobsCard;