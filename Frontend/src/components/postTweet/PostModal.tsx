import { MouseEvent, useState } from "react";
// Material UI - Components
import { Avatar, Box, Button, Modal, Popover, TextField } from "@mui/material";
import { styles } from "./style";
// Material UI - Icons
import CloseIcon from "@mui/icons-material/Close";
import VerifiedIcon from '@mui/icons-material/Verified';
import PublicIcon from '@mui/icons-material/Public';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

type PostModalProps = {
  open: boolean;
  handleClose: () => void;
}

export default function PostModal({ open, handleClose }: PostModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box onClick={handleClose} sx={styles.background}>
        <Box sx={styles.modal} onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
          {/* Modal Head */}
          <Box sx={styles.modalHeader}>
            <CloseIcon onClick={handleClose} sx={styles.icon} />
            <Button sx={{ borderRadius: 30, textTransform: 'none', padding: '5px 20px' }}>Drafts</Button>
          </Box>
          {/* Body */}
          <Box sx={{height: '8rem'}}>
            <Box sx={styles.bodyModal}>
              <Avatar
                alt="User Avatar"
                src="https://x.com/BFrog__/photo"
                sx={{ width: 40, height: 40 }}
              />
              <TextField
                multiline variant="standard"
                placeholder="Whats Happening?!"
                InputProps={{ disableUnderline: true }}
                sx={styles.textField}
              />
            </Box>
          </Box>
          {/* Buttom */}
          <ReplyOptionsModal />

        </Box>
      </Box>
    </Modal>

  );
}

function ReplyOptionsModal() {
  const [selectedTitle, setSelectedTitle] = useState<string>("Everyone");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const replyOptions = [
    "Everyone",
    "Account you follow",
    "Verified accounts",
    "Only accounts you mention",
  ];

  const handleOpenReplyM = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

  const handleCloseReplyM = () => setTimeout(() => setAnchorEl(null), 40);

  const openReply = Boolean(anchorEl);

  return (
    <>
      <Button onClick={handleOpenReplyM} sx={{ borderRadius: 30, textTransform: "none", padding: "5px 20px" }}>
        {selectedTitle} can reply
      </Button>

      <Popover
        open={openReply}
        anchorEl={anchorEl}
        onClose={handleCloseReplyM}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          elevation: 3,
          sx: {...styles.replyPopover},
        }}
      >
        <Box>
          <Box sx={{color: '#FFF', margin: '0.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '-7rem'}}>
            <h5>Who can reply?</h5>
            <span>
              Choose who can reply to this post. <br /> Anyone mentioned can always
              reply.
            </span>
          </Box>
          {replyOptions.map((item) => (
            <ReplyOptions
              title={item}
              onSelect={(title) => {
                setSelectedTitle(title);
                handleCloseReplyM();
              }}
              isSelected={selectedTitle === item}
              key={item}
            />
          ))}
        </Box>
      </Popover>
    </>
  );
}

type ReplyOptionsProps = {
  title: string;
  onSelect: (title: string) => void;
  isSelected: boolean;
};

function ReplyOptions({ title, onSelect, isSelected }: ReplyOptionsProps) {
  const handleClick = () => onSelect(title);

  return (
    <Box sx={styles.replyOptions} onClick={handleClick}>

      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {title === "Everyone" && <PublicIcon sx={styles.replyOptionsIcon} />}
        {title === "Account you follow" && <GroupAddIcon sx={styles.replyOptionsIcon} />}
        {title === "Verified accounts" && <VerifiedIcon sx={styles.replyOptionsIcon} />}
        {title === "Only accounts you mention" && <AlternateEmailIcon sx={styles.replyOptionsIcon} />}
        <strong>{title}</strong>
      </Box>
      { isSelected ? <CheckOutlinedIcon sx={{ color: "#1e9bf0" }} /> : <Box sx={{ width: "10px" }} /> }
    </Box>
  );
}
