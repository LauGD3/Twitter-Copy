import { MouseEvent } from "react";
// Material UI - Components
import { Box, Button, Modal } from "@mui/material";
// Styles
import { styles } from "./style";
// Material UI - Icons
import CloseIcon from "@mui/icons-material/Close";
// Components
import PostArea from "./postAreaComponent";

/**
 * PostModal component
 * 
 * @param {boolean} open - Whether the modal is open
 * @param {function} handleClose - Function to call when the modal is closed
 * @returns {JSX.Element} The rendered PostModal component
 * @description This component renders a modal when the user clicks on the post button. The modal has a text field where the user can write a tweet, and a button to select who can reply to the tweet. The modal also has a button to save the tweet as a draft.
 */
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
          <Box sx={styles.modalHeader}>
            <CloseIcon onClick={handleClose} sx={styles.icon} />
            <Button sx={{ borderRadius: 30, textTransform: 'none', padding: '5px 20px' }}>Drafts</Button>
          </Box>
          <PostArea topSide={true}/>
        </Box>
      </Box>
    </Modal>
  );
};