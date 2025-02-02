import { Box } from "@mui/material";
import MiniUser from "../user/MiniUser";
import { followCardStyles } from "./styles";

export default function FollowCard({cardType}: FollowCardProps) {
  
  
  return (
    <Box sx={followCardStyles}>
      <span style={{ fontSize: '1.5rem', margin: '10px' }}><strong>Who to follow</strong></span>
      <MiniUser isVerified={true} username="BFrog__" aka="Brog" isOtherUser={true} />
      <MiniUser isVerified={true} username="BFrog__" aka="Brog" isOtherUser={true} />
      <MiniUser isVerified={true} username="BFrog__" aka="Brog" isOtherUser={true} />
      <MiniUser isVerified={true} username="BFrog__" aka="Brog" isOtherUser={true} />
      <span>Show more</span>
    </ Box>
  );
};