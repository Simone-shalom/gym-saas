import {ClipLoader} from 'react-spinners'

const Loader = () => {
  return (
    <div className='h-[50vh] flex flex-col justify-center items-center'>
         <ClipLoader size={100} color='purple-500'/>
    </div>
  )
}

export default Loader