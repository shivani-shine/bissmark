
import Blog from 'Components/blog/blog'

const index = () => {
  return (
    <div>
      <Blog />
    </div>
  )
}

export const getStaticProps = () => {
  const title: string = 'Spineor Blog';
  const desc: string = 'Spineor Blog';
  const keywords: string = 'spineor blog';
  return {
    props: {
      title,
      desc,
      keywords,
    },
  };
};

export default index