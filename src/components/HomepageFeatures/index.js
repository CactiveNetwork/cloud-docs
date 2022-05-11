import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Develop How You Want',
    Svg: require('@site/static/img/undraw_web_developer_re_h7ie.svg').default,
    description: (
      <>
        With the power of Cloud, you can build in whatever stack you want.
        Just write your code, and we'll take care of the rest.
      </>
    ),
  },
  {
    title: 'Updates Everywhere, Instantly',
    Svg: require('@site/static/img/undraw_in_progress_re_m1l6.svg').default,
    description: (
      <>
        With updates typically taking less than 5 seconds, you can always
        keep up with the latest features.
      </>
    ),
  },
  {
    title: 'Keeping You Happy',
    Svg: require('@site/static/img/undraw_feeling_proud_qne1.svg').default,
    description: (
      <>
        More than anything, Cloud is dedicated to making your experience
        as good as it can be. We're always looking to improve to support you.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
