import OurProcess from '../../components/ourProcess/OurProcess'
import  IProcess from "./ourProcess.type"
import { GetStaticProps } from 'next'

const index = () => {
  return (
    <div>
        <OurProcess/>
    </div>
  )
}

export const getStaticProps:GetStaticProps <IProcess>  = () => {
  const title = ' BISSMARKS Process';
  const desc = 'BISSMARKS Process';
  const keywords = 'BISSMARKS process';
  return {
    props: {
      title,
      desc,
      keywords,
    },
  };
};

export default index