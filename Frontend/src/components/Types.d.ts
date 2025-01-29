// ----- PostAreaComponent types ----- //
type PostAreaComponent = {
  topSide: boolean
};

type ReplyOptionsProps = {
  title: string;
  onSelect: (title: string) => void;
  isSelected: boolean;
};

type ProgressCricleProps = {
  percentage: number;
  remaining: number;
};

// ----- MiniUser types ----- //
type MiniUserProps = {
  isVerified: boolean;
  username: string;
  aka: string;
  isOtherUser: boolean;
};

// ----- PostModal types ----- //
type PostModalProps = {
  open: boolean;
  handleClose: () => void;
};