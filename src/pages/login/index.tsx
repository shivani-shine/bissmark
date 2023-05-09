
import Login from "Root/components/loginsignup/Login";

const index = () => {
  return (
    <div>
      <Login />
    </div>
  )
}

export const getStaticProps = () => {
  const title: string = 'Login/Signup';
  const desc: string = 'Login/Signup';
  const keywords: string = 'Login/Signup';
  return {
    props: {
      title,
      desc,
      keywords,
    },
  };
};

export default index