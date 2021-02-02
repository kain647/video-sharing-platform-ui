import React, { useState } from "react";
import user from "../user-logo/user.jpg";
import inez from "../user-logo/photo-1.jpg";
import francis from "../user-logo/photo-2.jpg";
import arturo from "../user-logo/photo-3.jpg";
import anne from "../user-logo/photo-4.jpg";
import bessie from "../user-logo/photo-5.jpg";
import hanry from "../user-logo/photo-6.jpg";
import avatar from "../user-logo/photo-7.jpg";
import home from "../icons/home.svg";
import play from "../icons/play.svg";
import clock from "../icons/clock.svg";
import star from "../icons/star.svg";
import past from "../icons/past.svg";
import like from "../icons/like.svg";
import playlist from "../icons/playlist.svg";
import userSideBar from "../icons/user.svg";
import music from "../icons/musical-note.svg";
import baby from "../icons/baby-boy.svg";
import chess from "../icons/chess.svg";
import burger from "../icons/burger.svg";
import taxes from "../icons/taxes.svg";
import motor from "../icons/motorbike.svg";
import humor from "../icons/humor.svg";
import users from "../icons/friends.svg";
import eye from "../icons/eye.svg";
import flag from "../icons/flag.svg";
import youtube from "../icons/youtube.svg";
import { BsPlayFill } from "react-icons/bs";
import { SiYoutubetv } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { FiUploadCloud } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import { ImTwitter } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { ImFacebook } from "react-icons/im";
import { IoMdCloseCircle } from "react-icons/io";
import one from "../video/1523600112.mp4";
import two from "../video/1452099486.mp4";
import three from "../video/1500373768.mp4";
import fourth from "../video/1701029580.mp4";
import fifth from "../video/1436790865.mp4";
import sixth from "../video/1525418828.mp4";
import seventh from "../video/1075861701.mp4";
import eighth from "../video/1274386765.mp4";
import {
  Container,
  MenuContainer,
  Header,
  HeaderLeft,
  HeaderMenu,
  HeaderSettings,
  Logo,
  MenuItem,
  ButtonUpload,
  UserLogo,
  LeftSideContainer,
  Icon,
  MenuName,
  SubscriptionsUserContainer,
  UserIcon,
  SubscriptionsContainer,
  LeftContainer,
  ButtonShowMore,
  ChannelContainer,
  PopularChannel,
  ChannelIcon,
  ChannelName,
  MediaContainer,
  ProfileContainer,
  MainAvatar,
  MainContainer,
  ProfileInfo,
  InfoContainer,
  InfoIcon,
  InfoName,
  Trends,
  ProfileMenu,
  ProfileAvatar,
  MenuItems,
  Link,
  FollowButtons,
  Button,
  LinkContainer,
  ButtonPlay,
  PlayContainer,
  VideoContainer,
  VideoTitle,
  View,
  LoadMore,
  Footer,
  FooterRow,
  FooterLinks,
  ButtonFooter,
  FooterLast,
  FooterYear,
  Policy,
  SocialMedia
} from "./styled";

