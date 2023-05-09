import FifthStep from "Root/components/Form/stepFifth";

const index = () => {
  return (
    <div>
      <FifthStep />
    </div>
  )
}

export const getStaticProps = () => {
  const title: string = 'Form fifth step';
  const desc: string = 'Form fifth step';
  const keywords: string = 'Form fifth step';
  return {
    props: {
      title,
      desc,
      keywords,
    },
  };
};

export default index;