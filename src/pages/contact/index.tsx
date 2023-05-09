
import Contact from 'Components/contact/Contact'

const index = () => {
  return (
    <div>
      <Contact />
    </div>
  )
}

export const getStaticProps = () => {
  console.log("vijay")
  const title: string = 'Contact Us';
  const desc: string = 'Contact Us';
  const keywords: string = 'contact us';
  return {
    props: {
      title,
      desc,
      keywords,
    },
  };
};

export default index