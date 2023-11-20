import {FC} from "react";

type TProjectCardProps = {
  project: TProjectCard;
};

export const ProjectCard: FC = () => {
  return (
    <div className={`product-card`}>
      <div className={`product-card_image`}>
        IMAGE
      </div>
      <div className={`product-card_text`}>
        <p className={`product-card_text_title`}></p>
        <p className={`product-card_text_about`}></p>
        <p className={`product-card_text_technologies`}></p>
      </div>
    </div>
  );
};
