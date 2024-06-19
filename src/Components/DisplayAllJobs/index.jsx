import './index.css'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import JobsCard from '../JobsCard'

const DisplayAllJobs = () => {
    const [allvalues, setValues] = useState({
        allJobList: []
    })

    const token = Cookies.get("jwtToken")
    console.log(token)

    useEffect(() => {

        const fetchAllJobDetails = async () => {
            const url = "https://apis.ccbp.in/jobs";

            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await fetch(url, options);
            const fetchData = await response.json()
            console.log(fetchData);
            if (response.ok === true) {
                setValues({ ...allvalues, allJobList: fetchData.jobs });
            }

        }
        fetchAllJobDetails();
    }, [])
    return (
        <div className='all-jobs-cont'>
            <div className='w-75'>
            <input type='search' placeholder='Search' className='form-control '/>
          </div>

            <ul>
                {allvalues.allJobList.map(each =>
                    <JobsCard key={each.id} jobDetaile={each} />
                )}
            </ul>
        </div>
    )
}
export default DisplayAllJobs