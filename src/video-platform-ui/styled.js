import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "header" "content";
  grid-template-rows: auto 1fr;
  grid-template-columns: 100%;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 1400px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  align-items: center;
  color: #b3b3b3;
  font-size: 15px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  grid-area: header;
  width: 100%;
  height: 100px;
  flex-direction: row;
  background-color: #fff;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 600;
  border-bottom: 1px solid #efefef;
  padding: 0 30px;
  box-sizing: border-box;
  flex: 0 0 auto;
`;
export const MainContainer = styled.div`
  display: grid;
  grid-area: content;
  grid-template-columns: 300px 1fr;
  grid-template-areas: "menu videos";
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fafafa;
`;
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  .close {
    cursor: pointer;
    font-size: 24px;
  }
  .Bars {
    margin-right: 20px;
    font-size: 24px;
    cursor: pointer;
  }
  .IconSearch {
    font-size: 30px;
  }
  input {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: #7c7c7c;
  }
`;
export const Logo = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  width: 34px;
  height: 34px;
  border: 5px solid #f13a2f;
  border-radius: 50%;
  margin-right: 10px;
`;
export const HeaderMenu = styled.div`
  display: flex;
`;
export const MenuItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
  color: ${({ active }) => (active ? "#f13a2f" : "#7c7c7c")};
  position: relative;
  &.notify {
    :before {
      content: "";
      position: absolute;
      background-color: #f13a2f;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      right: -6px;
      top: 0;
    }
  }
  :last-of-type {
    margin-right: 0;
  }
`;
export const HeaderSettings = styled.div`
  display: flex;
  align-items: center;
  .Bell {
    font-size: 22px;
    margin-right: 10px;
    cursor: pointer;
  }
  .AngleDown {
    font-size: 22px;
    cursor: pointer;
  }
`;
export const ButtonUpload = styled.button`
  display: flex;
  background-color: transparent;
  align-items: center;
  border: 2px solid #efefef;
  border-radius: 25px;
  color: #b3b3b3;
  padding: 8px 16px;
  font-family: "Manrope", sans-serif;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  outline: none;
  margin-right: 18px;
  .Upload {
    font-size: 20px;
    margin-right: 10px;
  }
`;
export const UserLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${({ user }) => `url(${user})`};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: cover;
  margin-right: 10px;
  cursor: pointer;
`;
export const LeftSideContainer = styled.div`
  display: flex;
  grid-area: menu;
  width: 100%;
  flex-direction: column;
  overflow-y: scroll;
  flex: 0 0 auto;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #efefef;
  padding: 20px;
`;
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  :last-child {
    margin-bottom: 0;
  }
`;
export const SubscriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: 1px solid #efefef;
`;
export const Icon = styled.div`
  display: flex;
  box-sizing: border-box;
  background-image: ${({ icon }) => `url(${icon})`};
  background-size: cover;
  width: 20px;
  height: 20px;
  margin-right: 25px;
`;
export const MenuName = styled.div`
  display: flex;
  font-weight: 500;
  color: #808080;
  font-size: 15px;
`;
export const ButtonShowMore = styled.div`
  display: flex;
  width: 50%;
  background-color: transparent;
  align-items: center;
  border: 2px solid #efefef;
  border-radius: 25px;
  color: #b3b3b3;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
`;
export const SubscriptionsUserContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
  :last-child {
    margin-bottom: 0;
  }
`;
export const UserIcon = styled.div`
  display: flex;
  box-sizing: border-box;
  background-image: ${({ userIcon }) => `url(${userIcon})`};
  background-size: cover;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 16px;
`;
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const PopularChannel = styled.div`
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
  :last-child {
    margin-bottom: 0;
  }
`;
export const ChannelIcon = styled.div`
  display: flex;
  box-sizing: border-box;
  background-image: ${({ channelIcon }) => `url(${channelIcon})`};
  background-size: cover;
  width: 20px;
  height: 20px;
  margin-right: 25px;
`;
export const ChannelName = styled.div`
  display: flex;
  font-weight: 500;
  color: #808080;
  font-size: 15px;
`;
export const MediaContainer = styled.div`
  display: flex;
  grid-area: videos;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  width: 100%;
  height: auto;
`;
export const ProfileContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 300px;
`;
export const MainAvatar = styled.div`
  display: flex;
  background-image: ${({ avatar }) => `url(${avatar})`};
  background-size: cover;
  background-position: center;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