const Video = () => {
  const sideMenu = [
    {
      icon: home,
      menuName: "Home"
    },
    {
      icon: userSideBar,
      menuName: "My channel"
    },
    {
      icon: star,
      menuName: "Popular video"
    },
    {
      icon: play,
      menuName: "Subscriptions"
    },
    {
      icon: past,
      menuName: "History views"
    },
    {
      icon: clock,
      menuName: "Watch Later"
    },
    {
      icon: like,
      menuName: "Liked Videos"
    },
    {
      icon: playlist,
      menuName: "Playlists"
    }
  ];
  const subscription = [
    {
      userIcon: inez,
      userName: "Inez Gibson"
    },
    {
      userIcon: francis,
      userName: "Francis Wolfe"
    },
    {
      userIcon: arturo,
      userName: "Arturo Reyes"
    },
    {
      userIcon: anne,
      userName: "Anne Norton"
    },
    {
      userIcon: bessie,
      userName: "Bessie Casey"
    },
    {
      userIcon: hanry,
      userName: "Hanry Davidson"
    }
  ];
  const channel = [
    {
      channelIcon: music,
      channelName: "Music Channels"
    },
    {
      channelIcon: baby,
      channelName: "Baby Channel"
    },
    {
      channelIcon: chess,
      channelName: "Games Channel"
    },
    {
      channelIcon: burger,
      channelName: "Food Channels"
    },
    {
      channelIcon: taxes,
      channelName: "Economy Channels"
    },
    {
      channelIcon: motor,
      channelName: "Motorcycle Channels"
    },
    {
      channelIcon: humor,
      channelName: "Humor Channels"
    }
  ];
  const info = [
    {
      infoIcon: users,
      infoName: "1.702"
    },
    {
      infoIcon: eye,
      infoName: "1.503"
    },
    {
      infoIcon: flag,
      infoName: "Sep 21"
    },
    {
      infoIcon: youtube,
      infoName: "234"
    }
  ];
  const video = [
    {
      video: one,
      videoTitle: "Planning Helps Make",
      views: "15.4k"
    },
    {
      video: two,
      videoTitle: "This is Cloud Break",
      views: "13.2k"
    },
    {
      video: three,
      videoTitle: "Lost Your Mind",
      views: "11.7k"
    },
    {
      video: fourth,
      videoTitle: "Workplace and cat",
      views: "9.4k"
    },
    {
      video: fifth,
      videoTitle: "Awesome People",
      views: "18.1k"
    },
    {
      video: sixth,
      videoTitle: "See The Unmatched",
      views: "3.2k"
    },
    {
      video: seventh,
      videoTitle: "Dance In The Air",
      views: "17k"
    },
    {
      video: eighth,
      videoTitle: "Flying over water",
      views: "17k"
    }
  ];

  const [search, setSearch] = useState("");

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <FaBars className="Bars" />
          <Logo />
          <AiOutlineSearch className="IconSearch" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => {
              setSearch(e.target.value);
            }}
          />
          {search !== "" && (
            <IoMdCloseCircle className="close" onClick={() => setSearch("")} />
          )}
        </HeaderLeft>
        <HeaderMenu>
          <MenuItem active>Home</MenuItem>
          <MenuItem>Categories</MenuItem>
          <MenuItem className="notify">Subscriptions</MenuItem>
        </HeaderMenu>
        <HeaderSettings>
          <ButtonUpload type="file">
            <FiUploadCloud className="Upload" />
            Upload
          </ButtonUpload>
          <BsBellFill className="Bell" />
          <UserLogo user={user} />
          <FaAngleDown className="AngleDown" />
        </HeaderSettings>
      </Header>
      <MainContainer>
        <LeftSideContainer>
          <LeftContainer>
            {sideMenu.map(leftSide => {
              return <LeftSide {...leftSide} />;
            })}
          </LeftContainer>
          <SubscriptionsContainer>
            {subscription.map(subscriptions => {
              return <Subscriptions {...subscriptions} />;
            })}
            <ButtonShowMore>Show More</ButtonShowMore>
          </SubscriptionsContainer>
          <ChannelContainer>
            {channel.map(channels => {
              return <Channels {...channels} />;
            })}
          </ChannelContainer>
        </LeftSideContainer>
        <MediaContainer>
          <ProfileContainer>
            <MainAvatar avatar={avatar} />
            <ProfileInfo>
              {info.map(statistics => {
                return <Statistics {...statistics} />;
              })}
            </ProfileInfo>
          </ProfileContainer>
          <ProfileMenu>
            <ProfileAvatar>
              <img src="https://randomuser.me/api/portraits/women/3.jpg" />
              <span>Phoebe Allison</span>
            </ProfileAvatar>
            <MenuItems>
              <Link>Main</Link>
              <Link active>Videos</Link>
              <Link>Playlists</Link>
            </MenuItems>
            <FollowButtons>
              <Button className="follow">645,321</Button>
              <Button className="option">Follow</Button>
            </FollowButtons>
          </ProfileMenu>
          <Trends>
            <LinkContainer>
              <SiYoutubetv />
              <p>See what's trending</p>
            </LinkContainer>
            <FollowButtons>
              <Button className="follow">Date Added</Button>
              <Button className="option">Most Popular</Button>
            </FollowButtons>
            <ButtonPlay>
              <BsPlayFill />
              Play All
            </ButtonPlay>
          </Trends>
          <PlayContainer>
            {video
              .filter(video => {
                if (search.length === 0) {
                  return true;
                }
                return (
                  video.videoTitle
                    .toLowerCase()
                    .indexOf(search.toLowerCase()) >= 0
                );
              })
              .map(play => {
                return <Play {...play} key={play.videoTitle} />;
              })}
          </PlayContainer>
          <LoadMore>
            <BiLoaderCircle className="update" />
            <p>Load More</p>
          </LoadMore>
          <Footer>
            <FooterRow>
              <ButtonFooter>Language: English(UK)</ButtonFooter>
              <FooterLinks>
                <a href="#">About</a>
                <a href="#">Press</a>
                <a href="#">Copyright</a>
                <a href="#">Creators</a>
                <a href="#">Advertise</a>
                <a href="#">Developers</a>
              </FooterLinks>
              <ButtonFooter>History</ButtonFooter>
            </FooterRow>
            <FooterRow>
              <ButtonFooter>Location: England</ButtonFooter>
              <FooterLinks>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Policy & Safety</a>
                <a href="#">Send Feedback</a>
              </FooterLinks>
              <ButtonFooter>Help</ButtonFooter>
            </FooterRow>
          </Footer>
          <FooterLast>
            <FooterYear>© 2021 React.js</FooterYear>
            <SocialMedia>
              <ImTwitter />
              <GrInstagram />
              <ImFacebook />
            </SocialMedia>
            <Policy>Terms of Use</Policy>
          </FooterLast>
        </MediaContainer>
      </MainContainer>
    </Container>
  );
};
const Play = props => {
  const { video, videoTitle, views } = props;
  return (
    <VideoContainer>
      <video
        className="video"
        muted
        onMouseOver={event => event.target.play()}
        onMouseOut={event => event.target.pause()}
      >
        <source src={video} />
      </video>
      <VideoTitle>{videoTitle}</VideoTitle>
      <View>{`${views} views`}</View>
    </VideoContainer>
  );
};
const Statistics = props => {
  const { infoIcon, infoName } = props;
  return (
    <InfoContainer>
      <InfoIcon infoIcon={infoIcon} />
      <InfoName>{infoName}</InfoName>
    </InfoContainer>
  );
};
const Channels = props => {
  const { channelIcon, channelName } = props;
  return (
    <PopularChannel>
      <ChannelIcon channelIcon={channelIcon} />
      <ChannelName>{channelName}</ChannelName>
    </PopularChannel>
  );
};
const Subscriptions = props => {
  const { userIcon, userName } = props;
  return (
    <SubscriptionsUserContainer>
      <UserIcon userIcon={userIcon} />
      <MenuName>{userName}</MenuName>
    </SubscriptionsUserContainer>
  );
};
const LeftSide = props => {
  const { icon, menuName } = props;
  return (
    <MenuContainer>
      <Icon icon={icon} />
      <MenuName>{menuName}</MenuName>
    </MenuContainer>
  );
};

export default Video;
