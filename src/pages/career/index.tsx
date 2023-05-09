import Career from 'Components/career/Career'

const index = () => {
  return (
    <div>
        <Career/>
    </div>
  )
}

export const getStaticProps = () => {
  const title: string = 'Career BISSMARKS';
  const desc: string = 'Career BISSMARKS';
  const keywords: string = 'jobs BISSMARKS, career BISSMARKS';
  return {
    props: {
      title,
      desc,
      keywords,
    },
  };
};

export default index