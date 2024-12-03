import React, { memo } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';
import { type Navigation } from '@site/src/data/navigation/navigation';
import Tooltip from '../ShowcaseTooltip';

const NgLinkCard = memo(({ navigation }: { navigation: Navigation }) => (
  <li
    key={navigation.name}
    className={clsx(styles.NgLinkCard, 'padding-vert--sm padding-horiz--md')}
  >
    <Link href={navigation.href} className={clsx(styles.NgLinkCardHeader)}>
    <img
      src={
        typeof navigation.logo === 'string'
          ? navigation.logo
          : (navigation.logo as any)?.src?.src
      }
      alt={navigation.name}
      className={clsx(styles.NgLinkCardImage)}
    />
    <div className={styles.NgLinkCardBody}>
      <div className={clsx(styles.NgLinkCardHeader)}>
        <h4 className={styles.NgLinkCardTitle}>
          {/* <Link href={navigation.href} className={styles.NgLinkCardLink}> */}
            {navigation.name}
          {/* </Link> */}
        </h4>
      </div>
      <Tooltip
        key={navigation.name}
        text={navigation.desc}
        anchorEl="#__docusaurus"
        id={`tooltip-${navigation.name}`}
      >
        <p className={styles.NgLinkCardDesc}>{navigation.desc}</p>
      </Tooltip>
    </div>
    </Link>
  </li>
));

export default NgLinkCard;
