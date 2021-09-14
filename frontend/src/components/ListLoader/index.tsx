import ContentLoader from 'react-content-loader';

const ListLoader = () => (
  <ContentLoader viewBox="0 0 700 120" height={120} width={900} speed={2}>
    <rect x="25" y="15" rx="5" ry="5" width="520" height="10" />
    <rect x="25" y="45" rx="5" ry="5" width="520" height="10" />
    <rect x="25" y="75" rx="5" ry="5" width="420" height="10" />
    <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
    <rect x="22" y="8" rx="0" ry="0" width="0" height="1" />
  </ContentLoader>
);

export default ListLoader;
