// Material UI Components
import { Box, InputAdornment, TextField } from "@mui/material";
// Material UI Icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
// Styles
import { cardStyles, columStyles, trendingBox, trendingMainBox, inputStyles, columBoxStyles } from "./styles";
// Components
import MiniUser from "../user/MiniUser";

/**
 * CardColum component
 * 
 * @param {CardProps} props - The props for the component.
 * @param {string[] | string} props.cardType - The type(s) of card(s) to be rendered.
 * 
 * @returns {JSX.Element} The rendered CardColum component containing a list of Cards.
 * 
 * @description This component receives a cardType prop which can be a string or an array of strings.
 * It maps over the cardType to render a list of Cards, each with the corresponding cardType.
 */
export default function CardColum({ cardType }: CardProps) {
  const cards = Array.isArray(cardType) ? cardType.map((item) => <Cards key={item} cardType={item} />) : [];

  return (
    <Box sx={columBoxStyles}>
      <TextField
        id="search-bar"
        className="text"
        placeholder="Search"
        size="small"
        variant="standard"
        sx={inputStyles}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#63676c" }} />
            </InputAdornment>
          ),
          disableUnderline: true
        }}
      >
      </TextField>
      <Box sx={columStyles}>{cards}</Box>
    </Box>
  );
}


/**
 * Cards component
 * 
 * @param {CardProps} props - The props for the component.
 * @param {string[] | string} props.cardType - Determines the type of card to render.
 * 
 * @returns {JSX.Element} The rendered Cards component.
 * 
 * @description This component renders a card that displays either a list of users to follow
 * or trending topics based on the `cardType` prop. If `cardType` is 'followCard', it shows
 * multiple `MiniUser` components. If `cardType` is 'trendingCard', it displays a list of 
 * trending notices. The card includes a title and a 'Show more' option.
 */
function Cards({ cardType }: CardProps) {
  const title = cardType === 'followCard' ? 'Who to follow' : "What's happening";

  const trendingNotices: JSX.Element[] = [];
  for (let i = 0; i < 4; i++) {
    trendingNotices.push(
      <Box sx={trendingMainBox}>
        <Box sx={trendingBox} >
          <label>Trending in colombia</label>
          <span>Noticia</span>
          <label>80k Posts</label>
        </Box>
        <MoreHorizIcon sx={{ color: "#fff" }} />
      </Box>
    );
  };

  const followCardOrTrending = cardType === 'followCard' ? (
    <>
      <MiniUser isVerified={true} username="BFrog__" aka="Brog" isOtherUser={true} />
      <MiniUser isVerified={true} username="BFrog__" aka="Brog" isOtherUser={true} />
      <MiniUser isVerified={true} username="BFrog__" aka="Brog" isOtherUser={true} />
      <MiniUser isVerified={true} username="BFrog__" aka="Brog" isOtherUser={true} />
    </>

  ) : cardType === 'trendingCard' ? (
    trendingNotices.map((notice, index) => <Box key={index}>{notice}</Box>)
  ) : null
  return (
    <Box sx={cardStyles}>
      <span style={{ fontSize: '1.5rem', margin: '10px' }}><strong>{title}</strong></span>
      {followCardOrTrending}
      <span>Show more</span>
    </ Box>
  );
};