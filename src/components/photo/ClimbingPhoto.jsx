import climbingJpg from '../../assets/climbing.jpg';
import climbingWebp from '../../assets/climbing.webp';
import './climbing-photo.css';

function ClimbingPhoto() {
  return (
    <div className="climbing-photo">
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
      <div className="climbing-photo__tint" aria-hidden="true" />
    </div>
  );
}

export default ClimbingPhoto;
