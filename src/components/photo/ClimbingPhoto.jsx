import { useEffect, useRef } from 'react';
import climbingJpg from '../../assets/climbing.jpg';
import climbingWebp from '../../assets/climbing.webp';
import './climbing-photo.css';

const MAX_SHIFT = 8; // px of photo drift, either axis
/*
  Must satisfy: containerWidth * (SCALE - 1) / 2 >= MAX_SHIFT at the
  narrowest layout (a 360px phone gives 10.8px), or the drift exposes the
  photo's edge. Keep in sync with .climbing-photo__parallax in the CSS.
*/
const SCALE = 1.06;

function ClimbingPhoto() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = parallaxRef.current;
    if (!el) return;

    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let raf = 0;

    /* Lerp toward the target, then let the loop die once settled so there is
       no idle per-frame work. */
    const tick = () => {
      raf = 0;
      pos.x += (target.x - pos.x) * 0.08;
      pos.y += (target.y - pos.y) * 0.08;
      el.style.transform = `scale(${SCALE}) translate3d(${pos.x.toFixed(2)}px, ${pos.y.toFixed(2)}px, 0)`;
      if (
        Math.abs(target.x - pos.x) > 0.05 ||
        Math.abs(target.y - pos.y) > 0.05
      ) {
        raf = requestAnimationFrame(tick);
      }
    };
    const nudge = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    /* Photo drifts opposite the cursor: classic depth cue. */
    const onPointer = (e) => {
      target.x = (0.5 - e.clientX / window.innerWidth) * 2 * MAX_SHIFT;
      target.y = (0.5 - e.clientY / window.innerHeight) * 2 * MAX_SHIFT;
      nudge();
    };

    /* First reading becomes the neutral pose so any resting grip is level. */
    let base = null;
    const clamp = (v) => Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, v));
    const onTilt = (e) => {
      if (e.beta == null || e.gamma == null) return;
      if (!base) base = { beta: e.beta, gamma: e.gamma };
      target.x = clamp((base.gamma - e.gamma) * 0.4);
      target.y = clamp((base.beta - e.beta) * 0.4);
      nudge();
    };

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    /* iOS gates deviceorientation behind a tap-triggered permission dialog;
       a system prompt isn't worth a decorative effect, so iOS sits out. */
    const iosGated =
      typeof window.DeviceOrientationEvent?.requestPermission === 'function';

    if (finePointer) {
      window.addEventListener('pointermove', onPointer, { passive: true });
    } else if (!iosGated) {
      window.addEventListener('deviceorientation', onTilt);
    }

    return () => {
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('deviceorientation', onTilt);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="climbing-photo">
      <div className="climbing-photo__parallax" ref={parallaxRef}>
        <picture>
          <source srcSet={climbingWebp} type="image/webp" />
          <img
            className="climbing-photo__img"
            src={climbingJpg}
            alt="Joshua Yan climbing an overhung bouldering wall"
            width={1080}
            height={1920}
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>
      <div className="climbing-photo__tint" aria-hidden="true" />
    </div>
  );
}

export default ClimbingPhoto;
