
import ForthStep from "Root/components/Form/stepForth";

const index = () => {
  return (
    <div>
      <ForthStep />
    </div>
  )
}

export const getStaticProps = () => {
  const title: string = 'Form forth step';
  const desc: string = 'Form forth step';
  const keywords: string = 'Form forth step';
  return {
    props: {
      title,
      desc,
      keywords,
    },
  };
};

export default index;