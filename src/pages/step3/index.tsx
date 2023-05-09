
import ThirdStep from "Root/components/Form/stepThree";

const index = () => {
  return (
    <div>
      <ThirdStep />
    </div>
  )
}

export const getStaticProps = () => {
  const title: string = 'Form third step';
  const desc: string = 'Form third step';
  const keywords: string = 'Form third step';
  return {
    props: {
      title,
      desc,
      keywords,
    },
  };
};

export default index;