import { site } from '@/config/site';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      {site.name} · {site.tagline} · Instagram:{' '}
      <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
        {site.instagram.handle}
      </a>
    </footer>
  );
}
