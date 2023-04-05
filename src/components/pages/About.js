import profile from '../images/profile.png'

const styles = {
  img: {
    borderRadius: '45%',
    width: '180px',
    height: '180px',
    display: 'block',
    margin: '0 auto'
  },

  btnFloatingImg: {
    width: '100%',
    height: '100%',
  }
}

export default function About() {
  return (
    <div>
      <h1>Tom Houf</h1>
      <img alt="profile" src={profile} style={styles.img} />
      <p>
        Tom Houf is a graduate of the Case Western Reserve full-stack web development bootcamp.
      </p>
      <p>
        As an entry-level web developer, I have experience in handling HTML, CSS, and JavaScript, and have worked with both MySQL using Sequelize and MongoDB using Mongoose for database management. I also have a strong understanding of PWA and React. I am excited to continue learning and growing as a web developer and am eager to take on new challenges.
      </p>
    </div>
  );
}
