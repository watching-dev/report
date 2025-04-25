import * as S from "./image.styles";
import { IIamgeAvatar, IThumbNail } from "./image.types";

export const ProfileAvatar = ({ avatarUrl }: IIamgeAvatar) => {
  return <S.AvatarImage src={avatarUrl} />;
};

export const ThumbNail = ({ imageUrl }: IThumbNail) => {
  return <S.ThumbNailImage src={imageUrl} />;
};
