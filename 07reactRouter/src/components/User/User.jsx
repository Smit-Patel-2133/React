import {useParams} from "react-router-dom";


const User = () => {
    const {userid}=useParams()
    return (
        <div className='bg-gray-600 text-white text-3xl text-center'>
            User:{userid}
        </div>
    );
};

export default User;