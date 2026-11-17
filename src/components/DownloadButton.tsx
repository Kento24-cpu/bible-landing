import { useLatestRelease } from '../lib/useLatestRelease';
import { DownloadIcon } from './Icons';

type Props = {
  label: string;
  className?: string;
  showIcon?: boolean;
  ariaLabel?: string;
};

export default function DownloadButton({
  label,
  className = 'btn btn-primary',
  showIcon = true,
  ariaLabel,
}: Props) {
  const { url } = useLatestRelease();

  return (
    <a className={className} href={url} aria-label={ariaLabel}>
      {showIcon ? <DownloadIcon /> : null}
      {label}
    </a>
  );
}
