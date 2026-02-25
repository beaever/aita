import Badge from '../atoms/Badge';
import Overlay from '../atoms/Overlay';

interface VideoCardOverlayProps {
  category: string;
}

export default function VideoCardOverlay({ category }: VideoCardOverlayProps) {
  return (
    <>
      <Overlay variant='gradient' />

      <div className='absolute top-6 right-6'>
        <Badge>{category}</Badge>
      </div>
    </>
  );
}
