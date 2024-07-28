import { ThreeDots } from 'react-loader-spinner';
import s from './Loading.module.css';

const Loading = () => {
  return (
     <div className={s.container}>
         <ThreeDots
          visible={true}
          height={80}
          width={80}
          color="#14c57c"
          radius={9}
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
     </div>
  )
}

export default Loading