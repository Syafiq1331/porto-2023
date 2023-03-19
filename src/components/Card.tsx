
interface CardProps {
  image: string;
  link: string;
  title: string;
  desc: string;
  tech_1: string;
  tech_2: string;
  tech_3: string;
}

const Card = ({ image, link, title, desc, tech_1, tech_2, tech_3 }: CardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2 className="card-title">
            {title}
          </h2>
        </a>
        <p>{desc}</p>
        <div className="card-actions justify-end mt-3">
          <div className="badge badge-outline">{tech_1}</div>
          <div className="badge badge-outline">{tech_2}</div>
          <div className="badge badge-outline">{tech_3}</div>

        </div>
      </div>
    </div>
  )
}

export default Card