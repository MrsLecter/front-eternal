export const cloudImageLoader = ({
  src,
  width,
  height,
}: {
  src: string;
  width: string;
  height: string;
}) => {
  return `${src}?w=${width}&h=${height}&q=100`;
};