export const ProfileInfo = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  box-sizing: border-box;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
`;
export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  color: #fff;
  padding: 26px 16px;
`;
export const InfoIcon = styled.div`
  display: flex;
  background-image: ${({ infoIcon }) => `url(${infoIcon})`};
  background-size: cover;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
export const InfoName = styled.div`
  display: flex;
  font-size: 20px;
`;
export const Trends = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 45px;
`;
export const ProfileMenu = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  padding: 10px 25px;
  box-shadow: -1px 3px 8px -1px rgb(0 0 0 / 10%);
`;
export const ProfileAvatar = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #808080;
    font-weight: 600;
  }
  img {
    border-radius: 50%;
    width: 42px;
    height: 42px;
    -o-object-fit: cover;
    object-fit: cover;
    margin-right: 15px;
  }
`;
export const MenuItems = styled.div`
  display: flex;
`;
export const Link = styled.div`
  padding: 20px;
  cursor: pointer;
  font-weight: 700;
  color: ${({ active }) => (active ? "#f13a2f" : "#808080")};
  border-bottom: ${({ active }) => (active ? "3px solid #f13a2f" : "none")};
  :hover {
    color: #f13a2f;
    border-bottom: 3px solid #f13a2f;
  }
`;
export const FollowButtons = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  display: flex;
  &.follow {
    border: 2px solid #efefef;
    border-radius: 25px 0 0 25px;
    color: #b3b3b3;
    padding: 8px 16px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    background-color: transparent;
  }
  &.option {
    border: 2px solid #efefef;
    border-radius: 0 25px 25px 0;
    color: #b3b3b3;
    padding: 8px 16px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    background-color: transparent;
    margin-left: -2px;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 15px;
    font-weight: 600;
  }
  svg {
    margin-right: 10px;
    font-size: 18px;
  }
`;
export const ButtonPlay = styled.div`
  display: flex;
  align-items: center;
  background-color: #f13a2f;
  color: #fff;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  svg {
    margin-right: 5px;
  }
`;
export const PlayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: -1px 3px 8px -1px rgb(0 0 0 / 10%);
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
`;
export const VideoTitle = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  color: #808080;
  border-radius: 0 0 4px 4px;
  font-size: 16px;
  padding: 10px;
`;
export const View = styled.div`
  display: flex;
  padding: 10px;
  box-sizing: border-box;
`;
export const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid #efefef;
  cursor: pointer;
  font-weight: 600;
  p {
    padding: 0;
  }
  svg {
    margin-right: 10px;
    color: #c9c9c9;
    font-size: 20px;
  }
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  width: 100%;
  border-bottom: 1px solid #efefef;
`;
export const FooterRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
  :last-child {
    margin-bottom: 0;
  }
`;
export const ButtonFooter = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
  border: 2px solid #efefef;
  border-radius: 25px;
  color: #b3b3b3;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
`;

export const FooterLinks = styled.div`
  display: flex;
  a {
    outline: none;
    border: none;
    text-decoration: none;
    margin-right: 15px;
    :last-child {
      margin-right: 0;
    }
  }
`;
export const FooterLast = styled.div`
  display: flex;
  padding: 30px 0;
  align-items: center;
  justify-content: space-between;
`;
export const FooterYear = styled.div`
  display: flex;
`;
export const Policy = styled.div`
  display: flex;
`;
export const SocialMedia = styled.div`
  display: flex;
  svg {
    border: 1px solid #efefef;
    border-radius: 50%;
    color: #b3b3b3;
    padding: 5px;
    margin-right: 12px;
    cursor: pointer;
  }
`;
