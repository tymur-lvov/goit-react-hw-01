import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.userCard}>
      <div>
        <img src={image} alt="User avatar" className={css.userCardImage} />
        <p className={css.userCardTitle}>{name}</p>
        <p className={css.userCardSubTitle}>@{tag}</p>
        <p className={css.userCardSubTitle}>{location}</p>
      </div>
      <ul className={css.userCardList}>
        <li className={css.userCardItem}>
          <span className={css.userCardItemLabel}>Followers</span>
          <span className={css.userCardItemValue}>{stats.followers}</span>
        </li>
        <li className={css.userCardItem}>
          <span className={css.userCardItemLabel}>Views</span>
          <span className={css.userCardItemValue}>{stats.views}</span>
        </li>
        <li className={css.userCardItem}>
          <span className={css.userCardItemLabel}>Likes</span>
          <span className={css.userCardItemValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
