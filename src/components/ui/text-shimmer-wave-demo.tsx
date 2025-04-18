
import { TextShimmerWave } from '@/components/ui/text-shimmer-wave';

export function TextShimmerWaveDemo() {
  return (
    <TextShimmerWave
      className='[--base-color:#a78bfa] [--base-gradient-color:#e879f9]'
      duration={1.5}
      spread={1}
      zDistance={10}
      scaleDistance={1.1}
      rotateYDistance={20}
    >
      Música neurológica
    </TextShimmerWave>
  );
}
