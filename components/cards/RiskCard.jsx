import { CardDiv } from "../../components";

const RiskItem = ({
  name,
  category,
  description,
  likelihood,
  impact,
  rating,
}) => (
  <div className="bg-card/50 backdrop-blur-xl rounded-md border-[0.1em] border-card p-2 md:p-3 space-y-2 card">
    <h4 className="break-words">{name}</h4>
    <p className="text-neon">
      <strong>Category:</strong> {category}
    </p>
    <p className="break-words">
      <strong className="">Description:</strong> {description}
    </p>
    <p className="text-gradient">
      Likelihood: {likelihood} | Impact: {impact} | Rating: {rating}/10
    </p>
  </div>
);

const RiskCard = ({ title, text, risks }) => (
  <div className="dark-gradient border-[0.1em] border-dark px-2 py-3 md:p-5 rounded-md space-y-4">
    <div className="h3 border-b-[0.05em] border-fg/50 pb-1 lg:pb-1 text-white">
      {title}
    </div>

    {text && (
      <p className=" bg-card/50 backdrop-blur-xl rounded-md border-[0.1em] border-card p-2 md:p-3 space-y-2">
        {text}
      </p>
    )}

    {risks && (
      <CardDiv className="space-y-3" animation="scale-up" scrub start="85%">
        {risks.map(
          ({ name, category, description, likelihood, impact, rating }, i) => (
            <RiskItem
              key={i}
              name={name}
              category={category}
              description={description}
              likelihood={likelihood}
              impact={impact}
              rating={rating}
            />
          )
        )}
      </CardDiv>
    )}
  </div>
);

export default RiskCard;
