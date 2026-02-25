import { motion } from 'framer-motion';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { designTokens } from '@/lib/design-tokens';

interface VideoCardContentProps {
  title: string;
  isHovered: boolean;
  isFeatured: boolean;
}

export default function VideoCardContent({
  title,
  isHovered,
  isFeatured,
}: VideoCardContentProps) {
  return (
    <div className='absolute bottom-6 left-6 right-6'>
      <motion.div
        animate={{
          opacity: isHovered || isFeatured ? 1 : 0.7,
        }}
        transition={{ duration: 0.3 }}
      >
        <Text
          variant='h3'
          weight='bold'
          as='h3'
          className={designTokens.spacing.margin.md}
        >
          {title}
        </Text>
      </motion.div>

      <motion.div
        animate={{
          opacity: isHovered || isFeatured ? 1 : 0,
          y: isHovered || isFeatured ? 0 : 10,
        }}
        transition={{ duration: 0.3 }}
      >
        <Button variant='outline' size='lg'>
          More
        </Button>
      </motion.div>
    </div>
  );
}
