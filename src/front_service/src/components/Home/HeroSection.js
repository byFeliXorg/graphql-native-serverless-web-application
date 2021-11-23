import React from 'react';
import Link from 'next/link';

export default function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        class={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div class='container'>
          <div
            class='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div class='col'>
              <div class='home__hero-text-wrapper'>
                <div class='top-line'>{topLine}</div>
                <h1 class={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  class={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div class='col'>
              <div class='home__hero-img-wrapper'>
                <img src={img} alt={alt} class='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}