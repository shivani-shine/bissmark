
import SecondStep from "Root/components/Form/stepTwo";

const index = () => {
  return (
    <div>
      <SecondStep />
    </div>
  )
}

export const getStaticProps = () => {
  const title: string = 'Form second step';
  const desc: string = 'Form second step';
  const keywords: string = 'Form second step';
  return {
    props: {
      title,
      desc,
      keywords,
    },
  };
};

export default index;