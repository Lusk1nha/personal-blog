import { UserAvatar } from "./user-avatar";
import { getUserAvatar } from "./get-user-avatar.fetch";

export async function GetUserAvatar() {
  const userphoto = await getUserAvatar();
  return <UserAvatar name="Paulina" imageUrl={userphoto} />;
}
