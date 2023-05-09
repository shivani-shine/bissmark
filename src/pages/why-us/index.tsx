
import AboutUs from 'Root/components/about/WhyUs'

const index = () => {
  return (
    <div>
      <AboutUs/>
    </div>
  )
}

export const getStaticProps = () => {
  const title: string = 'About BISSMARKS';
  const desc: string = 'About BISSMARKS';
  const keywords: string = 'about BISSMARKS, about BISSMARKS website';
  return {
    props: {
      title,
      desc,
      keywords,
    },
  };
};

export default index